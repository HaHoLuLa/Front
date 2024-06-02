import { GoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";
import { useState } from "react";

export default function GoogleLoginTest() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = async (response) => {
    console.log('로그인 성공 :', response);

    // ID Token
    const idToken = response.credential;

    // Verify ID token and fetch user info
    try {
      const res = await axios.get(`https://oauth2.googleapis.com/tokeninfo?id_token=${idToken}`);
      const userInfo = res.data;
      setUser(userInfo);
      console.log('사용자 정보 :', userInfo);
    } catch (error) {
      console.error('로그인 실패 :', error);
    }
  };

  // const handleLogin = useGoogleLogin({
  //   onSuccess: res => handleLoginSuccess(res),
  //   onError: e => handleLoginFailure(e),
  //   flow: "auth-code"
  // })

  const handleLoginFailure = (error) => {
    console.log('로그인 실패 :', error);
  };

  const handleLogout = () => {
    googleLogout();
    setUser(null);
    console.log('로그아웃');
  };


  return (
    <div>
      {/* <h1>Google Login</h1> */}
      {user ? (
        <div>
          {/* <h2>환영합니다, {user.name}</h2> */}
          <button onClick={handleLogout}>로그아웃</button>
        </div>
      ) : (
        <>
        <GoogleLogin
          onSuccess={handleLoginSuccess}
          onError={handleLoginFailure}
          // useOneTap
          shape="circle"
          type="icon"
          // auto_select
          />
        {/* <button onClick={() => handleLogin()}>로그인</button> */}
          </>
      )}
    </div>
  );
};