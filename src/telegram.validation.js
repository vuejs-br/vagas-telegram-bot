const log = require('debug')('vuejsbr:vagasbot:telegram')
const error = require('debug')('vuejsbr:vagasbot:telegram:error')

const {
  TELEGRAM: {
    botToken, chatId, error: { msg400: errorMsg400, msg401: errorMsg401}
  }
} = require('./config')

module.exports = () => {
  if (!botToken) {
    error('BOT_TOKEN', errorMsg401)
    process.exit(1)
  }

  log('INIT: BOT_TOKEN OK')

  if (!chatId) {
    error('CHAT_ID', errorMsg400)
    process.exit(1)
  }

  log('INIT: CHAT_ID OK')
}
