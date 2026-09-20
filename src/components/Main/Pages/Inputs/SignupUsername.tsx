import React, { useContext } from 'react'
import { contextUserNormal } from './Signup'

const SignupUsername = () => {
    const person=useContext(contextUserNormal)!;
    console.log(person.newPerson);
    
    
  return (
    <div>SignupUsername</div>
  )
}

export default SignupUsername