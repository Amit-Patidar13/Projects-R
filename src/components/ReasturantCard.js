import { CDN_URL } from "../utils/constants";

const ReasturantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, deliveryTime, cloudinaryImageId, costForTwo, avgRating } =
    resData?.data;
  //this props are direclty also sended as resName and cuisine instead of props and used accordingly and can also be send as
  // const {resName, cuisine} = props;
  return (
    <div className="res-card">
      <img
        alt="res-logo"
        className="res-logo"
        src={ CDN_URL  + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Min Delivery Time {deliveryTime} minutes</h4>
      <h4>{costForTwo / 100} for two</h4>
      <h4>Rating: {avgRating}</h4>
    </div>
  );
};

export default ReasturantCard;
