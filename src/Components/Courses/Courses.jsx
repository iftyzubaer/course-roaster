import { useEffect } from "react";
import { useState } from "react";

const Courses = () => {

    const [courses, setCourses] = useState([]);
    useEffect( () => {
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])

    return (
        <div className="w-2/3">
            <h1 className="text-4xl">Courses</h1>
        </div>
    );
};

export default Courses;