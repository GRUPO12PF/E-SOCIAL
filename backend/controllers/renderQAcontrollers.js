import Answer from "../models/modelsforquestions/Answer.js"
import Question from "../models/modelsforquestions/Question.js"
import RenderModelQA from "../models/modelsforquestions/RenderModelQA.js"

const postQuestion = async (req, res) => {
    try {
        const{idComprador} = req.params

        order.comprador = req.usuario._id

        const newQuestion = new Question({books: book._id})

    } catch (error) {
        console.log(error)
    }
}

const postAnswer = async (req, res) => {

}

const getQA = async (req, res) => {

}