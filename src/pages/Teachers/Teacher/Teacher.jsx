import {useContext, useEffect, useState} from 'react';
import { useParams } from "react-router-dom";

import ContextList from '../../../store/context-list';

const Teacher = () => {
    const { teacherId } = useParams()
    const context = useContext(ContextList);
    const [teacher, setTeacher] = useState(null);

    useEffect(() => {
        if(!context.teachers.length) {
            context.getData('teachers');
        }
    }, [context])
    
    useEffect(() => {
        const currentTeacher = context.teachers.find(teacher => teacher.id === +teacherId )
        setTeacher(currentTeacher);
    }, [teacherId, context.teachers])

    return ( <>
    <div> teacher id: {teacherId}</div>
    {teacher && 
                            <div>
                                <h3>{teacher.firstName} {teacher.lastName}</h3>
                                <p>Personal id: {teacher.securityNumber}</p>
                                <p>Email: {teacher.email}</p>
                                <p>Phone: {teacher.mobileNumber}</p>
                                <b>Competencies</b>
                                <p>{teacher.competence}</p>
                
                            </div>
                   
                        }
    </> );
}
 
export default Teacher;