import React from "react";

const CoolButton = (props) => {
  const { isSmall, isDanger, isSuccess, className } = props;

  return <button className={myClass}>{props.children}</button>;
};
export default CoolButton;
