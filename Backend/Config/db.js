
import { mongoose } from 'mongoose';
const connectDB = async ()=>
{

    try {
        await mongoose.connect('mongodb://localhost:27017/apniDukan', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Server connected to MongoDb!');
    } 
    
    
    catch (err) {
        // throw new Error("whoops!");
        console.error("error in db coonection"+err);
    }

    
}

export {connectDB}