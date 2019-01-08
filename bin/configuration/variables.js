const variables = {
    Api: {
        port: process.env.port || 3000
    },
    Database: {
        connection: process.env.connection || 'mongodb://<dbuser>:<dbpassword>@ds251022.mlab.com:51022/nofood'
    }
}
module.exports = variables;

/*
o connect using the mongo shell:
mongo ds251022.mlab.com:51022/nofood -u <dbuser> -p <dbpassword>


To connect using a driver via the standard MongoDB URI (what's this?):
mongodb://<dbuser>:<dbpassword>@ds251022.mlab.com:51022/nofood
obs: não pode por caracteres especiais
*/