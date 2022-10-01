//import s from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { Navigate } from 'react-router-dom';
import { Input } from '../common/FormControls/FormControls';
import { requiredField } from '../../utils/validators';

const LoginForm = (props) => {
  return (
    <form action="#" onSubmit={props.handleSubmit}>
      <div>
        <Field name="email" type="email" component={Input} validate={ [requiredField] } placeholder='email' />
      </div>
      <div>
        <Field name="password" type="password" component={Input} validate={ [requiredField] } placeholder='password' />
      </div>
      <div>
        <Field name="rememberMe" type="checkbox" component={Input} validate={ [requiredField] } /> remember me
      </div>
      {
        props.captcha ?
        <div>
          <img src={props.captcha} alt="captcha" />
          <Field name="captcha" type="text" component={Input} validate={ [requiredField] } placeholder='...' />
        </div>
        : null
      }
      <div>
        {props.error}
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = ({email, password, rememberMe, captcha}) => {
    props.login(email, password, rememberMe, captcha);
  }

  if(props.isAuth) return <Navigate to='/profile' />

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm captcha={props.captcha} onSubmit={onSubmit} />
    </div>
  );
}

export default Login;

//loginStatusThunkCreator