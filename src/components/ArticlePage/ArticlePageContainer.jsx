import { compose } from "redux";
import { connect } from 'react-redux';
import React from 'react';
import { useParams } from "react-router-dom";
import ArticlePage from "./ArticlePage";

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
)(ArticlePage)