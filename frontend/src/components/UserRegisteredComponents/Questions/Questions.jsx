import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { allQuestions,  } from "../../../redux/actions/actionQA";
import { useEffect } from "react";
import QuestionDetail from "./QuestionDetail";
import NavBar from "../../CommonComponents/NavBar/NavBar";

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
          <NavBar />
          <h3>HISTORIAL DE PREGUNTAS</h3>
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