import "./FeaturedProducts.scss";
import Card from "../Card/Card.jsx";
import useFetch from "../../hooks/useFetch";
const FeaturedProducts = ({ type }) => {

  const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);
  

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          amet, animi blanditiis dignissimos impedit excepturi sit facere
          delectus suscipit dolorem provident et nostrum hic ex, autem velit!
          Voluptatum, obcaecati numquam.
        </p>
      </div>
      <div className="bottom">
        {
          error? "Something went wrong!":
          loading? "loading" : data?.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
