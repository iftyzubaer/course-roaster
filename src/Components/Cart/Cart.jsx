import PropTypes from 'prop-types';

const Cart = ({cart}) => {

    const {course_name} = cart;
    


    return (
        <li className='text-base font-normal'>{course_name}</li>
    );
};

Cart.propTypes = {
    cart: PropTypes.object
}

export default Cart;