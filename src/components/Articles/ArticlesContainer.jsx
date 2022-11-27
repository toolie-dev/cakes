import { connect } from 'react-redux';
import { compose } from "redux";
import { deleteResult, setActivePage, setResult, setTypes } from '../../redux/reducers/articles-reducer';
import Articles from './Articles';

const mapStateToProps = (state) => ({
    result: state.articles.result,
    numberPage: state.articles.numberPage,
    activePage: state.articles.activePage
})

export default compose(
    connect(mapStateToProps, { setResult, deleteResult, setActivePage, setTypes })
)(Articles)