import React from "react";
import  {useNavigate}  from "react-router-dom";
import useFormValidation from "../libs/form/useFormValidation";
import axios from "axios";

const INITIAL_STATE = {
  email: "",
  password: "",
};
const VALIDATION_RULES = {
  email: "required|email",
  password: "required|string|min:4",
};

const TeacherLogin = () => {
  const { state, handleChange, handleSubmit, errors, updateIsSubmitting } =
    useFormValidation(INITIAL_STATE, VALIDATION_RULES, teacherLogin);
  const navigate = useNavigate();

  //   const router = useRoutes();

  async function teacherLogin() {
    axios
      .post("http://127.0.0.1:8800/api/studentportal/login/teacher", state)
      .then((res) => {
        updateIsSubmitting(false);
        navigate("/teacher");
        console.log(res.data);
        // router.push("/admin");
      })
      .catch((error) => {
        updateIsSubmitting(false);
        console.log(error);
      });
  }
  //   return <h1>igo8ifuiofgio</h1>;
  return (
    <div className="grid gap-5 max-w-xl mx-auto mt-10">
      <h1 className="text-2xl"> Teachers LogIn</h1>
      {errors &&
        errors.email &&
        errors.email.map((err) => <p style={{ color: "red" }}>{err}</p>)}
      {errors &&
        errors.password &&
        errors.password.map((err) => <p style={{ color: "red" }}>{err}</p>)}

      <form className="" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-xl mb-2">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="w-full bg-gray-700 text-xl p-2"
              value={state.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-xl mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full bg-gray-700 text-xl p-2"
              value={state.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="bg-slate-700 px-10 py-2 text-white">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TeacherLogin;
