# Project for trying out GraphQL

## Useful guides: 
### https://github.com/WebDevSimplified/Learn-GraphQL
### https://youtu.be/BcLNfwF04Kw
<br>

## Query example
End point is: /graphql

### Get pokemon by Id (it will return the name of the pokemon with id 1213):
`{
  pokemon(id: 1213) {
    nom
  }
}`

### Get all pokemons (it will return the list of all names of pokemons):
`{
  pokemons {
    nom
  }
}`