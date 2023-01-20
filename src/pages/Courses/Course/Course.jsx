
import {useContext, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import ContextList from '../../../store/context-list';
import { Link } from 'react-router-dom';

const Course = () => {

    const { courseId } = useParams()
    const context = useContext(ContextList);
    const [course, setCourse] = useState(null);
    
    useEffect(() => {
        const currentCourse = context.courses.find(course => course.id === +courseId )
        setCourse(currentCourse);
    }, [courseId, context.courses])

    return ( <>
    <div> Course id: {courseId}</div>
    {course && 
        <div>
        <h3>{course.name}</h3>
        <p>{course.length}</p>
        <p>{course.startDate}</p>
        <p>{course.description}</p>
        <Link  to={'/courses'}>
            Back to courses list
        </Link>
        </div>
   }
    </> );
}
 
export default Course;