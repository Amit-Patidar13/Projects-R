import ReasturantCard from "./ReasturantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfReasturant, setListOfReasturant] = useState(resList)
    console.log(listOfReasturant);
    
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfReasturant.filter((res) => res.data.avgRating > 4);
            setListOfReasturant(filteredList)
          }}
        >
          Top Rated Reasturant
        </button>
      </div>
      <div className="res-container">
        {listOfReasturant.map((reasturant) => (
          <ReasturantCard key={reasturant.data.id} resData={reasturant} />
        ))}
        ;
      </div>
    </div>
  );
};

export default Body;
