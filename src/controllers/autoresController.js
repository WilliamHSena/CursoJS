import autores from "../models/Autor.js"

class AutorController {

    static listarAutores = async (req, res) => {
        try {
            const autoresResultado = await autores.find();
    
            res.status(200).json(autoresResultado);
        } catch (erro) {
            res.status(500).json({ message: "Erro interno do servidor"})
        }

     };

    // static listarAutorPorId = (req, res) => {
    //     const id = req.params.id;

    //     autores.findById(id, (err, autores) => {
    //         if(err) {
    //             res.status(400).send({message: `${err.message} - Id do autor não localizado.`})
    //         } else {
    //             res.status(200).send(autores);
    //         }
    //     })
    // }
    
     static listarAutorPorId = async (req, res) => {
        try {
          const id = req.params.id;
    
          const autorResultado = await autores.findById(id);
    
          res.status(200).send(autorResultado);
        } catch (erro) {
          res.status(500).send({message: `${erro.message} - Id do Autor não localizado.`});
        }
      }

    // static cadastrarAutor = (req, res) => {
    //     let autor = new autores(req.body);

    //     autor.save((err) => {

    //         if(err) {
    //             res.status(500).send({message: `${err.message} - Falha ao cadastrar autor`} )
    //         } else {
    //             res.status(201).send(autor.toJSON())
    //         }
    //     })
    // }

    static cadastrarAutor = async (req, res) => {
        try {
            let autor = new autores(req.body);

            const autorResultado = await autor.save();

            res.status(200).send(autorResultado);

        } catch (erro) {
            res.status(500).send({message: `${erro.message} - Autor não cadastrado.`});
        }
    }

    // static atualizarAutor = (req, res) => {
    //     const id = req.params.id;

    //     autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
    //         if(!err){
    //             res.status(200).send({message: 'Autor atualizado com sucesso'})
    //         } else {
    //             res.status(500).send({message: err.message})
    //         }
    //     })
    // }

    static atualizarAutor = async (req, res) => {
        try {
            const id = req.params.id;
            const autorResultado = await autores.findByIdAndUpdate(id, ({$set: req.body}))

            res.status(200).send(autorResultado);
        } catch (erro) {
            res.status(500).send({message: `${erro.message} - Autor não alterado.`});
        }
    }

    // static excluirAutor = (req, res) => {
    //     const id = req.params.id;

    //     autores.findByIdAndDelete(id, (err) => {
    //         if(!err){
    //             res.status(200).send({message: 'Autor removido com sucesso'})
    //         }else {
    //             res.status(500).send({message: err.message})
    //         }
    //     })
    // }

    static excluirAutor = async (req, res) => {
        try {
            const id = req.params.id;
            const autorResultado = await autores.findByIdAndDelete(id, ({$set: req.body}))

            res.status(200).send(autorResultado);
        } catch (erro) {
            res.status(500).send({message: `${erro.message} - Autor não deletado.`});
        }
    }
}

export default AutorController