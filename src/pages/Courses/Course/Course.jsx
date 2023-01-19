
import {useContext, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import ContextList from '../../../store/context-list';

const Course = () => {

    const { courseId } = useParams()
    const context = useContext(ContextList);
    const [course, setCourse] = useState(null);
    
    useEffect(() => {
        if(context.courses.length!==0) {
            context.getCoursesList('courses');
        }
    }, [context])
    
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
        </div>
   }
    </> );
}
 
export default Course;