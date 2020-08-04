const fetch = require('node-fetch')
const add = require("date-fns/add")
const formatISO = require("date-fns/formatISO")
const { issuesUrl } = require('./config')

const log = require('debug')('vuejsbr:vagasbot:getIssues')

log('INIT: current datetime:', formatISO(new Date()))

const getIssues = async repoName => {
  const past30minutes = add(new Date(), { minutes: -30 })
  let sinceDate = formatISO(past30minutes)

  log(`getting issues opened from ${repoName} since ${sinceDate}`)

  const result = await fetch(issuesUrl(repoName) + sinceDate)
    .then(response => response.json())
    .then(issues => issues.filter(i => i.created_at >= sinceDate))

  log(`${repoName} ${result.length} issues`)

  return result
}

module.exports = { getIssues }
