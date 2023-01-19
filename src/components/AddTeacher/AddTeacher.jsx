import { useRef, useContext } from 'react';
import ListContext from '../../store/context-list';

const AddTeacher = (props) => {

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

    const teacher = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      personalIDnumber: personalIDRef.current.value,
      email: emailRef.current.value,
      mobile: mobileRef.current.value,
      competencies: competenciesRef.current.value,
      id: idRef.current.value
    }
    props.onSave(teacher);
  }

  const onCancelClickHandler = (e) => {
    e.preventDefault();
    clearForm();
  };

  return (
    <div className='modal'>
        <h2 className='heading4'>Add teacher</h2>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor='firstName'>First name</label>
          <input 
            className='input'
            type="text"
            id='firstName'
            placeholder='first name'
            ref={firstNameRef} 
            required
          />
          <label htmlFor="lastName">Last name</label>
          <input 
            className='input'
            type="text"
            id='lastName'
            placeholder='last name'
            ref={lastNameRef}
            required 
          />
          <label htmlFor="personalID">Personal ID number</label>
          <input 
            className='input'
            id='personalID'
            type="number" 
            placeholder='ex: 35647267-1234'
            ref={personalIDRef}
            required
          />
          <label htmlFor="email">Email</label>
          <input 
            className='input'
            type="email"
            id='email'
            ref={emailRef} 
            required
          />
          <label htmlFor="mobile">Mobile number</label>
          <input 
            className='input'
            type="tel"
            id='mobile'
            ref={mobileRef} 
            required
          />
          <label htmlFor="competencies">Skills</label>
          <textarea 
            className='input'
            type="text"
            id='competencies'
            ref={competenciesRef} 
            required
          />
          <label htmlFor="id">Staff ID</label>
          <input 
            className='input'
            type="number"
            id='id'
            ref={idRef}
            required
          />
          <button>Add teacher</button>
          <button onClick={onCancelClickHandler}>Cancel</button>
        </form>
      </div>
  )
}

export default AddTeacher;

