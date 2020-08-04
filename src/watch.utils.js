const { getMsg } = require('./watch.getMsg')
const { telegramSendMessage } = require('./telegram')

const vuejsOnly = issues => issues.filter(i => 
  ['VUE', 'VUEJS', 'VUE.JS', 'VUE JS'].some(vuejs =>
    [i.title, i.body]
      .map(txt => txt.toUpperCase())
      .some(txt => txt.includes(vuejs))
  )
)

const sendMessage = issues => issues.map(getMsg).forEach(telegramSendMessage)

module.exports = { vuejsOnly, sendMessage }
