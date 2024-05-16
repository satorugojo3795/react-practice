import PropTypes from 'prop-types';
const ErrorMessage = (props) =>{
    // let foodItems = ['dal','roti','sabzi'];
    return (
        <>
            {props.items.length === 0 && <h1>I am still Hungry</h1>}
        </>)
}
ErrorMessage.propTypes = {
    items: PropTypes.array.isRequired
};
export default ErrorMessage;