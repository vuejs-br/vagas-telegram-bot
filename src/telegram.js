require('./telegram.validation')()

const { Telegraf } = require('telegraf')

const {
  TELEGRAM: { botToken, startMsg, chatId, chatIdMonitor, sendMessageConfig }
} = require('./config')

const log = require('debug')('vuejsbr:vagasbot:telegram')

const bot = new Telegraf(botToken)
bot.start((ctx) => ctx.reply(startMsg))
bot.launch()

log('INIT: bot.launch')

bot.telegram.getChat(chatId).then(log)

const telegramSendMessage = msg => {
  log('sending message')
  bot.telegram.sendMessage(chatId, msg, sendMessageConfig)
  if(chatIdMonitor) {
    log('sending message monitor')
    bot.telegram.sendMessage(chatIdMonitor, msg, sendMessageConfig)
  }
}

module.exports = { telegramSendMessage }
