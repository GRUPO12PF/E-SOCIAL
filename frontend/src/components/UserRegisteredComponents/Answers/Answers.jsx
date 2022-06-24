import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { allAnswers  } from "../../../redux/actions/actionQA";
import { useEffect } from "react";
import NavBar from "../../CommonComponents/NavBar/NavBar";
import AnswerDetail from "./AnswerDetail";
import Footer from '../../CommonComponents/Footer/Footer'
export default function Questions(){
    const dispatch = useDispatch()
    const { id } = useParams();
    const answers = useSelector((state) => state.answers)
    const answersUser = answers.filter(ele => ele.idVendedor._id === id && ele.book !== null)  


    console.log("a ver qué trae", answersUser)
    
    
    useEffect(() => {   
         dispatch(allAnswers(id))
    }, [dispatch]);
    
    return(
        <div>
          <NavBar />
          
          <h3>HISTORIAL DE RESPUESTAS</h3>
            {answersUser?.map((e, i)=>{
                 return (
                    <div _id= {e._id} key={i}>
                          <AnswerDetail
                            mensaje= {e.mensaje}
                            book={e.book}
                            createdAt={e.createdAt}
                          />
                    </div>
                  );
                })}
                <Footer/>
        </div>
    )
}