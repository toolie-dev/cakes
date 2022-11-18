import { connect } from 'react-redux';
import { compose } from 'redux';
import { setTags } from '../../../../redux/reducers/desserts-reducer.js';
import Aside from "./Aside.jsx";

const mapStateToProps = (state) => ({
})

export default compose(
  connect(mapStateToProps, { setTags }),
)(Aside);