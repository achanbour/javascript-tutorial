import React from 'react';
import { Link, Route } from 'react-router-dom';
import styles from './Topics.module.scss';

function Topic({ match }) {
    return (
        <h2>Selected topic is {match.params.topicName}</h2>
    );
}

export default function Topics(props) {
    return (
        <>
            <h1>Topics</h1>
            <Route exact path={props.match.path} render={() => (
                <h3 className={styles.warningMsg}>Please select a topic to continue</h3>
            )} />
            <nav className={styles.menu}>
                <h3 className={styles.menuHead}>
                    <i className="fa fa-tags" /> Topics
                </h3>
                <Link class={styles.menuLink} to={`${props.match.url}/rendering`}>
                    Rendering
                </Link>
                <Link class={styles.menuLink} to={`${props.match.url}/components`}>
                    Components
                </Link>
                <Link class={styles.menuLink} to={`${props.match.url}/props-v-state`}>
                    Props vs. State
                </Link>
            </nav>
            <Route path={`${props.match.path}/:topicName`} component={Topic} />
        </>
    );
}
