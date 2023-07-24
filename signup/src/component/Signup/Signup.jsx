import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";
import PasswordChecklist from "react-password-checklist";

const Signup = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorr, setErrorr] = useState("");
  const [errorE, setErrorE] = useState("");
  const [errorP, setErrorP] = useState("");
  const [errorC, setErrorC] = useState("");
  const [errorT, setErrorT] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [check, setCheck] = useState(false);
  const onChangeHandler = (fieldName, value) => {
    if (fieldName === "name") {
      setName(value);
    } else if (fieldName === "email") {
      setEmail(value);
    }
  };
  const handleChange = (event) => {
    setCheck(event.target.checked);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    //let match_pass = event.target.value;
    //setMatchPassword(match_pass);

    if (name.trim() === "") {
      setErrorr("Username is required");
      document.getElementById("userName").style.border = "3px solid red";
    } else if (email.trim() === "") {
      setErrorE("Email is required");
      document.getElementById("email").style.border = "3px solid red";
    } else if (password.trim() === "") {
      setErrorP("Password is required");
      document.getElementById("passWord").style.border = "3px solid red";
    } else if (matchPassword.trim() === "") {
      setErrorC("Confirm password is required");
      document.getElementById("coPassword").style.border = "3px solid red";
    } else if (!check === true) {
      setErrorT("please accept the terms and conditions");
    } else if (!matchPassword.match(password)) {
      alert("Passwords does not match!");
    } else if (matchPassword.length !== password.length) {
      alert("Passwords does not match!");
    } else {
      alert(`Dear ${name}, Your account has been created!`);
    }
  };
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
    let new_pass = evnt.target.value;
    setPassword(new_pass);

    // regular expressions to validate password
    var lowerCase = /[a-z]/g;
    var upperCase = /[A-Z]/g;
    var numbers = /[0-9]/g;
    if (!new_pass.match(lowerCase)) {
      setErrorMessage("Password should contains lowercase letters!");
    } else if (!new_pass.match(upperCase)) {
      setErrorMessage("Password should contain uppercase letters!");
    } else if (!new_pass.match(numbers)) {
      setErrorMessage("Password should contains numbers also!");
    } else if (new_pass.length < 10) {
      setErrorMessage("Password length should be more than 10.");
    } else {
      setErrorMessage(<p className="text-green-500">Password is strong!</p>);
    }
  };

  function handleSetMatchPassword(event) {
    setMatchPassword(event.target.value);
    let match_pass = event.target.value;
    setMatchPassword(match_pass);

    // if (match_pass.length > 2) {
    //   setError(error);
    // } else {
    //   clear(error);
    // }

    if (!match_pass.match(password)) {
      setError("Passwords does not match!");
    } else if (match_pass.length !== password.length) {
      setError("Passwords does not match!");
    } else {
      setError(<p className="text-green-500">Ok!</p>);
    }
  }

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const toggleConfirmPassword = () => {
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");
      return;
    }
    setConfirmPasswordType("password");
  };

  return (
    <div>
      <div className="flex gap-0 justify-center pt-[4rem] pb-[4rem]">
        <div className=" md:w-[40%] px-2 pt-[4rem] w-[80%] ">
          <form
            onSubmit={(event) => {
              onSubmitHandler(event);
            }}
            className="wrapper rounded-lg pb-[2rem] px-6 "
          >
            <h1 className="text-[2rem] md:text-[2.4rem] text-[#f81d78] font-[650] pt-4 text-center">
              Sign Up
            </h1>
            <div className=" pt-[3rem]">
              <div className="flex justify-center ">
                <input
                  className="outline-none focus:bg-transparent bg-transparent text-white border-[3px] border-[#f81d78] placeholder:text-white rounded-full placeholder:font-[600] p-[.5rem] pl-4 w-[94%]"
                  type="text"
                  autoComplete="off"
                  name="name"
                  id="userName"
                  placeholder="username"
                  required
                  value={name}
                  onChange={(e) => {
                    onChangeHandler("name", e.target.value);
                  }}
                />
              </div>
              <div className="pl-6 pt-2 text-red-500 text-[.8rem]">
                {" "}
                {name.length > 1 ? "" : errorr}
              </div>
              <div className="flex justify-center">
                <input
                  className="mt-8 outline-none bg-transparent border-[3px] text-white border-[#f81d78] placeholder:text-white rounded-full focus:bg-transparent  placeholder:font-[600] p-[.5rem] pl-4  w-[94%]"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  required
                  value={email}
                  onChange={(e) => {
                    onChangeHandler("email", e.target.value);
                  }}
                />
              </div>
              <div className="pl-6 pt-2 text-red-500 text-[.8rem]">
                {email.length > 1 ? "" : errorE}
              </div>
            </div>
            {/* <div className="flex justify-center pt-[2rem]">
              <input
                className="outline-none w-[94%]  bg-transparent border-2 border-blue-800 rounded-full placeholder:text-black p-[.5rem] pl-4"
                type="name"
                placeholder="username"
                name="username"
                autoComplete="off"
              />
            </div> */}
            <div className="flex justify-center pt-[2rem] relative">
              <input
                type={passwordType}
                onChange={handlePasswordChange}
                value={password}
                name="password"
                id="passWord"
                className="form-control outline-none w-[94%] focus:bg-transparent text-white bg-transparent border-[3px] border-[#f81d78] placeholder:text-white rounded-full placeholder:font-[600] k p-[.5rem] pl-4"
                placeholder="Password"
                required
              />
              <div className="input-group-btn absolute right-8 bottom-3">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={togglePassword}
                >
                  {passwordType === "password" ? (
                    <i className="bx bx-low-vision"></i>
                  ) : (
                    <i className="bx bx-show"></i>
                  )}
                </button>
              </div>
            </div>
            <div className="pl-6 pt-2 text-red-500 text-[.8rem]">
              {password.length > 1 ? " " : errorP}
            </div>
            <div className="pl-6 pt-2 text-red-500 text-[.8rem]">
              {password.length > 2 ? errorMessage : ""}
            </div>
            <div className="flex justify-center pt-[2rem] relative">
              <input
                type={confirmPasswordType}
                value={matchPassword}
                onChange={handleSetMatchPassword}
                name="matchPassword"
                id="coPassword"
                className="form-control outline-none w-[94%] focus:bg-transparent text-white bg-transparent border-[3px] border-[#f81d78] placeholder:text-white rounded-full placeholder:font-[600]  p-[.5rem] pl-4"
                placeholder="Confirm password"
                required
              />
              <div className="input-group-btn absolute right-8 bottom-3 ">
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={toggleConfirmPassword}
                >
                  {confirmPasswordType === "password" ? (
                    <i className="bx bx-low-vision"></i>
                  ) : (
                    <i className="bx bx-show"></i>
                  )}
                </button>
              </div>
            </div>
            <div className="pl-6 pt-2 text-red-500 text-[.8rem]">
              {matchPassword.length > 1 ? " " : errorC}
            </div>
            <div className="pl-6 pt-2 text-red-500 text-[.8rem]">
              {matchPassword.length > 2 ? error : ""}
            </div>

           
            <div className="flex gap-2 pl-4 pt-8 ">
              <input
                className="w-[16px]"
                type="checkbox"
                name={check}
                id="check"
                value={check}
                onChange={handleChange}
              />
              <p className="font-[600] text-[.9rem] md:text-[1.2rem]">
                I agree with the{" "}
                <a href="/" className="text-[#fc052e] ">
                  terms
                </a>{" "}
                and{" "}
                <a href="/" className="text-[#fc052e]">
                  condition
                </a>
              </p>
            </div>
            <div className="pl-6 pt-2 text-red-500 text-[.8rem]">
              {check == true ? "" : errorT}
            </div>
            <div className="flex justify-center pt-[3rem] ">
              <button
                type="submit"
                onClick={(event) => {
                  onSubmitHandler(event);
                }}
                className="py-[.6rem] w-[94%] bg-gradient-to-r from-[#fc0543] to-[#ff558e] rounded-full text-white font-[600] "
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
