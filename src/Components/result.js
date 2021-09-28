import react from "react";
import Questions from "./questions_api";

function is_present(arr,q_index){
    for(let i=0;i<arr.length;i++){
      if(q_index === arr[i]){
        return true;
      }
    }
    return false; 
  }

function retest(set_quiz_questions,set_submitted){
    for(let i=0;i<Questions.length;i++){
        Questions[i].selected_option = ""
    }
    let arr = []; 
    for(let i=0;i<4;i++){
        let q_index = Math.floor(Math.random()*12); 
        while(is_present(arr,q_index)){
        q_index = Math.floor(Math.random()*12); 
        }

        arr.push(q_index)
    }
    let new_arr = []
    for(let i=0;i<arr.length;i++){
        new_arr.push(Questions[arr[i]]);    
    }

    set_quiz_questions(new_arr)
    set_submitted(false); 
}

const Result=({set_quiz_questions, set_submitted, score,max_score})=>{
    
    return(
        <div className="result-page-outer">
            <div className="result-page">
                <span className="score-displayer">
                Score : <span className="user-score">{score} </span> 
                Out of <span className="max-score"> {max_score}</span> 
                </span>

                <button className="re-test-btn" onClick={()=>{
                    retest(set_quiz_questions,set_submitted)
                }}>Re-test</button>
            </div>

        </div>
    )
}

export default Result
