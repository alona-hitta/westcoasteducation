import { useContext, useRef } from 'react';

import ListContext from '../../store/context-list';

const AddCourse = () => {
    
    const context = useContext(ListContext);

    const courseTitleInput = useRef();
    const courseNumberInput = useRef();
    const courseDurationInput = useRef();
    const courseUnitInput = useRef();
    const courseDescriptionInput = useRef();
    const courseStartDateInput = useRef();
    
    const clearForm = () => {
        courseTitleInput.current.value = '';
        courseNumberInput.current.value = '';
        courseStartDateInput.current.value = '';
        courseDurationInput.current.value = '';
        courseUnitInput.current.value = '';
        courseDescriptionInput.current.value = '';
    }


    const onSubmitHandler = (e) => {

      e.preventDefault();

      const course = {
        title: courseTitleInput.current.value,
        courseNumber: courseNumberInput.current.value,
        startDate: courseStartDateInput.current.value,
        duration: courseDurationInput.current.value,
        unit: courseUnitInput.current.value,
        description:courseDescriptionInput.current.value,
      };
      addCourse(course);
      clearForm();
    };    
  
    const addCourse = async (course) => {
      try{
        const response = await fetch('http://localhost:3010/courses', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(course),
          });
      
          if (response.status === 201) {
            context.getData('courses');
          }
      }
      catch(error) {
        console.log(error);
      }
    }
    
    const onCancelClickedHandler = (e) => {
      e.preventDefault();
      clearForm();
    };

    return ( 
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Course name:</label>
                <input id="course-title" type="text" ref={courseTitleInput} />
            </div>
            <div>
                <label htmlFor="course-number">Course number:</label>
                <input id="course-number" type="number" ref={courseNumberInput} />
            </div>
            <div>
                <label htmlFor="course-date">Start date:</label>
                <input id='course-date' type="date" ref={courseStartDateInput} />
            </div>
            <div>
                <label htmlFor="course-duration">Duration:</label>
                <input id="course-duration" type="number" ref={courseDurationInput} />
            </div>
            <div>
                <label htmlFor="duration-unit">date</label>
                <input type="date" ref={courseStartDateInput}/>
            </div>
            <div>
                <label htmlFor="course-description">Description:</label>
                <textarea id="course-description" type="text" ref={courseDescriptionInput} />
            </div>
            <button type='submit'>Add</button>
            <button onClick={onCancelClickedHandler}>Cancel</button>
        </form>
     );
}
 
export default AddCourse;