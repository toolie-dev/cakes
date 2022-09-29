import Header from "./Header";


const HeaderContainer = (props) => {
    return(
        <Header />
    )
}

export default HeaderContainer;

/*
import { connect } from 'react-redux/es/exports';
import { withAuthRedirect } from '../HOC/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = (state) => {
  return{
    users: state.dialogsPage.users,
    messages: state.dialogsPage.messages
  }
}

export default compose(
  connect(mapStateToProps),
  withAuthRedirect
)(Dialogs);
*/