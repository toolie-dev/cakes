import { connect } from 'react-redux/es/exports';
import { compose } from 'redux';
import { setTypePopup } from '../../../redux/reducers/popup-reducer';
import HeaderAuth from './HeaderAuth';

const mapStateToProps = (state) => ({
})

export default compose(
  connect(mapStateToProps, { setTypePopup }),
)(HeaderAuth);