import { RESLOGO_URL } from "../utils/constants.js";





const RestaurentCard = (props) => {
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        
    } = resData?.card?.card?.info;
    const { deliveryTime } = resData?.card?.card?.info?.sla;
    
    return (
        <div className="res-card">
            <img 
            className="res-logo" 
            src={RESLOGO_URL + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>

        </div>
    );
};

export default RestaurentCard;