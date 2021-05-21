const graphql = require('graphql');

const {
	GraphQLSchema,
  GraphQLObjectType,
	GraphQLID,
	GraphQLString,
	GraphQLBoolean,
	GraphQLInt,
	GraphQLFloat,
	GraphQLNonNull
} = graphql

// Scalar Types -- Not an object, per se, but an integer or float

/*
	String = GraphQLString
	Int
	Float
	Boolean
	ID -- native, unique identifier
*/

const Person = new GraphQLObjectType({
	name: 'Person',
	description: 'Represents a person type',
	fields: () => ({
		id: { type: GraphQLID },
		name: { type: GraphQLNonNull(GraphQLString) },
		age: { type: GraphQLInt },
		isMarried: { type: GraphQLBoolean },
		gpa: { type: GraphQLFloat }
	})
});

const RootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	description: 'Root query type',
	fields: {
		person: {
			type: Person,
			resolve(parent, args) {
				let personObj = {
					name: null,
					age: 35,
					isMarried: true,
					gpa: 3.7
				}
				return personObj;
			}
		}
	}
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});





