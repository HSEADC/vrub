import Airtable from 'airtable'

const token =
  'pataUogeU3aX0RDHb.3e0dc253f93bbc3048442e94628ce02184cad3ebc4515173467996009f8a4ef6'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})

let base = Airtable.base('appMPv5NUaVn8bZyR')

function getPostTeasers() {
  return new Promise((resolve, reject) => {
    const content = []

    base('teasers')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        content.push({
          id: record.id,
          tags: record.fields['Tags'],
          title: record.fields['Title'],
          description: record.fields['Description'],
          image: record.fields['Image'],
          url: record.fields['Url']
        })

        resolve(content)
      })
    console.log(content)
  })
}

export { getPostTeasers }
