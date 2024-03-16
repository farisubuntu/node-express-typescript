import express,{Express,Request,Response} from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import helmet from 'helmet'

dotenv.config()

const PORT=process.env.PORT || 3000;

const app:Express=express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req:Request,res:Response)=>{
  res.send('<h1>Hello from typescript and express server</h1>');
});

app.listen(PORT,()=>console.log(`server is running on port ${PORT}`))


