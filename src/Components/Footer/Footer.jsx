import './Footer.css';
import { companyLogo, SuiLogo } from '../index';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='subscription'>
        <p>Always stay up to date about <br /> what's happening on <br /> <span><img src={companyLogo} width={250} height={75} alt="" /></span></p>
        <div>
            <input type="text" placeholder='enter your email'/>
            <button>Subscribe</button>
        </div>
      </div>
      <div className='more-info'>
        <div className='resources-mediums'>
            <div className='resources'>
                <p>Resources</p>
                <p>Docs</p>
                <p>Spaces</p>
                <p>Spots</p>
                <p>DAO</p>
                <p>FAQ</p>
            </div>
            <div className='mediums'>
                <p>Meet Us</p>
                <p>Support</p>
                <p>Twitter</p>
                <p>Github</p>
                <p>Telegram</p>
                <p>Discord</p>
            </div>
        </div>
        <div className='recognition'>
            <p>Built on</p>
            <img className='sui-logo' src={SuiLogo} alt=" SUI Logo" />
        </div>
      </div>
    </div>
  )
}

export default Footer;
