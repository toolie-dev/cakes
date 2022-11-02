import { connect } from 'react-redux';
import { compose } from "redux";
import App from "./App";

const mapStateToProps = (state) => ({
    typePopup: state.popup.typePopup
})

export default compose(
  connect(mapStateToProps)
)(App);