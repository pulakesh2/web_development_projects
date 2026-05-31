import { useContext, useEffect } from "react";
import useHttp from "../../useHooks/use-http";
import Cart from "./Cart";
import style from "./CartList.module.css";
import CartContext from "../../Store/UseContext";
const CartList = (props) => {
  const { getData, isLoading } = useHttp();
  const contextApi = useContext(CartContext);

  useEffect(() => {
    getData(props.userData);
  }, [props.userData]);

  const CartDiv = contextApi.imageData.length ? (
    contextApi.imageData.map((img) => {
      return <Cart key={img.id} image={img.images[0]} title={img.title} />;
    })
  ) : (
    <p className={style.message}>Images are empty</p>
  );

  return (
    <ul className={style.cart__container}>
      {isLoading ? (
        <span
          className={`loading loading-spinner text-success loading-lg ${style.loading}`}
        ></span>
      ) : (
        CartDiv
      )}
    </ul>
  );
};

export default CartList;
