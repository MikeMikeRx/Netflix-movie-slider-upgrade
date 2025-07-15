import "./DummyImg"
import "./Movies.css"
import data from "../data"
import DummyImg from "./DummyImg"

const Movies = () => {
    return <div className="all-films">
        {
            data.map((oneMovie)=>{
                const {id, title, age, tags, description} = oneMovie

                return <div className="one-film" key={id}>
                    <DummyImg />
                    <h2>{title}</h2>
                    <p>{age}</p>
                    <p>{tags}</p>
                    <p>{description}</p>

                </div>
            })
        }
    </div>
}

export default Movies