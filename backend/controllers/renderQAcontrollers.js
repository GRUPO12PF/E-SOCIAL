import Book from "../models/Book.js"
import Answer from "../models/modelsforquestions/Answer.js"
import Question from "../models/modelsforquestions/Question.js"
import Usuario from "../models/Usuario.js"

const postQuestion = async (req, res) => {
    try {
        //id del usuario que pregunta
        const{id} = req.params
        //idBook es el id del libro al que VAMOS  dejar la pregunta. 
        const user = await Usuario.findById(id)

        const newQuestion = new Question({
            idComprador : user._id,
            mensaje : req.body.mensaje,
            book: req.body.book,
            idVendedor: req.body.idVendedor
        })
        const question = await newQuestion.save()
        user.questions = user.questions.concat(question._id)
        await user.save()
        res.status(201).json(question);
    } catch (error) {
        console.log(error)
    }
}

const postAnswer = async (req, res) => {
    try {
        const{id} = req.params
        const {idQuestion} = req.body
        const {idBook} = req.body

        const user = await Usuario.findById(id)
        const book = await Book.findById(idBook)

        const newAnswer = await new Answer({
            mensaje : req.body.mensaje,
            idVendedor : user._id,
            question: idQuestion,
            book: idBook
        })
        const answer = await newAnswer.save()
        user.answers = user.answers.concat(answer._id)
        await user.save()
        res.status(201).json(answer);
    } catch (error) {
        console.log(error)
    }
}
//-----------------------------------------
//trae todas las respuestas 
const getQA = async (req, res) => {
    try {

        const QA = await Answer.find().populate("question")
        let response = QA
    
        res.json(response)
      } catch (error) {
        console.log(error)
      }
}
//-----------------------------------------
//trae todas las preguntas
const getQuestion = async (req, res) => {
    try {
        const QA = await Question.find()
        let response = QA
    
        res.json(response)
      } catch (error) {
        console.log(error)
      }
}
//-----------------------------------------
//trae una respuesta por id
const QAIdBook = async(req, res)=>{
    const {id} = req.params
    const qaId = await Answer.find({book: id}).populate("question")

    try{
        res.json(qaId)

    } catch(error){
        console.log(error)
    }

}

const eliminarAnswer = async (req, res) => {
    try {
      const id = req.params.id
      const QAId = await Answer.findOneAndDelete({ _id: id })
      res.json({ QAId })
    } catch (error) {
      console.log(error)
    }
  }

  const eliminarQuestion = async (req, res) => {
    try {
      const id = req.params.id
      const QAId = await Question.findOneAndDelete({ _id: id })
      res.json({ QAId })
    } catch (error) {
      console.log(error)
    }
  }

//-----------------------------------------
//trae toda las preguntas del vendedor
const getQuestions = async (req, res) => {
    try {
        const id = req.params.id
        const allQuestions = await Question.find({idVendedor: id}).populate("idComprador")
        res.send(allQuestions)
    } catch (error) {
        console.log(error)
    }
  }

  
export {
    postQuestion,
    postAnswer,
    getQA,
    getQuestion,
    QAIdBook,
    eliminarAnswer,
    getQuestions,
    eliminarQuestion
  }

