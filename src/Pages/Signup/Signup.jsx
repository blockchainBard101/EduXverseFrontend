import './Signup.css';
import GoogleLogin from './google'
import { IoWallet } from "react-icons/io5";


const Signup = () => {
    return (
        <div className='signup'>
            <div className='signup-container'>
                <div className='inner-signup-container'>
                    <div>
                        <h1>Welcome to EduXverse</h1>
                        <p>Get Started</p>
                    </div>
                    <div>
                        {/* <button><FaGoogle /> Google</button> */}
                        <GoogleLogin />
                        <button><IoWallet /> Connect Wallet</button>
                        {/* <WalletConnect /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
