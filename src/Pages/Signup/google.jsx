import { AuthService } from '../../utils/authService.ts';
import { FaGoogle } from "react-icons/fa";

function GoogleLogin() {
  const authService = new AuthService();

  const handleGoogleLogin = () => {
    authService.login();
    // console.log("login");
  };

  return (
    <div>
      <button onClick={handleGoogleLogin}><FaGoogle /> Google</button>
    </div>
  );
}

export default GoogleLogin;