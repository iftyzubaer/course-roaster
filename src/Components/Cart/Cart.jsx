import PropTypes from 'prop-types';

const Cart = ({cart}) => {

    const {course_name} = cart;
    


    return (
        <div>
            <h3 className='text-base font-normal'>{course_name}</h3>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.object
}

export default Cart;