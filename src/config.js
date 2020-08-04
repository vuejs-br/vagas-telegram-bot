const GITHUB_API = 'https://api.github.com'
const GITHUB_ISSUES = 'issues?state=open&direction=desc&since='

const TELEGRAM = {
  botToken: process.env.TELEGRAM_BOT_TOKEN,
  chatId: process.env.TELEGRAM_CHAT_ID,
  sendMessageConfig: {
    disable_web_page_preview: true,
    parse_mode:'Markdown'
  },
  startMsg: 'Procuro vagas de VueJS por ai e publico no grupo @vuejsbrasil',
  error: {
    msg401: 'TelegramError: 401: BOT_TOKEN environment is required',
    msg400: 'TelegramError: 400: CHAT_ID environment is required'
  }
}

Object.freeze(TELEGRAM)

const issuesUrl = repoName => `${GITHUB_API}/repos/${repoName}/${GITHUB_ISSUES}`

module.exports = {
  TELEGRAM,
  issuesUrl
}
