import { connect } from 'react-redux/es/exports';
import { compose } from 'redux';
import PopupMenu from './PopupMenu';

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        typeUser: state.auth.typeUser
    }
}

export default compose(
  connect(mapStateToProps),
)(PopupMenu);