import { useState } from "react";
import { signInAuthUserWithEmailAndPassword, createUserDocumentFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import Button from "../button/botton.component";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response=await signInAuthUserWithEmailAndPassword(email,password);
      console.log(response);
      resetFormFields();
    }
    catch (error) {
      switch(error.code){
        case 'auth/wrong-password':
          alert('비밀번호가 틀렸습니다.');
          break;
        case 'auth/user-not-found':
          alert('사용자 정보가 없습니다.');
          break;
        default:
          console.log('login error',error);
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
        <h2>이미 회원이라면</h2>
        <span>로그인 후 쇼핑하러 가기</span>
        <form onSubmit={handleSubmit}>
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
          <div className="buttons-container">
            <Button type="submit" >로그인</Button>
            <Button type="botton" buttonType='google' onClick={signInWithGoogle}>
              구글 로그인
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignInForm;