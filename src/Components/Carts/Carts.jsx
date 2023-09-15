import PropTypes from 'prop-types';
import Cart from '../Cart/Cart';

const Carts = ({carts}) => {
    return (
        <div className="md:w-1/3 px-6 bg-white rounded-xl">
            <h4 className="text-lg text-[#2F80ED] font-bold pt-6 pb-4 ">Credit Hour Remaining 7 hr</h4>
            <hr />
            <h3 className="text-xl font-bold pt-4 pb-5">Course Name</h3>
            <div className="pb-6">
                {
                    carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
                }
            </div>
            <hr />
            <h6 className="text-base py-4">Total Credit Hour : 13</h6>
            <hr />
            <h6 className="text-base pt-4 pb-6">Total Price : 48000 USD</h6>
        </div>
    );
};

Carts.propTypes = {
    carts: PropTypes.array
}

export default Carts;