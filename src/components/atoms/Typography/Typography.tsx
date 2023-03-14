import React from 'react';
import styles from './Typography.module.scss';

interface Props {

};

export default function Typography({ }: Props) {

    return (
        <>
            <div className={styles.compContainer}>
                <h1><code>h1</code> Montserrat</h1>
                <h2><code>h2</code> Montserrat</h2>
                <h3><code>h3</code> Montserrat</h3>
                <h4><code>h4</code> Montserrat</h4>
                <h5><code>h5</code> Montserrat</h5>
                <h6><code>h6</code> Montserrat</h6>
                <p><code>p</code> Montserrat</p>
            </div>
        </>
    )
}