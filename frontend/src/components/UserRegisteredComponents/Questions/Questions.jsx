import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { allQuestions,  } from "../../../redux/actions/actionQA";
import { useEffect } from "react";
import QuestionDetail from "./QuestionDetail";
import NavBar from "../../CommonComponents/NavBar/NavBar";

export default function Questions(){
    const dispatch = useDispatch()
    const { id } = useParams();
    const questions = useSelector((state) => state.questions)
    const question = questions.filter(ele => !ele.answers.length > 0)

    console.log("a ver si me trae las preguntas", question)
    
    useEffect(() => {
        // dispatch(usuarioActual())
        dispatch(allQuestions(id))
    }, [dispatch]);
    
    return(
        <div>
          <NavBar />
          <h3>HISTORIAL DE PREGUNTAS</h3>
            {question?.map((e, i)=>{
                 return (
                   
                    <div _id= {e._id} key={i}>
                          <QuestionDetail
                            _id= {e._id}
                            mensaje= {e.mensaje}
                            book={e.book}
                            idComprador={e.idComprador}
                          />
                    </div>
                  );
                })}
        </div>
    )
}