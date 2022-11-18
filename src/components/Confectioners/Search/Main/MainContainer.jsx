import { connect } from 'react-redux';
import { compose } from 'redux';
import { setActivePage } from '../../../../redux/reducers/confectioners-reducer';
import Main from './Main';

const mapStateToProps = (state) => ({
    numberPage: state.confectioners.numberPage,
    activePage: state.confectioners.activePage
})

export default compose(
  connect(mapStateToProps, { setActivePage }),
)(Main);