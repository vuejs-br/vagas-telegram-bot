const NOBODY = 'POR FAVOR, SÓ POSTE SE A VAGA FOR PARA FRONT-END!'

const getMsg = ({body, title, labels, html_url}) =>  {
  [
    '## Nossa empresa', '## Nossa Empresa',
    'Nossa empresa', 'Nossa Empresa', '## Empresa',
    '## Descrição da vaga', '## Local', '## Requisitos',
    '## Contratação', '## Como se candidatar', '## Labels',
    '#### Alocação', '#### Regime', '#### Nível',
    '**', '##', '###', '####',
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
