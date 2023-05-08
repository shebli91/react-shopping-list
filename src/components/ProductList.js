import Card from "./card";
import products from "./products";

function ProductList(props) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          onAddToCart={props.onAddToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;
