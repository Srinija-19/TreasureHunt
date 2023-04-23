require('dotenv').config();
const DBurl = process.env.DB_URL

const mongoose = require('mongoose')



const connectToMongo = async () => {
    try {
        
        const conn = await mongoose.connect(DBurl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
         console.log(`MongoDB Connected: ${conn.connection.host} `);
    }
    catch (error)
    {
        console.log(`Error: ${error.message}`)
        process.exit()
    }
    
}


module.exports = connectToMongo;