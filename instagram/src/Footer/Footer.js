import React from 'react';
import classes from './Footer.module.css';
import { Link } from 'react-router-dom';

const footer = () =>
(<footer>
    <div className={classes.container}>
        <Link className={classes.link} to ='/aboutus'>
            <p className={classes.p}>ABOUT US</p>
        </Link>
        <span>&copy; 2019 INSTAGRAM &nbsp;&nbsp;&nbsp; *Mihail &amp; Alex*</span>
    </div>
</footer>);

export default footer;