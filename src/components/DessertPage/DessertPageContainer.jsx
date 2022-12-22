import { compose } from "redux";
import { connect } from 'react-redux';
import DessertPage from "./DessertPage";

import React from 'react';
import { useParams } from "react-router-dom";

const withRouter = WrappedComponent => props => {
    const params = useParams();
    // etc... other react-router-dom v6 hooks
    return (
        <WrappedComponent
            {...props}
            params={params}
            // etc...
        />
    );
};

const mapStateToProps = (state) => ({
})

export default compose(
    connect(mapStateToProps, {}),
    withRouter,
)(DessertPage)