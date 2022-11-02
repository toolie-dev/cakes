import { connect } from 'react-redux/es/exports';
import { compose } from 'redux';
import { onClickCanvas } from '../../../redux/reducers/popup-reducer';
import Canvas from "./Canvas";

const mapStateToProps = (state) => ({
})

export default compose(
  connect(mapStateToProps, { onClickCanvas }),
)(Canvas);