import React, { useState, useEffect } from 'react';
import {baseUrl} from '../shared';

const ContextList = React.createContext({
    teachers:[],
    courses: [],
    addTeacher: () => {},
    error: null
})

export const ContextListProvider = (props) => {
    const [courses, setCourses] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [error, setError] = useState('');

    useEffect(()=> {
        const getCoursesList = () => {
            fetch(`${baseUrl}courses`)
              .then((response) => response.json())
              .then((data) => setCourses(data))
              .catch((error)=>{
                setError(error);
              })
          };
     
          const getTeachersList = () => {
            fetch(`${baseUrl}teachers`)
              .then((response) => response.json())
              .then((data) => setTeachers(data))
              .catch((error)=>{
                setError(error);
              })
          };
        getCoursesList();
        getTeachersList();
    }, []);

    const addTeacher = (teacher) => {
        setTeachers([
            ...teachers, teacher
        ])
    }


    return(
        <ContextList.Provider 
        value={{
            teachers,
            courses,
            addTeacher,
            error
        }}>
            {props.children}
        </ContextList.Provider>
    )
}

export default ContextList;