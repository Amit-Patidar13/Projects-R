import ReasturantCard from "./ReasturantCard";
import resList from "../utils/mockData"

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="res-container">
        {resList.map((reasturant) => (
          <ReasturantCard key={reasturant.data.id} resData={reasturant} />
        ))}
        ;
      </div>
    </div>
  );
};

export default Body;
