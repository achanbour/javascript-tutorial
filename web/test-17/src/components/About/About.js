import React from 'react';
import styles from './About.module.scss';

export default function About(props) {
    return (
        <>
            <h1>About</h1>
            <div className={styles.thumbnailsBar}>
                <div className={styles.thumbnailBox}>
                    <div className={styles.thumbnail}>
                        <i className="fa fa-cloud" />
                    </div>
                    <p>Cloud storage</p>
                </div>
                <div className={styles.thumbnailBox}>
                    <div className={styles.thumbnail}>
                        <i className="fa fa-lock" />
                    </div>
                    <p>Fully encrypted</p>
                </div>
                <div className={styles.thumbnailBox}>
                    <div className={styles.thumbnail}>
                        <i className="fa fa-bolt" />
                    </div>
                    <p>High performance</p>
                </div>
            </div>
        </>
    );
}
