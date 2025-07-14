import { useState } from "react"
import OneMovieSlider from "./components/OneMovieSlider"
import Movies from "./components/Movies"
import Question from "./components/Question"
import questions from "./questions"

const App = () => {
  const [view, setView] = useState("slider")



  return (
    <div>
      <div className="bg">
        <div className="overlay">

            <div className="header">
              <h1 className="main-title">Netflix</h1>

              
              
              <div className="view-switcher">
                <button
                  className={view === "slider" ? "active" : ""}
                  onClick={()=> setView("slider")}
                >
                  Slider
                </button>

                <button
                className={view === "movies" ? "active" : ""}
                onClick={()=> setView("movies")}
                >
                  Movies
                </button>
              </div>



              <div className="slider">    
                {view === "slider" ? <OneMovieSlider /> : <Movies />}
            </div>
          </div>
        </div>
    </div>       
           
    {/* Question section */}
    <h2 className="faq-title">Frequetly Asked Questions</h2>
      <div className="all-questions">
        {questions.map( (q) => {
            return <Question key={q.id} {...q}/>
            })}
          </div>
      </div>    
  )
}

export default App