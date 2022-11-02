import { connect } from 'react-redux/es/exports';
import { compose } from 'redux';
import { setTypePopup } from '../../../redux/reducers/popup-reducer';
import Info from './Info';

const mapStateToProps = (state) => ({
})

export default compose(
  connect(mapStateToProps, { setTypePopup }),
)(Info);