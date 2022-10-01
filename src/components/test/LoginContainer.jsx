//import s from './Login.module.css';
import { compose } from "redux";
import { loginThunkCreator } from "../../redux/auth-reducer";
import Login from "./Login";
import { connect } from 'react-redux/es/exports';

const mapStateToProps = (state) => {
  return{
    isAuth: state.auth.isAuth,
    captcha: state.auth.captcha
  }
}

const LoginContainer = compose(
  connect(mapStateToProps , {login: loginThunkCreator})
)(Login);

export default LoginContainer;

//loginStatusThunkCreator