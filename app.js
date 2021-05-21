const secret = 'FHshFHsh87R';
const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema/schema');
const testSchema = require('./schema/types_schema');

const app = express();

mongoose.connect(`mongodb+srv://aminahio:${secret}@gq-practice.xtngv.mongodb.net/graphql-prax?retryWrites=true&w=majority`, { useNewUrlParser: true });

mongoose.connection.once('open', () => {
	console.log('Yes! We are connected baby!')
});

app.use('/graphql', graphqlHTTP({
	graphiql: true,
	schema: schema
}));

app.listen(4000, () => { //localhost:4000
	console.log('Listening for requests on my bad bitch port 4000!');
});