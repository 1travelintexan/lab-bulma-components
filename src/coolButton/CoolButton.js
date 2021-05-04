import React from "react";

const CoolButton = (props) => {
  const { isSmall, isDanger, isSuccess, className } = props;
  if (isSmall && isDanger) {
    return <button className={props.className}>{props.children}</button>;
  } else if (isSmall && isSuccess) {
    return <button className={props.className}>{props.children}</button>;
  }
};
export default CoolButton;
