import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styles from './App.module.scss';

import Home from 'components/Home';
import About from 'components/About';
import Topics from 'components/Topics';
import NavBar from 'components/NavBar';

export default function App(props) {
    return (
        <BrowserRouter>
            <NavBar />
            <div className={styles.page}>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} />
            </div>
        </BrowserRouter>
    );
}
