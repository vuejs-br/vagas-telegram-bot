const NOBODY = 'POR FAVOR, SÓ POSTE SE A VAGA FOR PARA FRONT-END!'

const regekiz = [
    /(([\t ]*nossa|[#]*[\t ]*[#]+[\t ]*(nossa)?)[\t ]*empresa[\t ]*)/gmi,
    /([\t ]*[#]*[\t ]*[#]+[\t ]*n[íi]vel[\t ]*)/gmi,
    /([\t ]*[#]*[\t ]*[#]+[\t ]*regime[\t ]*)/gmi,
    /([\t ]*[#]*[\t ]*[#]+[\t ]*aloca[çc][ãa]o[\t ]*)/gmi,
    /([\t ]*[#]*[\t ]*[#]+[\t ]*local[\t ]*)/gmi,
    /([\t ]*[#]*[\t ]*[#]+[\t ]*label[s]?[\t ]*)/gmi,
    /([\t ]*[#]*[\t ]*[#]+[\t ]*requisito[s]?[\t ]*)/gmi,
    /([\t ]*[#]*[\t ]*[#]+[\t ]*contrata[çc][ãa]o[\t ]*)/gmi,
    /([\t ]*[#]*[\t ]*[#]+[\t ]*descri[çc][ãa]o da vaga[\t ]*)/gmi,
    /([\t ]*[#]*[\t ]*[#]+[\t ]*como se candidatar[\t ]*)/gmi
]

const getMsg = ({body, title, labels, html_url}) =>  {
  body = regekiz.reduce((txt, rgx) => {
    txt = txt.replace(rgx, ' ')
    return txt
  }, body)
  
  [ '**', '##', '###', '####',
    '> Vaga Remota durante a pandemia'
  ].forEach(w => { body = body.split(w).join(' ') });
  
  [' ', '\r\n', '\r','\n'].forEach(c => {
    body = body.split(c)
    .map(w => w.trim())
    .filter(w => w !== '')
    .slice(0, 65)
    .join(' ')
  });

  body = body.split('<!--')
    .map(t => t.split('-->'))
    .map(t => t.length === 1 ? t : t.slice(1))
    .flatMap(t => t)
    .map(t => t.trim())
    .join(' ').trim()
  
  const msgTitle = title.split('[')
    .map(t => t.split(']'))
    .flatMap(t => t.length === 1 ? t : `${t[0].toUpperCase()}\n\n${t[1].trim()}`)
    .map(t => t.replace('/',' ').trim())
    .join(' ').trim()

  const msgLabels = labels.map(label => label.name.trim()).join(', ').toLowerCase()
  const msgBody = !body.includes(NOBODY) ? '```\n'+body+'...```\n' : ''
  
  let msg = `#VAGA ${msgTitle}\n_${msgLabels}_\n\n${msgBody}\n${html_url}`;

  return msg.trim()
}

module.exports = { getMsg }
