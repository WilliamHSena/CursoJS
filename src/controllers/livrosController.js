import livros from "../models/Livro.js"

class LivroController {

    // static listarLivros = (req, res) => {
    //     livros.find()
    //     .populate('autor')
    //     .exec((err, livros) => {
    //         res.status(200).json(livros)
    //     })
    // }
    static listarLivros = async (req, res) => {
        try {
            //.populate('autor') para vincular a autor
            const livrosResultado = await livros.find().populate('autor');
    
            res.status(200).json(livrosResultado);
        } catch (erro) {
            res.status(500).json({ message: "Erro interno do servidor"})
        }

     };

    // static listarLivroPorId = (req, res) => {
    //     const id = req.params.id;

    //     livros.findById(id, (err, livros) => {
    //         if(err) {
    //             res.status(400).send({message: `${err.message} - Id fo livro não localizado.`})
    //         } else {
    //             res.status(200).send(livros);
    //         }
    //     })
    // }

    static listarLivroPorId = async (req, res) => {
        try {
          const id = req.params.id;
    
          const livroResultado = await livros.findById(id);
    
          res.status(200).send(livroResultado);
        } catch (erro) {
          res.status(500).send({message: `${erro.message} - Id do livro não localizado.`});
        }
      }
    // static cadastrarLivro = (req, res) => {
    //     let livro = new livros(req.body);

    //     livro.save((err) => {

    //         if(err) {
    //             res.status(500).send({message: `${err.message} - Falha ao cadastrar livro`} )
    //         } else {
    //             res.status(201).send(livro.toJSON())
    //         }
    //     })
    // }
    static cadastrarLivro = async (req, res) => {
        try {
            let livro = new livros(req.body);

            const livroResultado = await livro.save();

            res.status(200).send(livroResultado);

        } catch (erro) {
            res.status(500).send({message: `${erro.message} - Falha ao cadastrar livro.`});
        }
    }
    // static atualizarLivro = (req, res) => {
    //     const id = req.params.id;

    //     livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
    //         if(!err){
    //             res.status(200).send({message: 'Livro atualizado com sucesso'})
    //         } else {
    //             res.status(500).send({message: err.message})
    //         }
    //     })
    // }
    static atualizarLivro = async (req, res) => {
        try {
            const id = req.params.id;
            const livroResultado = await livros.findByIdAndUpdate(id, ({$set: req.body}))

            res.status(200).send(livroResultado);
        } catch (erro) {
            res.status(500).send({message: `${erro.message} - Livro não alterado.`});
        }
    }
    // static excluirLivro = (req, res) => {
    //     const id = req.params.id;

    //     livros.findByIdAndDelete(id, (err) => {
    //         if(!err){
    //             res.status(200).send({message: 'Livro removido com sucesso'})
    //         }else {
    //             res.status(500).send({message: err.message})
    //         }
    //     })
    // }
    static excluirLivro = async (req, res) => {
        try {
            const id = req.params.id;
            const livroResultado = await livros.findByIdAndDelete(id, ({$set: req.body}))

            res.status(200).send(livroResultado);
        } catch (erro) {
            res.status(500).send({message: `${erro.message} - Livro não deletado.`});
        }
    }
}

export default LivroController