import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { allAnswers  } from "../../../redux/actions/actionQA";
import { useEffect } from "react";
import NavBar from "../../CommonComponents/NavBar/NavBar";
import AnswerDetail from "./AnswerDetail";

export default function Questions(){
    const dispatch = useDispatch()
    const { id } = useParams();
    const answers = useSelector((state) => state.answers)
    // const question = questions.filter(ele => !ele.answers.length > 0)  
    
    console.log("a ver qué trae", answers)
    
    useEffect(() => {   
         dispatch(allAnswers(id))
    }, [dispatch]);
    
    return(
        <div>
          <NavBar />
          <h3>HISTORIAL DE RESPUESTAS</h3>
            {answers?.map((e, i)=>{
                 return (
                    <div _id= {e._id} key={i}>
                          <AnswerDetail
                            mensaje= {e.mensaje}
                            book={e.book}
                          />
                    </div>
                  );
                })}
        </div>
    )
}