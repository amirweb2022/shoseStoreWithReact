import CartProduct from "./CartProduct/CartProduct";
const CartProductList = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <CartProduct item={item} key={item.id}/>
      ))}
    </>
  );
};

export default CartProductList;