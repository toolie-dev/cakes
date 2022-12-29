import { connect } from "react-redux";
import { compose } from "redux";
import { setActivePage, setTags, setTypes } from "../../../redux/reducers/confectionerPage-reducer";
import Goods from "./Goods";

const mapStateToProps = (state) => ({
    numberPage: state.confectionerPage.goods.numberPage,
    activePage: state.confectionerPage.goods.activePage
})

export default compose(
    connect(mapStateToProps, { setTypes, setTags, setActivePage })
)(Goods)