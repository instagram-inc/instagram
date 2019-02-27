import React from 'react';
import './Header.css';

const instaHeader = props =>
(<header className="Header-header">

    <nav className="Header-nav">

        <div className="Header-div">
            {/* <Link to="/">Home */}
                <img className="Header-img" src="https://image.flaticon.com/icons/png/512/87/87390.png" alt=""></img>
                <img className="Header-logo" src="https://myrealdomain.com/images/instagram-text-logo-5.png" alt=""></img>
            {/* </Link> */}
        </div>

        <div className="Header-search">
            <input className="Header-input" placeholder="Search"></input>
        </div>

        <div className="Header-div">
            {/* <Link to="/explore">Explore */}
                <img className="Header-img" src="http://cdn.onlinewebfonts.com/svg/img_119257.png" alt=""></img>
            {/* </Link> */}
            {/* <Link to="/все още нямам представа"> */}
                <img className="Header-img" src="https://freeiconshop.com/wp-content/uploads/edd/heart-outline.png" alt="" width="24" height="24"></img>
            {/* </Link> */}
            {/* <Link to="/profile/:id">{props.users.name} */}
                <img className="Header-img" src="https://png.pngtree.com/svg/20160308/db33b0089e.png" alt="" width="24" height="24"></img>
            {/* </Link> */}
        </div>
    </nav>
</header>);

export default instaHeader;