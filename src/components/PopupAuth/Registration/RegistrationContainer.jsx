import { connect } from 'react-redux/es/exports';
import { compose } from 'redux';
import { setTypePopup } from '../../../redux/reducers/popup-reducer';
import Registratin from './Registration';

const mapStateToProps = (state) => ({
})

export default compose(
  connect(mapStateToProps, { setTypePopup }),
)(Registratin);