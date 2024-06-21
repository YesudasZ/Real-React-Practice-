import RestaurentCard from "./RestaurentCard";
import ResList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        {ResList.map((restaurant) => (
          <RestaurentCard resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;