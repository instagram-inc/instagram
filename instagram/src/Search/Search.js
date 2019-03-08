import React from 'react';
import classes from './Search.module.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { searchForUsers } from './actions/actions';

class Search extends React.Component{

    state = {
        search: {
            value : ''
        },
        placeholder: {
            value : 'Search...'
        }
    }

    setSearchValue = event => {
        const {placeholder} = this.state
        placeholder.value = 'Search...';
        const MAX_SEARCH_LENGHT = 30;
        const value = event.target.value;
        const search = {...this.state.search};
        search.value = value.substring(0,MAX_SEARCH_LENGHT).toLowerCase();
        this.setState({...this.state, search, placeholder});
    }

    action = event =>{
        const { search, placeholder } = {...this.state};
        const ENTER = 13;
        if (event.keyCode === ENTER) {
            if (!this.props.users.some(user => user.name.toLowerCase().includes(this.state.search.value))) {
                placeholder.value = 'Sorry we have no resault for you';
                search.value = ''
                this.setState({ search, placeholder })
            } else {
                const requestedUids = this.props.users.filter(user => user.name.toLowerCase().includes(this.state.search.value))
                .map(user => user.uid);
                
                this.props.searchForUsers(requestedUids);
                search.value = ''
                this.setState({ search })
                this.props.history.push("/list/resault");
            }
        }
    }

    render(){

        return(
            <React.Fragment>
                <input 
                className={classes.headerSearch}
                onChange={this.setSearchValue}
                value={this.state.search.value} 
                placeholder={this.state.placeholder.value}
                list="suggestions" 
                onKeyUp={event => this.action(event)}/>
    
                <datalist id="suggestions">
                    {this.props.users.map(user => 
                    <option key={user.uid} onClick={this.search}value={user.name} />)}

                </datalist>
          
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchForUsers: requestedUids => dispatch(searchForUsers(requestedUids))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Search));
// export default Search