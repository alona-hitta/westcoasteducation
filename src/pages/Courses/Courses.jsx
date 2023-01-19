import {useContext, useState} from 'react';
import ListContext from '../../store/context-list';
import CoursesList from '../../components/CoursesList/CoursesList';
import AddCourse from '../../components/AddCourse/AddCourse';


const Courses = () => {
    const context = useContext(ListContext);

    return ( 
        <>
        <h1>Courses</h1>
        <a href={AddCourse}>Add a new course</a>
        {context.courses && <CoursesList courses={context.courses}/>}
        </>
     );
}
 
export default Courses;