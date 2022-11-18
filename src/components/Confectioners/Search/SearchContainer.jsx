import { connect } from 'react-redux';
import { compose } from 'redux';
import { setTypes } from '../../../redux/reducers/confectioners-reducer';
import Search from "./Search";

const mapStateToProps = (state) => ({
})

export default compose(
  connect(mapStateToProps, { setTypes }),
)(Search);