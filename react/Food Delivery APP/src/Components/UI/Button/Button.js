import style from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${style.btn} ${props.className}`}
      type={props.type}
    >
      {props.title} {props.items}
    </button>
  );
};

export default Button;
