import React from "react";
import { Link } from "react-router-dom";
const Skills = () => {
  return (
    <div>
      <h2 className="d-flex justify-content-center mt-3">Skills</h2>

      <div className="container mt-5">

        <div className="container">
          
           <div className="progress">
          <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '90%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">90%</div>
          </div>
          <div className="d-flex justify-content-center">HTML</div>

           <div className="progress mt-3">
          <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '85%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">85%</div>
          </div>
          <div className="d-flex justify-content-center">CSS</div>

           <div className="progress mt-3">
          <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '85%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">85%</div>
          </div>
          <div className="d-flex justify-content-center">JS</div>


           <div className="progress mt-3">
          <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '80%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">80%</div>
          </div>
          <div className="d-flex justify-content-center">Bootstrap</div>


           <div className="progress mt-3">
          <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '90%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">90%</div>
          </div>
          <div className="d-flex justify-content-center">React</div>

           <div className="progress mt-3">
          <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '85%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">85%</div>
          </div>
          <div className="d-flex justify-content-center">Tailwind CSS</div>

           <div className="progress mt-3">
          <div className="progress-bar progress-bar-striped" role="progressbar" style={{width: '80%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">80%</div>
          </div>
          <div className="d-flex justify-content-center">Git & Github</div>


        </div>
       <div className="d-flex justify-content-center mt-5">
      <Link type="button" to="/projects" className="btn btn-outline-info ">Projects</Link> </div>
      </div>
    </div>
  );
};

export default Skills;
