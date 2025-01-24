import ExamResults from "./examResults"

const Coe=(res)=>{
    return (
        <div>
            <h2>this is COE</h2>
            <ExamResults sgpa={res.sgpa} cgpa={res.cgpa}/>
        </div>
    )
}
export default Coe