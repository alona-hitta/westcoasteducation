import { useRef, useContext } from 'react';
import ListContext from '../../store/context-list';

const AddTeacher = (props) => {

  const context = useContext(ListContext);
  
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const personalIDRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const competenciesRef = useRef();
  const idRef = useRef();


  const clearForm = () => {
    firstNameRef.current.value = '';
    lastNameRef.current.value = '';
    personalIDRef.current.value = '';
    emailRef.current.value = '';
    mobileRef.current.value = '';
    competenciesRef.current.value = '';
    idRef.current.value='';
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();


      let firstName= firstNameRef.current.value;
      let lastName= lastNameRef.current.value;
      let securityNumber=personalIDRef.current.value;
      let email= emailRef.current.value;
      let mobileNumber= mobileRef.current.value;
      let competencies= competenciesRef.current.value;
      let id = idRef.current.value;

   
    const teacher = {
      firstName, lastName, securityNumber, email, mobileNumber, competencies, id 
    }

    context.addTeacher(teacher);

    
    fetch('http://localhost:3010/teachers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(teacher),
    });
  }

  const onCancelClickHandler = (e) => {
    e.preventDefault();
    clearForm();
  };

  return (
    <div className='modal'>
        <form onSubmit={onSubmitHandler}>
          <div>
            <label htmlFor='firstName'>First name:</label>
            <input 
              className='input'
              type="text"
              id='firstName'
              placeholder='first name'
              ref={firstNameRef} 
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last name:</label>
            <input 
              className='input'
              type="text"
              id='lastName'
              placeholder='last name'
              ref={lastNameRef}
              required 
            />
          </div>
          <div>
            <label htmlFor="personalID">Personal security number:</label>
            <input 
              className='input'
              id='securityNumber'
              type="number" 
              placeholder='ex: 35647267-1234'
              ref={personalIDRef}
              required
            />
          </div>
        <div>
          <label htmlFor="email">Email:</label>
            <input 
              className='input'
              type="email"
              id='email'
              ref={emailRef} 
              required
            />
        </div>
        <div>
        <label htmlFor="mobile">Mobile number"</label>
          <input 
            className='input'
            type="tel"
            id='mobileNumber'
            ref={mobileRef} 
            required
          />
        </div>
      <div>
      <label htmlFor="competencies">Skills:</label>
          <textarea 
            className='input'
            type="text"
            id='competencies'
            ref={competenciesRef} 
            required
          />
      </div>
  <div>
  <label htmlFor="id">Id:</label>
          <input 
            className='input'
            type="number"
            id='id'
            ref={idRef}
            required
          />
  </div>
  <div className="about__link">
  <button className='link'>Add teacher</button><br/>
          <button onClick={onCancelClickHandler} className='link'>Cancel</button>
  </div>

        </form>
      </div>
  )
}

export default AddTeacher;

