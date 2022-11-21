import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./style.scss";
import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import Scrollbar from "../../components/scrollbar";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login } from "../../Redux/actions/UserActions";
import { useEffect } from "react";

const LoginPage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    validator.showMessages();
  };

  const rememberHandler = () => {
    setValue({ ...value, remember: !value.remember });
  };

  const [validator] = React.useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  const loginSubmit = (e) => {
    e.preventDefault(); //prevent site loading
    dispatch(login(loginEmail, loginPassword));
  };
  const path = useNavigate();
  const customId = "custom-id-yes";
  useEffect(() => {
    if (error) {
      toast.error(error, { toastId: customId });
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      path("/dashboard");
      // history.push(redirect);
    }
  }, [dispatch, error, isAuthenticated]);

  return (
    <Fragment>
      <Navbar />
      <Grid className="loginWrapper">
        <Grid className="loginForm">
          <h2>Sign In</h2>
          <p>Sign in to your account</p>
          <form onSubmit={loginSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  // required
                  placeholder="E-mail"
                  variant="outlined"
                  name="email"
                  label="E-mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onBlur={(e) => changeHandler(e)}
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
                {/* {validator.message("email", value.email, "required|email")} */}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  // required
                  placeholder="Password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  variant="outlined"
                  name="password"
                  type="password"
                  label="Password"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onBlur={(e) => changeHandler(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid className="formAction">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={value.remember}
                        onChange={rememberHandler}
                      />
                    }
                    label="Remember Me"
                  />
                  <Link to="/forgot-password">Forgot Password?</Link>
                </Grid>
                <Grid className="formFooter">
                  <Button fullWidth className="cBtnTheme" type="submit">
                    {loading ? "Logging in..." : "Sign In"}
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
                  Don't have an account?{" "}
                  <Link to="/signup">Create free account</Link>
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

export default LoginPage;
