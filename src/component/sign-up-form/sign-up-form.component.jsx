import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button from "../button/botton.component";
import FormInput from "../form-input/form-input.component";
import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields=()=>{
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    }
    catch (error) {
      if(error.code=='auth/email-already-in-use'){
        alert('이미 존재하는 이메일입니다.');
      }
      else{
        console.log('user create by email&password error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <>
      <div className="sign-up-container">
        <h2>아직 회원이 아니라면</h2>
        <span>간단한 회원가입 후 쇼핑혜택 받기</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label='닉네임'
            type='text'
            required
            onChange={handleChange}
            name='displayName'
            value={displayName}
          />
          <FormInput
            label='이메일'
            type='email'
            required
            onChange={handleChange}
            name='email'
            value={email}
          />
          <FormInput
            label='비밀번호'
            type='password'
            required
            onChange={handleChange}
            name='password'
            value={password}
          />
          <FormInput
            label='비밀번호 확인'
            type='password'
            required
            onChange={handleChange}
            name='confirmPassword'
            value={confirmPassword}
          />
          <Button type="submit" >회원가입</Button>
        </form>
      </div>
    </>
  )
}

export default SignUpForm;