import QuestionsApi from "./questions_api";

const Result=({score, set_score, set_all_questions, set_done})=>{

    const handle_clear=(QuestionsApi)=>{
        let result = []
        QuestionsApi.map((e)=>{
            e.selected_option = "";
            result.push(e)
        })
        return result;
    }

    const handle_reset = () => {
        let questions_api = handle_clear(QuestionsApi)

        let arr = [];
        while(arr.length<5){
            let element = questions_api[Math.floor(Math.random()*(questions_api.length-1))]
            while(arr.includes(element)){
                element = questions_api[Math.floor(Math.random()*(questions_api.length-1))]
            }
            arr.push(element);
        }

        set_all_questions(arr)
        set_score(0)
        set_done(false)
    }

    return(
        <div className="result-div">
            <p>Your score : <span> {score} </span></p>

            <button onClick={()=>{
                handle_reset()
            }}>Reset</button>
        </div>
    )
}

export default Result;