import "./OneMovieSlider.css"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { useState, useEffect } from "react"
import data from "../data"

const OneMovieSlider = () => {
    const [index, setIndex] = useState(0)

    //Movies keep turning around 
    useEffect ( () => { 
        if (index < 0){
            setIndex(data.length - 1)
        } else if (index > data.length -1){
            setIndex (0)
        }

    },[index])

    //Automatic sliding
    useEffect( () => {
        let interval = setInterval( ()=>{
            setIndex(index + 1)
        }, 3500)
        return () => clearInterval(interval)
    },[index])

    return <section className="all-movies">

        <div className="all-movies-content">
            {data.map( (oneMovie, oneMovieIndex) => {
                const {id, image, title, age, tags, description} = oneMovie

                let mainClass = "next-slide"

                if (oneMovieIndex === index){
                    mainClass = "active-slide"
                }

                if (oneMovieIndex === index -1 || (index === 0 && oneMovie === data.length - 1)){
                    mainClass = "last-slide"
                }

                return <article key={id} className={mainClass}>
                    <img src={image} alt="" />
                    <h2 className="title">{title}</h2>
                    <p className="text">{description}</p>
                    <p className="text">{tags}</p>
                    <p className="text">{age}</p>
                </article>
            })}
        </div>

        <div className="slider-btns">
            <button onClick={()=> setIndex(index - 1)}> 
            <FaArrowLeft />
            </button>
            <button onClick={()=> setIndex(index + 1)}>
            <FaArrowRight />
            </button>
        </div>
        
    </section>
}

export default OneMovieSlider