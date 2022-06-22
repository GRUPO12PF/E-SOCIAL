import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { allQuestions,  } from "../../../redux/actions/actionQA";
import { useEffect } from "react";
import QuestionDetail from "./QuestionDetail";

export default function Questions(){
    const dispatch = useDispatch()
    const { id } = useParams();
    const question = useSelector((state) => state.questions)
    
    console.log("a ver si me trae las preguntas", question)
    
    useEffect(() => {
        // dispatch(usuarioActual())
        dispatch(allQuestions(id))
    }, [dispatch]);
    
    return(
        <div>
            {question?.map((e, i)=>{
                 return (
                   
                    <div key={i}>
                          <QuestionDetail
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