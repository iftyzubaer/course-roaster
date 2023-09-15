import PropTypes from 'prop-types';
import {BsCurrencyDollar} from 'react-icons/bs';
import {BsBook} from 'react-icons/bs';

const Course = ({course, AddToCart}) => {
    const {course_name, image,  credit, price, details} = course;
    return (
        <div>
            <h3 className='text-2xl'></h3>

            <div className="card bg-base-100 bg-white rounded-xl p-4">
                <figure>
                    <img src={image} className="rounded-xl" />
                </figure>
                <div className="items-center text-left">
                    <h2 className="text-lg font-semibold py-4">{course_name}</h2>
                    <p>{details}</p>
                    <div className='flex justify-between pt-3 items-center'>
                        <p className='flex items-center'><BsCurrencyDollar/>Price: {price}</p>
                        <p className='flex items-center'><BsBook/>Credit: {credit}hr</p>
                    </div>
                    <div className="pt-6  ">
                        <button onClick={() => AddToCart(course)} className="bg-[#2F80ED] text-white p-auto w-full rounded-lg text-lg font-semibold py-2">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    AddToCart:PropTypes.func
}

export default Course;