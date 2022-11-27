import { connect } from 'react-redux';
import { compose } from 'redux';
import { deleteResult, setResult, setTags, setTypes } from '../../../redux/reducers/desserts-reducer';
import Search from "./Search";

const mapStateToProps = (state) => ({
  result: state.desserts.result
})

export default compose(
  connect(mapStateToProps, { setTypes, setTags, deleteResult, setResult }),
)(Search);