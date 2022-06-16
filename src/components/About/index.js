import './index.scss'
import Loader from 'react-loaders'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHtml5,
  faCss3,
  faReact,
  faJsSquare,
  faGitAlt,
} from '@fortawesome/free-brands-svg-icons'
import Sidebar from '../Sidebar'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    
      <div className="container about-page">
        <Sidebar />
        
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            {' '}
            I am actively seeking a role as a Full-Stack Engineer. I also look
            forward to challenges in beginning with Front-End Web Development
            opportunities. Please contact me regarding oppportunities for work
            in Web-Development! I will respond within the next buisness day.
            Thank you!
          </p>
          <p>
            {' '}
            When I am not Coding for Practice or for Fun! Some hobbies of mine
            include: Bicycing, Hiking through Trails, Photography, Visiting
            Museums, Grilling and More!
          </p> 
          {/* make a list out of this^^^ */}
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            {/* <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div> */}
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About