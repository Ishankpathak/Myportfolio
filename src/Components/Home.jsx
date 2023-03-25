import React from 'react'
import myimage from '../images/first.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container mt-2'>
     <div className="container text-center mt-2">
  <div className="row col-reverse justify-content-center d-flex align-items-center">

    <div className="col-sm-12 col-md-6 mt-2 p-2 rotate-in-bl image ">
     <img src={myimage} alt="" className='image w-75 container-fluid ' style={{borderRadius:"50%" }} />
    </div>

    <div className="col-sm-12 col-md-6  mt-2 p-2 front-text ">
     <h2>Ishank Pathak</h2>
     <h6 className='mt-5'>Web Developer</h6>
     <h6>Programmer</h6>
     <h6>Keen Learner</h6>
     <h6>Hardworking</h6>
     
     <Link type="button" to="/about" className="btn btn-outline-info mt-5">About</Link>
    </div>

   </div>

</div>
    </div>
  )
}

export default Home
