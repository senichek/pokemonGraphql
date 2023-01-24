const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt } = require('graphql');

const client = require("./dbClient");

const Pokemon = new GraphQLObjectType({
    name: 'Pokemon',
    description: 'This represents a pokemon',
    fields: () => ({
      id: { type: GraphQLInt },
      nom: { type: GraphQLString },
      pv: { type: GraphQLInt },
      attaque: { type: GraphQLInt },
      defense: { type: GraphQLInt },
    })
  })

  const RootQueryType = new GraphQLObjectType({
    name: 'Pokemon_query',
    description: 'Root Query',
    fields: () => ({
      pokemon: {
        type: Pokemon,
        description: 'A Single pokemon',
        args: {
          id: { type: GraphQLInt }
        },
        resolve: async (parent, args) => {
            const query = {
                text: `SELECT * FROM pokemon WHERE pokemon.id = $1`,
                values: [args.id]
              };
            const result = await client.query(query);
            return result.rows[0];
        }
      },
      pokemons: {
        type: new GraphQLList(Pokemon),
        description: 'List of pokemons',
        resolve: async () => {
            const result = await client.query("SELECT * FROM pokemon");
            return result.rows;
        }
      }
    })
  })

const schema = new GraphQLSchema({
    query: RootQueryType
  })

module.exports = schema;