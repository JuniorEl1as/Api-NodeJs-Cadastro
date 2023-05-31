import Express from 'express'
import clienteController from '../controllers/clienteController.js';

const router = Express.Router();

router
    .get("/clientes", clienteController.mostrarUsuarios)
    .post("/clientes" , clienteController.cadastrarCliente)
    .put("/clientes/:id", clienteController.atualizarCliente)
    .delete("/clientes/:id", clienteController.deletarClientes)



export default router;