import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

export default function NavBar(props) {
    return (
        <nav className={styles.navBar}>
            <NavLink className={styles.navLink} activeClassName={styles.active} exact to="/">
                Home
            </NavLink>
            <NavLink className={styles.navLink} activeClassName={styles.active} to="/about">
                About
            </NavLink>
            <NavLink className={styles.navLink} activeClassName={styles.active} to="/topics">
                Topics
            </NavLink>
        </nav>
    );
}
