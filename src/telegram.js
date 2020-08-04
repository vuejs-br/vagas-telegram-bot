const { Telegraf } = require('telegraf')

const log = require('debug')('vuejsbr:vagasbot:telegram')

const {
  TELEGRAM: { botToken, startMsg, chatId, sendMessageConfig }
} = require('./config')

require('./telegram.validation')()

const bot = new Telegraf(botToken)
bot.start((ctx) => ctx.reply(startMsg))
bot.launch()

log('INIT: bot.launch')

bot.telegram.getChat(chatId).then(log)

const telegramSendMessage = msg => {
  log('sending message')
  bot.telegram.sendMessage(chatId, msg, sendMessageConfig)
}

module.exports = { telegramSendMessage }
