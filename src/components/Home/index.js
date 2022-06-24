import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { Link } from "react-router-dom"
import AnimatedLetters from "../AnimatedLetters";
import Sidebar from "../Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMicrochip } from '@fortawesome/free-solid-svg-icons'
// import mockIcon from "../../assets/images/mockIcon.png"
import './index.scss';



const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['J','a','s','o','n', ' ','C','a','r','r','a','z','c','o' ]
    const jobArray = ['W','e','b',' ', 'D','e','v','e','l','o', 'p','e','r']


    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);
        return () => clearTimeout(timer);
    }, []);
    // useEffect(() => {
    //     setTimeout(()=> {
    //         setLetterClass('text-animate-hover')
    //     }, 4000) 
    // }, [])
return (
    <>

        <div className="container home-page" >
            <Sidebar /> 

            <div className="header-zone">
                <h1>
                <span className={letterClass}>B</span>
                <span className={`${letterClass} _08`}>I</span>
                <span className={`${letterClass} _09`}>E</span>
                <span className={`${letterClass} _10`}>N</span>
                <span className={`${letterClass} _11`}>V</span>
                <span className={`${letterClass} _12`}>E</span>
                <span className={`${letterClass} _13`}>N</span>
                <span className={`${letterClass} _14`}>I</span>
                <span className={`${letterClass} _15`}>D</span>
                <span className={`${letterClass} _16`}>O</span>

                </h1>
                </div> 
            <div className="text-zone">
                {/* <h1>  */}
                {/* <span className={letterClass}>B</span>
                <span className={`${letterClass} _08`}>I</span>
                <span className={`${letterClass} _09`}>E</span>
                <span className={`${letterClass} _10`}>N</span>
                <span className={`${letterClass} _11`}>V</span>
                <span className={`${letterClass} _12`}>E</span>
                <span className={`${letterClass} _13`}>N</span>
                <span className={`${letterClass} _14`}>I</span>
                <span className={`${letterClass} _15`}>D</span>
                <span className={`${letterClass} _16`}>O</span> */}

                <br/> 
                <div >
                    <h1>
                    <span className={`${letterClass} _17`}> </span>
                    <span className={`${letterClass}`}> </span>
                    <span className={`${letterClass} _18`}></span>
                    <span className={`${letterClass} _19`}></span>

                    </h1>
                </div>
                {/* <span className={`${letterClass} _17`}> I</span>
                <span className={`${letterClass}`}> </span>
                <span className={`${letterClass} _18`}>A</span>
                <span className={`${letterClass} _19`}>M</span> */}
                <br/> 
                {/* <img src={mockIcon} alt="developer"/> */}
                <div className="intro-zone d-inline p-2 bg">
                <AnimatedLetters letterClass={letterClass} strArray={nameArray}
                idx={20} />
                <br/>
                <div className="title-intro">
                <AnimatedLetters letterClass={letterClass} strArray={jobArray}
                idx={27} />
                </div>
                {/* </h1> */}
                <div className='git-home'>
              <h3>
                <FontAwesomeIcon icon={faMicrochip}/> Online Portfolio <Link to="https://github.com/JAC61090">GitHub Repository</Link>  </h3>
             

            </div>
                
                <h2 className="tiny-text"> Full-Stack Web Development / Front-End Engineer 
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
                    
                </h2>
                
                </div>
            </div>
            <div className="foodie-container d-flex flex-row-reverse p-3">
                <div className="hungry-container">
                    {/* <h2>Hungry?!?!</h2> */}
                    {/* <button >Hungry?!?!</button> */}
                </div>

            </div>
        </div>
                <Loader type="pacman"/>
        </>
        
    )
}

export default Home