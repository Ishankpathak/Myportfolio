import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div className='container about'>
     <h2 className='d-flex justify-content-center mt-3'>About</h2>
     <div className="container ">
        {/* row1 */}
        <div className="row mt-3">
          <div className="col  mt-2 ">
          Hello, my name is Ishank Pathak, and I am a passionate full stack web developer with a keen eye for detail and a desire to create good user experiences websites . I believe that the best websites are not only visually appealing but also intuitive and easy to navigate, and I strive to achieve this balance in all of my projects.
          </div>
         
        </div>
        {/* row2 */}
        <div className="row mt-3">
          <div className="col  mt-2">
          I have a good foundation in both front-end and back-end development, and I enjoy solving problems and i try to learn anything new from the problem . Whether I work on a personal project or will be working with a team project , I will always strive to produce good-quality, maintainable code that meets the needs of the client and end-users.
          </div>
          
        </div>
        {/* row3 */}
        <div className="row mt-3">
          <div className="col mt-2">
          In addition to my technical skills, I am also a good communicator and collaborator. I enjoy working with team mates to understand their needs and requirements and ensure that their vision is brought to life through my development work. I am also constantly seeking to learn and grow as a developer, staying up-to-date with the latest trends and technologies in the industry.
          </div>
         
        </div>

        <div className='info'>
          <div className='mt-3'>
            Schooling:- Studied from St thomas English Medium School Meerut , got 93.75% in class 12 and 89% in class 10
          </div>
          <div className='mt-3'>
            Experience:-  No Industry Experience (But always ready To give the best output)
          </div>
          <div className='mt-3'>
            Personal Info:- 
            <div>
              Contact No:- 9997163525
            </div>
            <div>
              Address:- Uttrapradesh , Meerut  [India]
            </div>
          </div>
        </div>

       <div className='d-flex justify-content-center mt-5 align-items-center'>
        <Link type="button" to="/skills" className="btn btn-outline-info  ">Skills</Link>
       </div>
     </div> 
    </div>
  )
}

export default About
