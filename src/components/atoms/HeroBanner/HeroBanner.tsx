import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import styles from './HeroBanner.module.scss';

interface Props{
    type: 'typography' | 'stripes'
}
export default function HeroBanner({ type }: Props) {

    const pattern = (type === 'stripes') ? 'sc-bg-stripes' : 'sc-bg-typography';
    return (
        <>
            <div className={`${styles.heroSize} ${pattern} px-5`}>
                <Container>
                    <Row>
                        <Col sm={12} className={`d-flex align-items-center p-5 px-md-0`}>
                            <div>
                                <h1 className={"text-center text-md-start text-dark"}>This is a Hero Banner</h1>
                                <p className={'text-center text-md-start fs-3 text-dark'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>  
        </>
    )
}