import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from 'react-loaders'
import Sidebar from '../Sidebar';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import './index.scss';



const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


    return(
        <>
        <div className="container port-page" >
            <Sidebar/>
            <div className="header-zone">
            <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'O', 'R', 'T', 'F', 'O', 'L', 'I', 'O']}
              idx={11}
            />
          </h1>
          </div>
        </div>
        <div className="sub header-zone">
            <h2>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['R', 'E', 'C', 'E', 'N', 'T', ' ', 'W', 'O', 'R', 'K', 'S']}
              idx={14}
            />
          </h2>
        </div>
        <div className="port main-container ">
        <MDBContainer className="port-container ">
      <MDBRow className="row-container">
        <MDBCol size='lg' className='col-container '  >
          One of three columns
        </MDBCol>
        <MDBCol size='lg' className='col-container'>
          One of three columns
        </MDBCol>
        <MDBCol size='lg' className='col-container'>
          One of three columns
        </MDBCol>
      </MDBRow>
      <MDBRow className="row-container">
        <MDBCol size='lg' className='col-container' >
          One of three columns
        </MDBCol>
        <MDBCol size='lg' className='col-container'>
          One of three columns
        </MDBCol>
        <MDBCol size='lg' className='col-container'>
          One of three columns
        </MDBCol>
      </MDBRow>
      <MDBRow className="row-container">
        <MDBCol size='lg' className='col-container' >
          One of three columns
        </MDBCol>
        <MDBCol size='lg' className='col-container'>
          One of three columns
        </MDBCol>
        <MDBCol size='lg' className='col-container'>
          One of three columns
        </MDBCol>
      </MDBRow>
      <MDBRow className="row-container">
        <MDBCol size='lg' className='col-container' >
          One of three columns
        </MDBCol>
        <MDBCol size='lg' className='col-container'>
          One of three columns
        </MDBCol>
        <MDBCol size='lg' className='col-container'>
          One of three columns
        </MDBCol>
      </MDBRow>
      <MDBRow className="row-container">
        <MDBCol size='lg' className='col-container' >
          One of three columns
        </MDBCol>
        <MDBCol size='lg' className='col-container'>
          One of three columns
        </MDBCol>
        <MDBCol size='lg' className='col-container'>
          One of three columns
        </MDBCol>
      </MDBRow>
      <MDBRow className="row-container">
        <MDBCol size='lg' className='col-container' >
          One of three columns
        </MDBCol>
        <MDBCol size='lg' className='col-container'>
          One of three columns
        </MDBCol>
        <MDBCol size='lg' className='col-container'>
          One of three columns
        </MDBCol>
      </MDBRow>
      
    </MDBContainer>
        </div>
        
        
        
        
        
        

        
        <Loader type="pacman" />
        </>  
    )
}



export default Portfolio