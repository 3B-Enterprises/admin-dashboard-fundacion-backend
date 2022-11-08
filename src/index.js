require('dotenv').config()
const { connectToDatabases } = require('./database')

const app = require('./app')

async function main () {
    await app.listen(app.get('port'))
    await connectToDatabases()
    console.log('[ Server on port',app.get('port'),']')
}

main()
