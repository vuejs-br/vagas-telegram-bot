const { getIssues } = require('./getIssues')
const { vuejsOnly, sendMessage } = require('./watch.utils')

const error = require('debug')('vuejsbr:vagasbot:watch:error')

const watch = (repoName = 'vuejs-br/vagas') => async context => {
  try {
    await getIssues(repoName)
      .then(vuejsOnly)
      .then(sendMessage)
  } catch (err) {
    error(err)
  } finally {
    context.done();
  }
}

module.exports = { watch }
