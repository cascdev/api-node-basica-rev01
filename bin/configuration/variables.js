const variables = {

    Api: {
        port: 3000 || process.env.port 
    },
    Database: {
        connection: process.env.connection || 'mongodb://localhost:27017/test'
    }
    
}

module.exports = variables

