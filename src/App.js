import React from "react";
import Navbar from "./navbar/Navbar";
import FormField from "./formfield/FormField";
import CoolButton from "./coolButton/CoolButton";

const App = () => {
  let myClass = "is-rounded my-class";
  return (
    <div>
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField
        label="Email"
        type="email"
        placeholder="e.g. alexsmith@gmail.com"
      />
      <CoolButton isSmall isDanger className={myClass}>
        Login
      </CoolButton>
      <CoolButton isSmall isSuccess>
        Signup
      </CoolButton>
    </div>
  );
};

export default App;
