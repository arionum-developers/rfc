const githubEvent = require(process.env.GITHUB_EVENT_PATH)
const https = require('https')

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}

const messageData = JSON.stringify({
  embeds: [{
    title: '[RFC Created] ' + githubEvent.issue.title,
    description: githubEvent.issue.html_url,
    color: 0xE74C3C
  }]
})

const request = https.request(process.env.DISCORD_WEBHOOK, options)

request.write(messageData)
request.end()
