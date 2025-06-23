import Swal from 'sweetalert2';

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();

    let mobile = e.target.mobile.value;
    let password = e.target.password.value;

    if (!mobile || !password || mobile !== '6375113875' || password !== '123456') {
      Swal.fire({
        icon: "info",
        title: "Login Failed",
        text: "Please Enter Right Mobile No & Password!",
        timer: 3000,
      });
      return;
    } else {
      sessionStorage.setItem("admin", JSON.stringify({ name: 'Abhishek', mobile: mobile }));

      Swal.fire({
        icon: "success",
        title: "Login Success",
        timer: 3000,
      }).then(() => {
        window.location.href = '/';
      });
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
                    <label className="label_field">Mobile</label>
                    <input type="number" name="mobile" placeholder="Mobile" required />
                  </div>
                  <div className="field">
                    <label className="label_field">Password</label>
                    <input type="password" name="password" placeholder="Password" />
                  </div>
                  {/* <div className="field">
                <label className="label_field">OTP</label>
                <input type="number" name="otp" placeholder="OTP" />
              </div> */}
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

function Logout() {
  sessionStorage.removeItem('admin');
  sessionStorage.clear();

  Swal.fire({
    icon: "success",
    title: "Logout Success",
    timer: 3000,
  }).then(() => {
    window.location.href = '/login';
  });
}
export { Login ,Logout}
