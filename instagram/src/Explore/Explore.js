import React from 'react';
import classes from './Explore.module.css';
import ExploreContainer from './ExploreContainer';
import { connect } from 'react-redux';

const explore = props =>
(<React.Fragment>
    <h1 className={classes.margin}>tuk shte ima *explore*</h1>
    <ExploreContainer {...props} />
</React.Fragment>);


// export default explore;

const mapStateToProps = (state) => {
    
    return {
        currentUser: state.currentUser.user,
        users: state.users
    }
}

export default connect(mapStateToProps, null)(explore);