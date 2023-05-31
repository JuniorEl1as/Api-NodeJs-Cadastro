import Express from 'express'
import cors from 'cors'
import db from '../config/dbConnect.js';
import routes from '../router/index.js';

db.on("error", console.log.bind(console, "Erro de conexãO"));

db.once("open", () =>{
    console.log("Conexão com banco ok!");
})

const app = Express();

app.use(cors());

app.use(Express.json());


routes(app);

export default app;