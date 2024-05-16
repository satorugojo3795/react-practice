import PropTypes from 'prop-types';
import Item from "./Item";

const FoodItems = (props) => {
    // let foodItems = ['dal','roti','sabzi'];
    return(
    <ul className="list-group">
        {props.items.map((item)=>(
          <Item key = {item} foodItem = {item}></Item>
        ))}
    </ul>
    )
    
};

FoodItems.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default FoodItems;