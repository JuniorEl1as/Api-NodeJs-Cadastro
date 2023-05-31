import  Express  from "express";
import cors from 'cors'

import clientes from "./clienteRoutes.js";


const routes = (app) =>{
    app.route('/').get((req, res ) => {
        res.json({
            
        })
    })
    app.use(
        cors(),
        Express.json(),
        clientes
    )
}

export default routes