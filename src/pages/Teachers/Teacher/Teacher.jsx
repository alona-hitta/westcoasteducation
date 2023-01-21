import {useContext, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import ContextList from '../../../store/context-list';
import TeacherImg from '../../../styles/img/teacher.png';

const Teacher = () => {
    const { teacherId } = useParams()
    const context = useContext(ContextList);
    const [teacher, setTeacher] = useState(null);
    
    useEffect(() => {
        const currentTeacher = context.teachers.find(teacher => teacher.id === parseInt(teacherId, 10) )
        console.log('current teacher', currentTeacher)
        setTeacher(currentTeacher);
    }, [teacherId, context.teachers])

    return ( <>
    {teacher && 
        <div className="teacher">
            <h1 className="course__heading">{teacher.firstName} {teacher.lastName}</h1>
            <div className="teacher__img">
                <img src={TeacherImg} alt="teacher image" className="teacher__img" />
            </div>
            <div className="details">
                <p><b>Personal id: </b>{teacher.securityNumber}</p>
                <p><b>Email: </b>{teacher.email}</p>
                <p><b>Phone: </b>{teacher.mobileNumber}</p>
                <p><b>Competencies</b></p>
                {teacher.competencies?.split(',').map((competence, index) => {
                    return (
                    <li key={index}>
                        {competence}
                    </li>
                    )
             })} 
            </div>             
        </div>                   
}
    <div className="button__wrap">
        <Link  to={'/teachers'} className="link">
            Back to teachers list
        </Link>
    </div>
    </> );
}
 
export default Teacher;