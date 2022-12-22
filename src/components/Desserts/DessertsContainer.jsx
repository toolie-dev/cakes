import { connect } from 'react-redux';
import { compose } from 'redux';
import { deleteResult, setActivePage, setResult, setTags, setTypes } from '../../redux/reducers/desserts-reducer';
import Desserts from './Desserts';

const mapStateToProps = (state) => ({
    result: state.desserts.result,
    numberPage: state.desserts.numberPage,
    activePage: state.desserts.activePage
})

export default compose(
    connect(mapStateToProps, { setTypes, setTags, deleteResult, setResult, setActivePage }),
)(Desserts);