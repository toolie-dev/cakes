import { connect } from 'react-redux';
import { compose } from "redux";
import { setActivePage } from '../../../../redux/reducers/desserts-reducer';
import Main from "./Main";

const mapStateToProps = (state) => ({
    numberPage: state.desserts.numberPage,
    activePage: state.desserts.activePage
})

export default compose(
  connect(mapStateToProps, { setActivePage })
)(Main);