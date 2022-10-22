import { connect } from 'react-redux/es/exports';
import { compose } from 'redux';
import Index from './Index';

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth
    }
}

export default compose(
  connect(mapStateToProps),
)(Index);