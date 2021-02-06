import React,  { useState } from 'react';

import { Container, Button, Input } from './styles';

function Form() {
  const [name, setName]=useState('')
  const [surname, setSurname]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const [password2, setPassword2]=useState('')
  const [pass, setPass]=useState(false)

  const HandleSubmit = e => {
    e.preventDefault();

    if ( name.length > 3 && surname.length > 3 && email.length > 3 && password.length > 3 && password2.length > 3 ) {
      console.log('ok')
      setPass(true)
      console.log(name)
      console.log(surname)
      console.log(email)
      console.log(password)
    } else {
      console.log('fail')
      console.log(name)
      console.log(name.length)
      console.log(surname)
      console.log(email)
      console.log(password)
    }
  }

  return (
    <Container>
        <form onSubmit={(e) => HandleSubmit(e)}>
          <h1>Register</h1>
          <Input onChange={((e) => setName(e.target.value))}placeholder="name" name="name"/>
          <Input onChange={((e) => setSurname(e.target.value))}placeholder="surname" name="surname"/>
          <Input onChange={((e) => setEmail(e.target.value))}placeholder="email" name="email"/>
          <Input onChange={((e) => setPassword(e.target.value))}placeholder="password" name="password"/>
          <Input onChange={((e) => setPassword2(e.target.value))}placeholder="confirm password" name="password2"/>
          <Button>Create an account</Button>
        </form>
        {pass ? <h1>CREATE</h1> : <h1></h1>}
    </Container>
  )
}

export default Form;