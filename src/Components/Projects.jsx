import React from 'react'
import { Link } from 'react-router-dom'
const Projects = () => {
  return (
    <div>
    <h2 className='d-flex justify-content-center mt-3'>Projects</h2>

    <div className="alert alert-warning alert-dismissible fade show container" role="alert">
     <strong>Click</strong> the name of any project to visit the website
     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    <div className="container mt-5 project">
       <ul>
        <a href="https://multitexteditor.netlify.app/" target="_blank"><li>TextEditor using React</li></a> 
        <p>This Web App can be used to Edit text like converting to upperCase , lowercase . It can count number of words in a paragraph </p>
        <a href="https://countriesweather.netlify.app" target="_blank"><li>Weather APP using React</li></a> 
        <p>This Web App can be used to see the weather information of different cities and countries all around the world.
         It is made from weather api </p>

        <a href="https://clock365.netlify.app/" target="_blank"><li>Clock using HTML CSS and JS </li></a> 
        <p>This clock has both digital clock as well as regular clock</p>

        <a href="https://jokegeneretor.netlify.app/" target="_blank"><li>Random joke generator</li></a> 
        <p>React App which can generate random joke </p>

        <a href="https://fashionsblog.netlify.app/" target="_blank"><li>FashionBlog Website</li></a> 
        <p>This Blog website is made from tailwind css </p>
        <a href="https://multitexteditor.netlify.app/" target="_blank"><li>TextEditor using React</li></a> 
        
       </ul>
    </div>

    <div className='d-flex justify-content-center mt-5'>
    <Link type="button" to="/" className="btn btn-outline-info ">Home</Link>
    </div>
    </div>
  )
}

export default Projects
