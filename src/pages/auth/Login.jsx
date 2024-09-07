import { useForm } from "react-hook-form";
import AuthCommonUI from "../../components/ui/AuthCommonUI";
import { useState } from "react";
import { axiosInstance } from "../../api/axiosInstance";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import Cookies from "js-cookie";
const Login = () => {
  const [eye, setEye] = useState(false);
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { data: users } = await axiosInstance.get("/users/");
    const user = await users.find(
      ({ email, password }) =>
        email === data.email && password === data.password
    );
    if (user) {
      toast.success("user login successfully", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setAuth(user);
      Cookies.set("furniFlexAuth", JSON.stringify(user), {
        expires: 7,
        secure: true,
      });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      toast.error("email & password is incorrect", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  return (
    <>
      <h4 className="font-medium text-[32px]">Welcome Back!</h4>
      <p>Enter your Credentials to access your account</p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={"flex flex-col gap-4 w-full mt-5"}
      >
        <div className={`relative`}>
          <label
            htmlFor={"email"}
            className="absolute text-xs text-tSecondary top-3 left-3"
          >
            Email address
          </label>
          <input
            type={"text"}
            id={"email"}
            name={"email"}
            className={`input ${errors.email && "border-red-400"} `}
            {...register("email", { required: true })}
          />
        </div>
        <div className="relative">
          <label
            htmlFor={"password"}
            className="absolute text-xs text-tSecondary top-3 left-3"
          >
            Password
          </label>
          <input
            type={eye ? "text" : "password"}
            id={"password"}
            name={"password"}
            className={`input ${errors.password && "border-red-400"} `}
            {...register("password", { required: true })}
          />

          <div
            className="absolute cursor-pointer right-5 top-5"
            onClick={() => setEye(!eye)}
          >
            {eye ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            )}
          </div>
        </div>
        <AuthCommonUI />
      </form>
    </>
  );
};

export default Login;
