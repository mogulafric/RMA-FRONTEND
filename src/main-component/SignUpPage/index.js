import React, { Fragment, useState } from "react";
// import Grid from "@material-ui/core/Grid";
import { Grid } from "@material-ui/core";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, useLocation, useNavigate, withRouter } from "react-router-dom";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import Navbar from "../../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../../Redux/actions/UserActions";
import { useEffect } from "react";

const SignUpPage = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState("/profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/profile.png");

  //User registration
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = user;

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);

    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };
  const customId = "custom-id-yes";
  useEffect(() => {
    if (error) {
      toast.error(error, { toastId: customId });
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      toast.success("User Added Successfully");

      navigate("/dashboard");
    }
  }, [dispatch, error, isAuthenticated, navigate]);

  return (
    <Fragment>
      <Navbar />
      <Grid className="loginWrapper">
        <Grid className="loginForm">
          <h2>Signup</h2>
          <p>Signup your account</p>
          <form encType="multipart/form-data" onSubmit={registerSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  required
                  placeholder="Full Name"
                  value={name}
                  variant="outlined"
                  name="name"
                  label="Name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={registerDataChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  required
                  placeholder="E-mail"
                  type="email"
                  value={email}
                  variant="outlined"
                  name="email"
                  label="E-mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={registerDataChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  required
                  placeholder="Password"
                  value={password}
                  type="password"
                  variant="outlined"
                  name="password"
                  label="Password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={registerDataChange}
                />
              </Grid>

              <Grid item xs={12}>
                <img alt="Avatar Preview" src={avatarPreview} />
                <TextField
                  className="inputOutline"
                  fullWidth
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={registerDataChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid className="formFooter">
                  <Button
                    fullWidth
                    className="cBtn cBtnLarge cBtnTheme"
                    type="submit"
                  >
                    {loading ? "Registering user..." : "Sign Up"}
                  </Button>
                </Grid>
                {/* <Grid className="loginWithSocial">
                  <Button className="facebook">
                    <i className="fa fa-facebook"></i>
                  </Button>
                  <Button className="twitter">
                    <i className="fa fa-twitter"></i>
                  </Button>
                  <Button className="linkedin">
                    <i className="fa fa-linkedin"></i>
                  </Button>
                </Grid> */}
                <p className="noteHelp">
                  Already have an account?{" "}
                  <Link to="/login">Return to Sign In</Link>
                </p>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default SignUpPage;
