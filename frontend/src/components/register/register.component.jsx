import React, { useState } from "react";
import { FormControl, TextField, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import userRegister from "../../routes/userRegister";

const useStyles = makeStyles({
  inputField: {
    marginBottom: 10,
    width: 300,
  },
});
const Register = function (props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [message, setMessage] = useState("");

  const validateData = async () => {
    if (!name || !email || !password1 || !password2) {
      return setMessage("Please fill out the form completely.");
    }
    if (password1 !== password2) {
      return setMessage("Typed passwords don't match");
    }
    const result = await userRegister({ name, email, password: password1 });
    if (result.status !== 201) {
      return setMessage(result.message);
    }
    setName("");
    setEmail("");
    setPassword1("");
    setPassword2("");
    alert("Register successful please login.")
    props.handleFormChange("login")
  };
  const classes = useStyles();

  return (
    <FormControl
      style={{ border: "solid 1px black", padding: 80, borderRadius: 10 }}
    >
      <Typography variant="h5" style={{ marginBottom: 10 }}>
        SignUp
      </Typography>
      <TextField
        type="text"
        label="Full Name"
        variant="outlined"
        required
        className={classes.inputField}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        type="email"
        label="Email"
        variant="outlined"
        required
        className={classes.inputField}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="password"
        label="Password"
        variant="outlined"
        required
        className={classes.inputField}
        value={password1}
        onChange={(e) => setPassword1(e.target.value)}
      />
      <TextField
        type="password"
        label="Retype Password"
        variant="outlined"
        required
        className={classes.inputField}
        value={password2}
        onChange={(e) => setPassword2(e.target.value)}
      />
      <Typography style={{ color: "red", marginBottom: 30 }}>
        {message}
      </Typography>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        onClick={validateData}
      >
        Create Account
      </Button>
      <Typography>
        or
        <Button variant="text" onClick={() => props.handleFormChange("login")}>
          Login
        </Button>
      </Typography>
    </FormControl>
  );
};
export default Register;
