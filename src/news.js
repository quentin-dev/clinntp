import inquirer from 'inquirer'

import { textArrayToString, getSubjects } from './utils'

export async function news (client, limit, newsgroups) {
  const groups = (await client.listActive(newsgroups)).newsgroups

  const group = await inquirer.prompt([
    {
      type: 'list',
      message: 'Pick a newsgroup:',
      name: 'chosenGroup',
      choices: groups.map(elt => { return elt.name }).sort().concat(new inquirer.Separator(''))
    }
  ])

  const details = await client.listGroup(group.chosenGroup)
  const subjects = await getSubjects(details.group.articleNumbers, client)

  if (subjects.length === 0) {
    console.log('No news!')
    process.exit(1)
  }

  const occurences = (limit < 0 || subjects.length < limit) ? subjects.length : limit

  const chosenNews = await inquirer.prompt([
    {
      type: 'list',
      message: 'Pick a news:',
      name: 'chosenNews',
      choices: subjects.reverse().slice(0, occurences).concat(new inquirer.Separator(''))
    }
  ])

  const messageID = parseInt(details.group.articleNumbers.reverse().slice(0, occurences)[subjects.indexOf(chosenNews.chosenNews)])
  const body = await client.body(messageID)
  const bodytxt = await textArrayToString(body.article.body)
  console.log(bodytxt)
}
