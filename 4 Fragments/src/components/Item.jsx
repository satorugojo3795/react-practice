import PropTypes from 'prop-types';

const Item = (props) => {
  return (
    <>
        <li key={props.foodItem} className="list-group-item">{props.foodItem}</li>     
    </>
  )
}

Item.propTypes = {
    foodItem: PropTypes.string.isRequired
};

export default Item;