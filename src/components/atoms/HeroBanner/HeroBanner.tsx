import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './HeroBanner.module.scss';

interface Props{

}
export default function HeroBanner({ }: Props) {

    return (
        <>
            <Row className={`d-flex justify-content-center sc-bg-typography ${styles.heroSize}`}>
                <Col sm={12} md={8} className={`d-flex align-items-center p-5 px-md-0`}>
                    <div>
                        <h1 className={"text-center text-md-start"}>This is a Hero Banner</h1>
                        <p className={'text-center text-md-start fs-3'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                </Col>
            </Row>
        </>
    )
}