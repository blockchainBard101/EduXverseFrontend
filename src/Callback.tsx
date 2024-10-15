import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      try {
        const params = new URLSearchParams(window.location.hash.substring(1));
        const jwtToken = params.get("id_token");

        if (jwtToken) {
          sessionStorage.setItem("sui_jwt_token", jwtToken);
        }

        navigate('/home');
      } catch (error) {
        console.error('Error handling callback:', error);
      }
    };

    handleCallback();
  }, [navigate]);

  return (
    <div>
      <p>Processing callback...</p>
    </div>
  );
};

export default Callback;
