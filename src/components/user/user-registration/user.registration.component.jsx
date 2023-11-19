import "./user.registration.component.css"

import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';


//main function
export const UserRegistrationPage = () => {


 // savedata function is for save button
    function saveData(){
        validateFirstName();
        validateLastName();
        validateEmail();
        validateGender();
        validateDOB();
        validatePassword();
        validateConfirmPassword();
    }
    // variable references
    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const emailRef = useRef();
    const genderRef = useRef();
    const dobRef = useRef();
    const PasswordRef = useRef();
    const confirmPasswordRef = useRef();

//usestate
    const [firstNameValid , setFirstNameValid] = useState(true);
    const [lastNameValid , setLastNameValid] = useState(true);
    const [emailValid , setEmailValid] = useState(true);
    const [genderValid , setGenderValid] = useState(true);
    const [dobValid , setDobValid] = useState(true);
    const [passwordValid , setPasswordValid] = useState(true);
    const [confirmPasswordValid , setConfirmPasswordValid] = useState(true);


//firstname validation
    function validateFirstName(){
        let isFirstNameValid = true;
        if( firstnameRef.current.value.trim().length == 0){
            setFirstNameValid(false);
            isFirstNameValid = false;
        }else{
            setFirstNameValid(true);
        }
        return isFirstNameValid;
    }

    //lastname validation
    function validateLastName(){
        let isLastNameValid = true;
        if( lastnameRef.current.value.trim().length == 0){
            setLastNameValid(false);
            isLastNameValid = false;
        }else{
            setLastNameValid(true);
        }
        return isLastNameValid;
    }
    //email validation
    function validateEmail(){
        let isEmailValid = true;
        if( emailRef.current.value.trim().length == 0){
            setEmailValid(false);
            isEmailValid = false;
        }else{
            setEmailValid(true);
        }
        return isEmailValid;
    }
     //gender validation
     function validateGender(){
        let isGenderValid = true;
        if( genderRef.current.value == false && genderRef.current.value == false){
            setGenderValid(false);
            isGenderValid = false;
        }else{
            setGenderValid(true);
        }
        return isGenderValid;
    }
    //dob validation
    function validateDOB(){
        let isDoBValid = true;
        if( dobRef.current.value.trim().length == 0){
            setDobValid(false);
            isDoBValid = false;
        }else{
            setDobValid(true);
        }
        return isDoBValid;
    } 
    //password validation
    function validatePassword(){
        let isPasswordValid = true;
        if( PasswordRef.current.value.trim().length == 0){
            setPasswordValid(false);
            isPasswordValid = false;
        }else{
            setPasswordValid(true);
        }
        return isPasswordValid;
    }
     // confirm password validation
     function validateConfirmPassword(){
        let isConfirmPasswordValid = true;
        if( confirmPasswordRef.current.value.trim().length == 0){
            setConfirmPasswordValid(false);
            isConfirmPasswordValid = false;
        }else{
            setConfirmPasswordValid(true);
        }
        return isConfirmPasswordValid;
    }

    return(
        <div>
            <form  autoComplete='off'>
                <h2 className='text-center text-white'>REGISTRATION-FORM</h2>
                <div className='form-group'> 
                    <label className='m-3'>First Name:</label><sup className='text-danger'>*</sup>
                    <input type='text' id='fname'  className='form-control  p-2' ref={firstnameRef}
                     onKeyUp={() => {validateFirstName()}}></input>
                    {firstNameValid == false && <div className='text-danger m-2'>First Name is Required !</div>}
                </div>
                <div className='form-group mt-2 '>
                    <label className='m-3'>Last Name:</label><sup  className='text-danger' >*</sup>
                    <input type='text' id='lname'className='form-control p-2' ref={lastnameRef}
                     onKeyUp={() => {validateLastName()}}></input>
                 {lastNameValid == false && <div className='text-danger m-2'>Last Name is Required !</div>}
                </div>
                <div className='form-group mt-2 '>
                    <label className='m-3'>Email ID:</label><sup  className='text-danger'>*</sup>
                    <input type='text' id='emailid'  className='form-control p-2' ref={emailRef}  
                    onKeyUp={() => {validateEmail()}}></input>
                    {emailValid == false && <div className='text-danger m-2'>Email is Required !</div>}
                </div>
                <div>
                  <div className='m-2'>Gender : <sup  className='text-danger'> *</sup></div>
                    <input type='radio' value="MALE" name='gender' ref={genderRef} 
                     onChange={() => {validateGender()}}/>   <label className='m-2'>Male</label>
                    <input type='radio' value="FEMALE" name='gender' ref={genderRef} 
                     onChange={() => {validateGender()}}/> <label className='m-2'>Female</label>
                    {genderValid == false && <div className='text-danger m-2'>Gender is Required !</div>}
                </div>
                <div className='form-group mt-2 '>
                    <label className='m-3'>DOB:</label><sup  className='text-danger'> *</sup>
                    <input type='date' id='dateofbirth' className='form-control p-2' ref={dobRef} 
                    onKeyUp={()=>{validateDOB()}}></input>
                    {dobValid == false && <div className='text-danger m-2'>DOB is Required !</div>}

                </div>
                <div className='form-group mt-2 '>
                    <label className='m-3'>Password:</label><sup  className='text-danger'>*</sup>
                    <input type='number' id='password'className='form-control p-2' ref={PasswordRef}
                    onKeyUp={()=>{validatePassword()}}></input>
                  {passwordValid == false && <div className='text-danger m-2'>password is Required !</div>}

                </div>
                <div className='form-group mt-2 '>
                    <label className='m-3'>Confirm Password:</label><sup  className='text-danger'> *</sup>
                    <input type='number' id='cpassword' className='form-control p-2' ref={confirmPasswordRef} onKeyUp={()=>{validateConfirmPassword()}}></input>
                    {confirmPasswordValid == false && <div className='text-danger m-2'>Confirm Password is Required !</div>}

                </div>
                <div className='mt-2 '>
                    <input type='checkbox' className='m-2'></input><label className='m-2'>Please accept Terms & Conditions?</label>
                </div>
                <div className='form-group text-center'>
                    <input type='button' value="Save" className='btn btn-primary p-2 m-3'  onClick={() => {saveData()}}></input>
                    <input type='reset' value="Cancel" className='btn btn-secondary p-2'></input>
                </div>
                <div className='formdetails'>
                    <label className='m-2'>Already Registered? <Link to="/" style={{color: "blue", textDecoration: "none"}}>Login Here</Link></label> 
                </div>
              
            </form>

        </div>
    )
}