import {useContext, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import ContextList from '../../../store/context-list';

const Teacher = () => {
    const { teacherId } = useParams()
    const context = useContext(ContextList);
    const [teacher, setTeacher] = useState(null);
    
    useEffect(() => {
        const currentTeacher = context.teachers.find(teacher => teacher.id === parseInt(teacherId) )
        setTeacher(currentTeacher);
    }, [teacherId, context.teachers])

    return ( <>
  
    {teacher && 
                            <div>
                                <h3>{teacher.firstName} {teacher.lastName}</h3>
                                <p>Personal id: {teacher.securityNumber}</p>
                                <p>Email: {teacher.email}</p>
                                <p>Phone: {teacher.mobileNumber}</p>
                                <b>Competencies</b>
                                {teacher.competenceList?.map((competence, index) => {
                                    return (
                                        <li key={index}>
                                            {competence}
                                        </li>
                                    )
                                })}               
                            </div>                   
                        }
                                <Link  to={'/teachers'}>
           Back to teachers list
        </Link>
    </> );
}
 
export default Teacher;