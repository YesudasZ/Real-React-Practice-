import RestaurentCard from "./RestaurentCard";
import ResList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurents,setListOfRestuarents] = useState(ResList)
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn"  onClick={()=>{
          const filteredList = listOfRestaurents.filter(res => res.info.avgRating > 4.5)
          setListOfRestuarents(filteredList)
        }}>Top Rated Restaurent</button>
      </div>
      <div className="res-container">
        {listOfRestaurents.map((restaurant) => (
          <RestaurentCard resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;