import { ConnectInteract, EngageCreate, Footer, HowItWorks, Navbar } from '../Components';
import { Link } from 'react-router-dom';
import ConnectImg from '../Assets/ConnectImg.png'

const Connect = () => {
  return (
    <div>
      <Navbar />
        <div className='hero-section'>
            <div className='hero-content'>
                <h1>CONNECT AND <br/>INTERACT</h1>
                <p>Meet with other students across <br />the globe , socialize , interact <br /> and connect </p>
                <button><Link to={'/'}>Explore</Link></button>
            </div>
            <img src={ConnectImg} style={{marginRight: '100px'}} alt="" />
        </div>
        <ConnectInteract />
        <Footer />
      
    </div>
  )
}

export default Connect;
