import React from 'react';
import classes from './Search.module.css'

class Search extends React.Component{
    render(){
        return(
            <input className={classes.headerSearch} placeholder="Search" />
        )
    }
}
export default Search