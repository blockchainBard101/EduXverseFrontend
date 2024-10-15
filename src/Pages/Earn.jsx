import { EngageCreate, Footer, HowItWorks, Navbar } from '../Components';
import { Link } from 'react-router-dom';
import EarnPics from '../Assets/EarnPics.png'

const Earn = () => {
  return (
    <div>
        <Navbar />
        <div className='hero-section'>
            {/* <div className='hero-tinted-overlay'></div> */}
            {/* <IoMdArrowDroprightCircle className='pagination-right'/>
            <IoMdArrowDropleftCircle className='pagination-left'/> */}

            {/* Commented the above lines of code out as I think there's no need for the pagination buttons anymore. */}
            <div className='hero-content'>
                <h1>EARN EVEN WHILE <br/>LEARNING</h1>
                <p>Explore opportunities to earn <br /> on the SUI blockchain through <br /> EduXverse</p>
                <button><Link to={'/'}>Explore</Link></button>
            </div>
            <img src={EarnPics} alt="" />
        </div>
        <EngageCreate />
        <HowItWorks />
        <Footer />
    </div>
  )
}

export default Earn;
