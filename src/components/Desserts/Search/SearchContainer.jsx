import { connect } from 'react-redux';
import { compose } from 'redux';
import { setTypes } from '../../../redux/reducers/desserts-reducer';
import Search from "./Search";

const mapStateToProps = (state) => ({
})

export default compose(
  connect(mapStateToProps, { setTypes }),
)(Search);