import { useContext, useRef } from 'react';

import ListContext from '../../store/context-list';

const AddCourse = () => {
    
    const context = useContext(ListContext);

    const courseTitleInput = useRef();
    const courseNumberInput = useRef();
    const courseDurationInput = useRef();
    const courseStartDateInput = useRef();
    const courseDescriptionInput = useRef();
    
    const clearForm = () => {
        courseTitleInput.current.value = '';
        courseNumberInput.current.value = '';
        courseDurationInput.current.value = '';
        courseStartDateInput.current.value = '';
        courseDescriptionInput.current.value = '';
    }


    const onSubmitHandler = (e) => {

      e.preventDefault();


        let title = courseTitleInput.current.value;
        let courseId = courseNumberInput.current.value;
        let startDate = courseStartDateInput.current.value;
        let length = courseDurationInput.current.value;
        let description =courseDescriptionInput.current.value;

        const course= {title, courseId, startDate,length, description}

        context.addCourse(course);
            
        fetch('http://localhost:3010/courses', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(course),
        });
    };    


    
    const onCancelClickedHandler = (e) => {
      e.preventDefault();
      clearForm();
    };

    return ( 
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>Course name:</label>
                <input id="name" type="text" ref={courseTitleInput} />
            </div>
            <div>
                <label htmlFor="courseId">Course number:</label>
                <input id="courseId" type="number" ref={courseNumberInput} />
            </div>
            <div>
                <label htmlFor="length">Duration:</label>
                <input id="length" type="number" ref={courseDurationInput} />
            </div>
            <div>
                <label htmlFor="startDate">date</label>
                <input type="date" ref={courseStartDateInput}/>
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea id="description" type="text" ref={courseDescriptionInput} />
            </div>
            <button type='submit'>Add</button>
            <button onClick={onCancelClickedHandler}>Cancel</button>
        </form>
     );
}
 
export default AddCourse;