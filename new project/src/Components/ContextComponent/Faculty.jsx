import Coe from "./CoE"

const Faculty=(res)=>{
    return (
        <div>
            <h2>this is faculty</h2>
            <Coe sgpa={res.sgpa} cgpa={res.cgpa}/>
        </div>
    )
}
export default Faculty