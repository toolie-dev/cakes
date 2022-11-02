import { connect } from 'react-redux';
import { compose } from 'redux';
import { setTypePopup } from '../../redux/reducers/popup-reducer';
import Header from "./Header";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    typePopup: state.popup.typePopup
})

export default compose(
  connect(mapStateToProps, { setTypePopup }),
)(Header);