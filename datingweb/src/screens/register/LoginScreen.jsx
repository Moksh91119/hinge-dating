import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../AuthContext";
import Lottie from "react-lottie";
import loginAnimation from "../../assets/login.json";
import { HiOutlineMail } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";

const LoginScreen = () => {
  const [option, setOption] = useState("Create account");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { token, isLoading, setToken } = useContext(AuthContext);
  const navigation = useNavigate();
  useEffect(() => {
    if (token) {
      navigation("/user");
    }
  }, [token, navigation]);
  const signInUser = async () => {
    setOption("Sign In");
    try {
      console.log(email);
      console.log(password);
      const user = {
        email: email,
        password: password,
      };
      const response = await axios.post(
        `http://${import.meta.env.VITE_APP_IP}:4000/login`,
        user
      );
      console.log(response);
      const token = response.data.token;

      // Store the token in AsyncStorage
      localStorage.setItem("token", token);

      setToken(token);
      // navigation.replace('Main');
    } catch (error) {
      console.log("error", error);
    }
  };

  const createAccount = async () => {
    setOption("Create account");
    navigation("/basic");
  };
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loginAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div className="p-[1%] bg-slate-50">
        <img
          src="data:image/png;base64,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"
          alt="heloo"
          className="h-[50px]"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-[2%]">
        <div
          style={
            option == "Create account"
              ? { marginBottom: "10px" }
              : {
                  marginBottom: "2%",
                }
          }
        >
          {option == "Sign In" ? (
            <>
              <div className="flex flex-row gap-2 border-b-2 border-gray-400 mt-[40%] " >
                <HiOutlineMail className="h-[30px] w-[30px] text-gray-400 pb-[5px]" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-[300px] focus:outline-none pb-[5px]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex flex-row gap-2 border-b-2 border-gray-400 mt-[10%] " >
                <MdLockOutline className="h-[30px] w-[30px] text-gray-400 pb-[5px]" />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-[300px] focus:outline-none pb-[5px]"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex flex-row items-center justify-between text-base text-slate-500 font-semibold mt-[3px]" >
                <div>Keep me logged in</div>
                <div>Forgot Password</div>
              </div>
            </>
          ) : (
            <>
              <Lottie
                options={defaultOptions}
                height={260}
                width={300}
                className="w-[80px] h-[80px]"
              />
            </>
          )}
        </div>
        <button
          className="h-12 w-64 border-none rounded-3xl justify-center items-center self-center mt-5 text-white text-xl font-bold font-sans"
          style={
            option == "Create account"
              ? { backgroundColor: "#FF6B3C", color: "white" }
              : {
                  backgroundColor: "transparent",
                  color: "black",
                  border: "1px solid black",
                }
          }
          onClick={createAccount}
        >
          Create account
        </button>
        <button
          className="h-12 w-64 border-none rounded-3xl justify-center items-center self-center mt-5 text-white text-xl font-bold font-sans"
          style={
            option == "Sign In"
              ? { backgroundColor: "#FF6B3C", color: "white" }
              : {
                  backgroundColor: "transparent",
                  color: "black",
                  border: "1px solid black",
                }
          }
          onClick={signInUser}
        >
          Sign In
        </button>
      </div>
    </>
  );
};

export default LoginScreen;
