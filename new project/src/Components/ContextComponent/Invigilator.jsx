import Faculty from "./Faculty"

const Invigilator=(res)=>{
    return (
        <div>
            <h2> this is invigilator</h2>
            <Faculty sgpa={res.sgpa} cgpa={res.cgpa}/>
        </div>
    )
}
export default Invigilator