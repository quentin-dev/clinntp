export async function textArrayToString (textArray) {
  var text = ''

  textArray.forEach(elt => (text += elt + '\n'))

  return text.substring(0, text.length - 1)
}

async function msgIndexToSubject (client, index) {
  const head = await client.head(index)

  // console.log(head.article.headers)

  return head.article.headers.SUBJECT
}

export function getSubjects (array, client) {
  // const { StringDecoder } = require('string_decoder')
  // const decoder = new StringDecoder('utf8')
  return Promise.all(
    array.map(async (ndx) => {
      var subject = await msgIndexToSubject(client, ndx)
      // subject = await textArrayToString(subject)
      return subject // decoder.write(subject)
    })
  )
}
