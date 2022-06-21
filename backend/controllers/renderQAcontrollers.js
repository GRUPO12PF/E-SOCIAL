import Answer from "../models/modelsforquestions/Answer.js"
import Question from "../models/modelsforquestions/Question.js"
import Usuario from "../models/Usuario.js"

const postQuestion = async (req, res) => {
    try {
        const{id} = req.params

        const user = await Usuario.findById(id)

        const newQuestion = new Question({
            mensaje : req.body.mensaje,
            idComprador : user._id
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

        const user = await Usuario.findById(id)

        const newAnswer = new Answer({
            mensaje : req.body.mensaje,
            idVendedor : user._id,
            question: idQuestion
        })
        const answer = await newAnswer.save()
        user.answers = user.answers.concat(answer._id)
        await user.save()
        res.status(201).json(answer);
    } catch (error) {
        console.log(error)
    }
}

const getQA = async (req, res) => {
    try {
        const QA = await Answer.find().populate("question")
        let response = QA
    
        res.json(response)
      } catch (error) {
        console.log(error)
      }
}

export {
    postQuestion,
    postAnswer,
    getQA
  }
