import React, {useState} from 'react'; 
import style from './Styles/style.css'
import Sheet from './Components/questions_sheet';
import Questions from './Components/questions_api';
import Result from './Components/result';

function is_present(arr,q_index){
  for(let i=0;i<arr.length;i++){
    if(q_index === arr[i]){
      return true;
    }
  }
  return false; 
}

const App=()=>{
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

  const[quiz_questions,set_quiz_questions] = useState(new_arr);
  const [submitted,set_submitted] = useState(false); 
  const[score,set_score] = useState(0);

  return(
    <>
      <h1 className="heading">Quiz</h1>
      {submitted && <Result set_quiz_questions={set_quiz_questions} set_submitted={set_submitted} score={score} max_score={quiz_questions.length}/>}
      {!submitted &&
      <div className="questions-sheet-div">
        <Sheet set_score={set_score} set_submitted={set_submitted} quiz_questions={quiz_questions} set_quiz_questions={set_quiz_questions}/> 
      </div>
      }
    </>
  )    
}

export default App 
