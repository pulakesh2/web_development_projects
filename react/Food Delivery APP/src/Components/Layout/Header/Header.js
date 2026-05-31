import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header__box}>
      <p>
        This is our online food ordering App. Here we serve bbq meat. Our motive
        to deliver a tasty meal to your doorstep. We Do Our Best to made tasty
        bbq. Your job is to order it. Please Have a try
      </p>
      <p className={style.msg}>Do Your Order</p>
    </div>
  );
};

export default Header;
