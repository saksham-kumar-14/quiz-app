import React, { useState } from "react";

function answer_mark(quiz_questions,set_quiz_questions,option,index){
    let temp = quiz_questions
    temp[index].selected_option = option
    set_quiz_questions(temp);
    console.log(quiz_questions); 
}

function test_submission(quiz_questions,set_submitted,set_score){
    let temp_score = 0; 
    for(let i=0;i<quiz_questions.length;i++){
        if(quiz_questions[i].selected_option === quiz_questions[i].answer){
            temp_score += 1; 
        }
    }
    set_score(temp_score); 
    set_submitted(true);
}


const Sheet=({set_score,set_submitted,quiz_questions,set_quiz_questions})=>{

    return(
        <div className="questions-sheet">
            {quiz_questions.map((e,index)=>{
                return( 
                    <div className="question">
                        <div className="question-description-div"> 
                            <span className="question-index">Q{index+1}. </span>
                            <span className="question-description">{e.question} </span>
                        </div>
                        
                        <div className="all-options">
                            <button 
                            onClick={()=>{ 
                                answer_mark(quiz_questions,set_quiz_questions,e.op1,index)}} 
                            className="option"> {e.op1} </button>

                            <button 
                            onClick={()=>{ 
                                answer_mark(quiz_questions,set_quiz_questions,e.op2,index)}} 
                            className="option"> {e.op2} </button>

                            <button 
                            onClick={()=>{
                                answer_mark(quiz_questions,set_quiz_questions,e.op3,index)}} 
                            className="option"> {e.op3} </button>

                            <button 
                            onClick={()=>{
                                answer_mark(quiz_questions,set_quiz_questions,e.op4,index)}} 
                            className="option"> {e.op4} </button>
                        </div>
                   
                    </div>
                )
            })}

            <div className="submit-btn-div">
                <button onClick={()=>test_submission(quiz_questions,set_submitted,set_score)} className="submit-btn">Submit</button>
            </div>
        </div>
    )
}


export default Sheet 
