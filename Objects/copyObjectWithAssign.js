const person = {
  name: 'Madyan',
  job: 'JavaScript Developer',
  address: {
    street: 'Imam Bonjol street',
    code: 64181,
  },
}

const cloned = Object.assign({}, person)

cloned.name = 'Eka' // this will only change the name of cloned
cloned.address.code = 11111 // this will not only change the address of cloned, but also the address of person

console.log(`Person: ${JSON.stringify(person)}`) // {"name":"Madyan","job":"JavaScript Developer","address":{"street":"Imam Bonjol street","code":11111}}
console.log(`Person: ${JSON.stringify(cloned)}`) // {"name":"Eka","job":"JavaScript Developer","address":{"street":"Imam Bonjol street","code":11111}}
