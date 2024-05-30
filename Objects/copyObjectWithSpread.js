const person = {
  name: 'Madyan',
  job: 'JavaScript Developer',
  address: {
    street: 'Imam Bonjol street',
    code: 64181,
  },
}

const cloned = { ...person }

cloned.name = 'Eka' // this will only change the name of cloned, not the name of person
cloned.address.code = 11111 // this will not only change the address of cloned, but also the address of person

console.log(`Person: ${JSON.stringify(person)}`) // {"name":"Madyan","job":"Web Developer","address":{"street":"Imam Bonjol street","code":11111}}
console.log(`Person: ${JSON.stringify(cloned)}`) // {"name":"Eka","job":"Web Developer","address":{"street":"Imam Bonjol street","code":11111}}

// We are able to Deep Copy a normal object using the spread operator,
// but not able to Deep Copy a nested object.
// It means when we change the property of the nested object of the cloned object
// then it will change the original object property also.
// It means that for nested object copy using Spread Operator behave like Shallow Copy.
