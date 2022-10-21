import { connect } from 'react-redux/es/exports';
import { compose } from 'redux';
import Header from "./Header";

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}

export default compose(
  connect(mapStateToProps),
)(Header);