import mongoose from "mongoose";

const clienteSchema = mongoose.Schema(
    {
        id:{type: String},
        usuario: {type: String, required: true},
        senha:{type: String, required: true}
    }
)

const clientes = mongoose.model("clientes", clienteSchema);

export default clientes;