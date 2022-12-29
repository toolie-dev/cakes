import { connect } from "react-redux";
import { compose } from "redux";
import { setActivePage } from "../../../../redux/reducers/confectionerPage-reducer";
import Reviews from "./Reviews";

const mapStateToProps = (state) => ({
    numberPage: state.confectionerPage.user.numberPage,
    activePage: state.confectionerPage.user.activePage
})

export default compose(
    connect(mapStateToProps, { setActivePage })
)(Reviews)