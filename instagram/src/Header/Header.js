import React from 'react';
import './Header.css';
import Search from '../Search/Search';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const instaHeader = props =>
(<header className="Header-header">

    {props.isLogged ?
        <React.Fragment>
            <nav className="Header-nav">

                <div className="Header-div">
                    <Link to="/">
                        <img className="Header-img" src="https://image.flaticon.com/icons/png/512/87/87390.png" alt=""></img>
                        <img className="Header-logo" src="https://myrealdomain.com/images/instagram-text-logo-5.png" alt=""></img>
                    </Link>
                </div>

                <div className="Header-search">
                    <Search />
                </div>

                <div className="Header-div">
                    <Link to="/explore">
                        <img className="Header-img" src="http://cdn.onlinewebfonts.com/svg/img_119257.png" alt=""></img>
                    </Link>
                    <Link to="/upload">
                        <img className="Header-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dWR4h06-0G2nWvbWsOxFGg8qPBMtze5HR37Wzneazl_ydhfSNw" alt="" width="24" height="24"></img>
                    </Link>
                    <Link to={"/profile/"+props.currentUser.uid}>
                        <img className="Header-img" src="https://png.pngtree.com/svg/20160308/db33b0089e.png" alt="" width="24" height="24"></img>
                    </Link>
                </div>
            </nav>
        </React.Fragment>
    :
        <h4>Wellcome to Instagram!   <Link className="link" to="/login">Sing in</Link>   or   <Link className="link" to="/register">Register</Link></h4> 
    }
</header>);

const mapStateToProps = (state) => {
    
    return {
        currentUser: state.currentUser.user,
        users: state.users
    };
};

export default connect(mapStateToProps, null)(instaHeader);