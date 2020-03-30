const users = [
  { age: 17, name: 'nano', lastName: 'Soto'},
  { age: 18, name: 'Chanchito', lastName: 'Feliz'},
  { age: 12, name: 'Loreto', lastName: 'Fernandez'},
  { age: 1, name: 'Sophia', lastName: 'Zapata'}
]

const  getFirstInfant = data => {
  const infants = data.filter(infant => infant.age < 2)
  const firstInfant = infants[0]
  const infant = {
    fullName = `${firstInfant.name} ${firstInfant.lastName}`,
    age: firstInfant.age
  }

  return `${infant.fullName} have ${infant.age}`
}
