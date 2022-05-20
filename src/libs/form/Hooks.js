import React from "react";
import useFormValidation from "./useFormValidation";

const INITIAL_STATE = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
};
const VALIDATION_RULES = {
    firstName: "required|string",
    lastName: "required|string",
    email: "required|email",
    phone: "string|min:10>Must be at least 10 characters|max:13",
    password: "required|string|min:3>Must be at least 3 characters",
    confirmPassword: "required|string|min:3>Must be at least 3 characters",
};

const Hooks = () => {
    const {
        state: values,
        handleChange,
        handleSubmit,
        isSubmitting,
        errors,
        handleBlur
    } = useFormValidation(INITIAL_STATE, VALIDATION_RULES, registerUser);
    async function registerUser() {
        console.log(values);
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <br />
                {errors.name} <br />
                <input
                    type="text"
                    name="age"
                    placeholder="age"
                    value={values.age}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <br />
                {errors.age} <br />
                <input
                    type="text"
                    name="hubby"
                    placeholder="hubby"
                    value={values.hubby}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <br />
                {errors.hubby} <br />
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </form>
        </>
    );
};

export default Hooks;
