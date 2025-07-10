import OneMovieSlider from "./components/OneMovieSlider"

const App = () => {
  return <div>
    <div className="bg">
      <div className="overlay">
        <div className="container">
          <h1 className="main-title">Netflix</h1>
          <div className="slider">    
            <OneMovieSlider />
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default App