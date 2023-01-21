
import {useContext, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import ContextList from '../../../store/context-list';
import CourseImg from '../../../styles/img/courses.png';
import { Link } from 'react-router-dom';


const Course = () => {

    const { courseId } = useParams()
    const context = useContext(ContextList);
    const [course, setCourse] = useState(null);
    
    useEffect(() => {
        const currentCourse = context.courses.find(course => course.id === parseInt(courseId, 10) )
        setCourse(currentCourse);
    }, [courseId, context.courses])

    return ( <>
    <h1 className="course__heading"> Course id: {courseId}</h1>
    {course && 
        <div className="course">
            <div className="course__img">
                <img src={CourseImg} alt="course image" className="course__img" />
            </div>
            <div className="details">
                <h3><b>Course name:</b> {course.name}</h3>
                <p><b>Course length:</b>{course.length}</p>
                <p><b>Start date:</b>{course.startDate}</p>
                <p><b>Course description: </b>{course.description}</p>
                <div className="button__wrap">
                    <Link  to={'/courses'} className="link">Back to courses list</Link>
                </div>
            </div>

        </div>
   }
    </> );
}
 
export default Course;