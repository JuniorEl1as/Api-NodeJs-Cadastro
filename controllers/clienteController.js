import clientes from '../model/clienteModel.js'

class clienteController {
    static mostrarUsuarios = (req, res) => {
        clientes.find()
        .exec((err, clientes) => {
            res.status(200).json(clientes)
        })
    }

    static cadastrarCliente = (req , res ) =>{
        let cliente = new clientes(req.body)
        cliente.save((err) =>{
            if(err){
                res.status(500).send({message: `erro ao cadastrar cliente`})
            }
            else{
                res.status(201).send(cliente.toJSON())
            }
        })
    }

    static atualizarCliente = (req , res) => {

        const id = req.params.id;

        clientes.findByIdAndUpdate(id, {$set: req.body }, (err) => {
            if(!err){
                res.status(200).send({message: "Cliente atualizado com sucesso!"})
            }
            else{
                res.status(500).send({message: 
                "Cliente não atualizado"})
            }
        })
    }

    static deletarClientes = (req, res) => {
        const id = req.params.id

        clientes.findByIdAndRemove(id, (err) => {
            if(!err){
                res.status(200).send({message: "Cliente removido do banco"})
            }else{
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default clienteController;