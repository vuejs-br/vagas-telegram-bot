const fetch = require('node-fetch');
const add = require('date-fns/add')
const formatISO = require('date-fns/formatISO')
const { utcToZonedTime } = require('date-fns-tz')
const { TIME_ZONE, issuesUrl } = require('./config')

const log = require('debug')('vuejsbr:vagasbot:getIssues')

log('INIT: current datetime:', formatISO(utcToZonedTime(new Date(), TIME_ZONE)))

const getIssues = async repoName => {
  const past30minutes = add(new Date(), { minutes: -30 })
  let lastDateRequest = formatISO(utcToZonedTime(past30minutes, TIME_ZONE))

  log(`getting issues opened from ${repoName} since ${lastDateRequest}`)

  const result = await fetch(issuesUrl(repoName) + lastDateRequest)
    .then(response => response.json())

  log(`${repoName} ${result.length} issues`)

  return result
}

module.exports = { getIssues }
