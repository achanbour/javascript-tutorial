import React from 'react';
import styles from './Home.module.scss';

export default function Home(props) {
    return (
        <>
            <h1>Home</h1>
            <div className={styles.textColumns}>
                <p className={styles.textColumn}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat neque tellus, ut
                    dapibus
                    mauris malesuada vel. Nam in dictum ex, et blandit lorem. Cras pulvinar porta mauris, a dignissim
                    enim
                    sagittis a. Nam placerat dignissim velit ut maximus. Integer sit amet feugiat nibh. Curabitur
                    accumsan,
                    dui vitae egestas pellentesque, est purus feugiat est, at laoreet justo nibh quis libero. Aliquam
                    vel
                    metus congue, pretium arcu ut, tempus odio. Nullam sit amet sagittis orci. Aenean finibus neque
                    mattis,
                    pulvinar odio a, feugiat ex. Praesent luctus neque ac nisi tempor, ac tempor purus molestie. Etiam
                    vitae
                    pretium ante, in dictum orci.
                </p>
                <p className={styles.textColumn}>
                    Pellentesque gravida augue nec fermentum sagittis. Suspendisse tristique elementum finibus. Aenean
                    scelerisque, diam id rutrum maximus, ex lorem vestibulum mauris, eu vestibulum turpis nisi eu
                    tortor.
                    Aenean interdum nunc nisl. Nulla convallis odio sed ipsum facilisis, sed cursus purus viverra.
                    Aliquam
                    cursus sem ac urna rutrum aliquam. Suspendisse porta, elit eget aliquet consequat, felis mauris
                    interdum
                    neque, vitae sodales erat mauris ac mi. Vestibulum ut nisl non nisl mattis malesuada. Maecenas a
                    ultricies diam, ut consectetur nulla. Donec quis faucibus lectus. Suspendisse consectetur nisl sed
                    finibus fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    mus.
                </p>
                <p className={styles.textColumn}>
                    Aliquam tempus ac dolor et varius. Sed luctus, libero ut tincidunt blandit, tellus nunc laoreet
                    ligula,
                    in porta odio sapien non est. Phasellus a dignissim augue. Duis et ex ut odio vestibulum mollis ut
                    at
                    ligula. Praesent et porttitor velit. Cras in ultricies dolor. Donec sollicitudin facilisis turpis,
                    vel
                    aliquet turpis consequat aliquet. Etiam ac libero viverra, porttitor dolor a, vehicula enim. Fusce
                    vel
                    felis ac mauris pulvinar volutpat non at est. Pellentesque ultrices venenatis ex ac pharetra.
                    Maecenas
                    vel nunc erat. Maecenas sit amet erat eu risus pellentesque ornare at et enim. Aenean vel arcu vel
                    magna
                    efficitur rhoncus non auctor eros. Sed euismod elementum vulputate.
                </p>
            </div>
        </>
    );
}
