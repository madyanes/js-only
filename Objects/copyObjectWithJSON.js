const person = {
  name: 'Madyan',
  job: 'JavaScript Developer',
  address: {
    street: 'Imam Bonjol street',
    code: 64181,
  },
}

const cloned = JSON.parse(JSON.stringify(person))
cloned.name = 'Eka'
cloned.address.code = 11111

console.log(`Person: ${JSON.stringify(person)}`) // {"name":"Madyan","job":"JavaScript Developer","address":{"street":"Imam Bonjol street","code":64181}}
console.log(`Person: ${JSON.stringify(cloned)}`) // {"name":"Eka","job":"JavaScript Developer","address":{"street":"Imam Bonjol street","code":11111}}
