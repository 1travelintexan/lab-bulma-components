import React from "react";
import FormField from "../formfield/FormField";
import CoolButton from "../coolButton/CoolButton";
import Navbar from "../navbar/Navbar";

const Signup = () => {
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton isSmall isDanger className="is-rounded my-class">
        Login
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Signup
      </CoolButton>
    </div>
  );
};

export default Signup;
