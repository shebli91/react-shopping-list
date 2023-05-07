import Card from "./card";
import products from "./products";

function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Card
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  );
}

export default ProductList;
