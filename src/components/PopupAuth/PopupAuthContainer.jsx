import { connect } from 'react-redux/es/exports';
import { compose } from 'redux';
import PopupAuth from './PopupAuth';

const mapStateToProps = (state) => ({
    typePopup: state.popup.typePopup
})

export default compose(
  connect(mapStateToProps),
)(PopupAuth);