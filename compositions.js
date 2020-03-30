const users = [
  { age: 17, name: 'nano', lastName: 'Soto'},
  { age: 18, name: 'Chanchito', lastName: 'Feliz'},
  { age: 12, name: 'Loreto', lastName: 'Fernandez'},
  { age: 1, name: 'Sophia', lastName: 'Zapata'}
]

const comspose =  (...fns) => x => fns.reduceRight((total, current) => current(total), x)

const pipe =  (...fns) => x => fns.reduce((total, current) => current(total), x)

const filter =  f => users => users.filter(f)

const head = user => user[0]

const formatUser =  user => ({
  fullName: `${user.name} ${user.lastName}`,
  age: user.age
})

const formatFinally = user =>  `${user.fullName} have ${user.age} age old.`

const getFirstInfant = pipe(
  users => users.filter( user => user.age < 2),
  head,
  formatUser,
  formatFinally
  )

  console.log(getFirstInfant(users))


