import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, useNavigate, withRouter } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { clearErrors, forgotPassword } from "../../Redux/actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/footer";

const ForgotPassword = (props) => {
  // const [value, setValue] = useState({
  //   email: "",
  // });

  // const changeHandler = (e) => {
  //   setValue({ ...value, [e.target.name]: e.target.value });
  //   validator.showMessages();
  // };

  // const [validator] = React.useState(
  //   new SimpleReactValidator({
  //     className: "errorMessage",
  //   })
  // );

  // const submitForm = (e) => {
  //   e.preventDefault();
  //   if (validator.allValid()) {
  //     setValue({
  //       email: "",
  //     });
  //     validator.hideMessages();
  //     toast.success("You successfully Login!");
  //     props.history.push("/login");
  //   } else {
  //     validator.showMessages();
  //     toast.error("Empty field is not allowed!");
  //   }
  // };

  const dispatch = useDispatch();

  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);
    dispatch(forgotPassword(myForm));
  };
  const customId = "custom-id-yes";

  useEffect(() => {
    if (error) {
      toast.error(error, { toastId: customId });
      dispatch(clearErrors());
    }

    if (message) {
      toast.success(message, { toastId: customId });
      setEmail("");
    }
  }, [dispatch, toast, error, message]);
  return (
    <>
      <Navbar />
      <Grid className="loginWrapper">
        <Grid className="loginForm">
          <h2>Forgot Password</h2>
          <p>Reset your account password</p>
          <form onSubmit={forgotPasswordSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  className="inputOutline"
                  fullWidth
                  value={email}
                  variant="outlined"
                  name="email"
                  placeholder="example@example.com "
                  label="E-mail"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid className="formFooter">
                  <Button
                    fullWidth
                    className="cBtn cBtnLarge cBtnTheme"
                    type="submit"
                  >
                    {loading ? "Sending email..." : "Resend Password"}
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
    </>
  );
};

export default ForgotPassword;
