import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function LoginPage() {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://alijonov0901.pythonanywhere.com/auth/login/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }),
        }
      );

      const data = await res.json();
      console.log(data);

      if (res.ok && data.success !== false) {
       
        localStorage.setItem("token", JSON.stringify(data))
        navigate("/admin/dashboard")
        toast.success("Tizimga muvaffaqiyatli kirdingiz ✅");
      } else {
        toast.error(data.message || "Admin paroli yoki email xato ❌");
      } 
    } catch (error) {
      console.log(error);
      toast.error("Server bilan bog‘lanishda xatolik ⚠️");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="divcsntr flex justify-around items-center">
        <div className="w-full max-w-[960px] flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5px p-[20px]"
          >
            <img
              className="w-[100px] h-[28px] mb-[32px]"
              src="./imgss/blogify.svg"
              alt=""
            />
            <Link
              to={"/PostsPage"}
              className="flex items-center py-[10px] mb-[32px]"
            >
              <MdKeyboardBackspace /> Back to Posts
            </Link>

            <div className="divBorder">
              <h2 className="text-[30px] font-bold">Welcome Back</h2>
              <p className="text-[#6B7280] mb-[24px]">
                Enter your credentials to access your account
              </p>

              <label className="flex flex-col">
                <span>Email</span>
                <input
                  className="imputlogin"
                  type="email"
                  placeholder="email"
                  ref={emailRef}
                />
              </label>

              <label className="flex flex-col">
                <span>Password</span>
                <input
                  className="imputlogin"
                  type="password"
                  placeholder="******"
                  ref={passwordRef}
                />
              </label>

              <button
                type="submit"
                className="buttonlogin flex justify-center items-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <AiOutlineLoading3Quarters className="animate-spin w-5 h-5" />
                    Kuting...
                  </>
                ) : (
                  "Login"
                )}
              </button>

              <p className="ploginsignin text-[#6B7280] flex justify-center items-center mt-2">
                Don't have an account?{" "}
                <a className="text-[#4346EF]" href="#">
                  Sign up
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className="bg-[#F1F1FE] py-[80px] px-[20px] w-full flex flex-col items-center justify-center text-center">
          <img
            className="imglogin"
            src="./imgss/loginimg.svg"
            alt=""
          />
          <h2 className="text-[30px] font-bold mb-[16px]">Start Your Journey</h2>
          <p className="text-[#6B7280]">
            Join thousands of creators sharing their stories on Blogify
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
