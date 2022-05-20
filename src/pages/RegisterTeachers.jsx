import React from "react";
import useFormValidation from "../libs/form/useFormValidation";
import axios from "axios";

const INITIAL_STATE = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  level : "",
};
const VALIDATION_RULES = {
  firstName: "required|string",
  lastName: "required|string",
  email: "required|email",
  password: "required|string|min:4",
  level : "",
};
const RegisterTeacher = () => {
  const { state, handleChange, handleSubmit, errors, updateIsSubmitting } =
    useFormValidation(INITIAL_STATE, VALIDATION_RULES, registerAdmin);
  async function registerAdmin() {
    console.log(state);
    axios
      .post("http://127.0.0.1:8800/api/studentportal/admin/teacherreg", state)
      .then((res) => {
        updateIsSubmitting(false);
        console.log(res.data);
      })
      .catch((error) => {
        updateIsSubmitting(false);
        console.log(error);
      });
  }

  return (
    <div>
      <h1 className="text-2xl">Register Teacher</h1>
      {/* {JSON.stringify(errors, null, 2)} */}
      {errors &&
        errors.firstName &&
        errors.firstName.map((err) => <p style={{ color: "red" }}>{err}</p>)}
      {errors &&
        errors.lastName &&
        errors.lastName.map((err) => <p style={{ color: "red" }}>{err}</p>)}
      {errors &&
        errors.email &&
        errors.email.map((err) => <p style={{ color: "red" }}>{err}</p>)}
      {errors &&
        errors.password &&
        errors.password.map((err) => <p style={{ color: "red" }}>{err}</p>)}

      <div className="max-w-4xl mx-auto mt-10">
        <form className="" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label htmlFor="firstName" className="block text-xl mb-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full bg-gray-700 text-xl p-2"
                name="firstName"
                value={state.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-xl mb-2">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="w-full bg-gray-700 text-xl p-2"
                value={state.lastName}
                onChange={handleChange}
              />
            </div>
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
              <label htmlFor="level" className="block text-xl mb-2">
                Level
              </label>
              <select
                name="level"
                id="level"
                value={state.level}
                onChange={handleChange}
                className="block text-xl mb-2 w-full bg-gray-700 text-xl p-2"
              >
                <option value="">select a level</option>
                <option value="basicOne">Basic One</option>
                <option value="basictwo"> Basic Two</option>
                <option value="basicthree">Basic Three</option>
              </select>
            </div>
            <div>
              <label htmlFor="address" className="block text-xl mb-2">
                Address
              </label>
              <input
                type="address"
                name="address"
                id="address"
                className="w-full bg-gray-700 text-xl p-2"
                value={state.level}
                onChange={handleChange}
              />
            </div>
            <div>
              <button>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterTeacher;
