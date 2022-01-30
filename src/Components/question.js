

const Question=({index,q, all_questions, set_all_questions})=>{

    const handle_answer = (selected_option) => {
        const arr = []
        all_questions.map((e)=>{
            if(e===q){
                e.selected_option = selected_option
            }
            arr.push(e) 
        })
        set_all_questions(arr);
        console.log(all_questions)
    }

    return(
        <div className="question-div">
            <p> {index+1}) {q.question}</p>

            <div>
                <button className={q.selected_option===q.op1?"selected-option-btn":"unselected-option-btn"} onClick={()=>{
                    handle_answer(q.op1)
                }}>{q.op1}</button>
                <button className={q.selected_option===q.op2?"selected-option-btn":"unselected-option-btn"} onClick={()=>{
                    handle_answer(q.op2)
                }}>{q.op2}</button>
                <button className={q.selected_option===q.op3?"selected-option-btn":"unselected-option-btn"} onClick={()=>{
                    handle_answer(q.op3)
                }}>{q.op3}</button>
                <button className={q.selected_option===q.op4?"selected-option-btn":"unselected-option-btn"} onClick={()=>{
                    handle_answer(q.op4)
                }}>{q.op4}</button>
            </div>

        </div>
    )
}

export default Question;