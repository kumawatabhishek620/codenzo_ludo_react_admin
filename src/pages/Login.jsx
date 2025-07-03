import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { adminLogin } from './apis/Api';

export default function Login() {
   const navigate = useNavigate();
  const [loadingShow, setLoadingShow] = useState(false);

  const handleLogin = async(e) => {
    e.preventDefault();
    setLoadingShow(true);
  const formData = new FormData(e.target);

    const success = await adminLogin(formData);
    if (success === false) {
      setLoadingShow(false);
    }
    if (success) {
      navigate('/');
    }
  };
  return (
    <div className="full_container">
      <div className="container">
        <div className="center verticle_center full_height">
          <div className="login_section">
            <div className="logo_login">
              <div className="center">
                <img width={210} src="images/logo/logo.png" alt="#" />
              </div>
            </div>
            <div className="login_form">
              <form onSubmit={handleLogin} >
                <fieldset>
                  <div className="field">
                    <label className="label_field">Email</label>
                    <input type="email" name="email" placeholder="Email" required />
                  </div>
                  <div className="field">
                    <label className="label_field">Password</label>
                    <input type="password" name="password" placeholder="Password" />
                  </div>

                  <div className="field margin_0">
                    <label className="label_field hidden">hidden label</label>
                    <button className="main_bt" type='submit'>Sing In</button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

