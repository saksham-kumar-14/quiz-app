import "./Styles/style.css";
import QuestionsApi from "./Components/questions_api";
import { useState } from "react";
import QuestionsSheet from "./Components/question_sheet";
import Result from "./Components/result";

const App = () => {

  const arr = []
  while(arr.length<5){
    let element = QuestionsApi[Math.floor(Math.random()*(QuestionsApi.length-1))];
    while(arr.includes(element)){
      element = QuestionsApi[Math.floor(Math.random()*(QuestionsApi.length-1))];
    }
    arr.push(element)
  }
  const [all_questions, set_all_questions] = useState(arr);
  const [done, set_done] = useState(false);
  const [score, set_score] = useState("not submitted yet"); 

  return(
    <div className="app-div">
      <h1 className="heading">QUIZ</h1>

      {done? <Result set_all_questions={set_all_questions} set_done={set_done} score={score} set_score={set_score}/> 
      : <QuestionsSheet all_questions={all_questions} set_all_questions={set_all_questions} done={done} set_done={set_done} set_score={set_score} />}

    </div>
  )
}

export default App;