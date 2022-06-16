import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'

// import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import{ init } from '@emailjs/browser';
import { faTelegram } from '@fortawesome/free-brands-svg-icons';
import Sidebar from '../Sidebar';
init("mDDPABAYAyc61gROA");




const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nyn378d', 'template_b8cutbd', e.target, 'mDDPABAYAyc61gROA')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>

      <div className="container contact-page">
      <Sidebar />
        
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <div className='contact-card'>
          <div className='name-info'>
          <h2>
            Jason Alexander Carrazco
          </h2>
          </div>
          <p >
            Please Contact me regarding oppportunities for 
            work in Web-Development! 
            I will respond within the next buisness day. Thank you!
          </p>
          <div className='contact-info'>
          <h2 href="tel:312-860-6882">
            <FontAwesomeIcon icon={faPhone}/> Mobile Telephone: 312-860-6882 </h2>
            </div>
            <div className='email-info'>
          <h2 href="carrazcojason8@gmail.com">
            <FontAwesomeIcon icon={faTelegram}/> Reach Me by Email: carrazcojason8@gmail.com </h2>
            </div>
            </div>
          
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact