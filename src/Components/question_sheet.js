import Question from "./question";

const QuestionsSheet=({all_questions, set_all_questions, set_done, set_score})=>{
    const calculate_score = () => {
        let temp_score = 0; 
        all_questions.map((e)=>{
            console.log(e.selected_option, e.answer)
            if(e.selected_option === e.answer){
                temp_score += 1;
            }
        })
        set_score(temp_score);
    }
    
    return(
        <div className="question-sheet">
            {all_questions.map((e,index)=>{
                return <Question q={e} index={index} all_questions={all_questions} set_all_questions={set_all_questions}/>
            })}

            <button className="submit-btn" onClick={()=>{
                set_done(true);
                calculate_score()
            }}>Submit</button>
        </div>
    )
}

export default QuestionsSheet;