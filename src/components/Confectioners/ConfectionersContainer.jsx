import { connect } from 'react-redux';
import { compose } from 'redux';
import { deleteResult, setResult, setTags } from '../../redux/reducers/confectioners-reducer';
import Confectioners from './Confectioners';

const mapStateToProps = (state) => ({
    result: state.confectioners.result
})

export default compose(
    connect(mapStateToProps, { setTags, deleteResult, setResult }),
)(Confectioners);