import React from 'react';
import { Card, Row, Col, Button } from "react-bootstrap";

interface Props {
    className?: string;
    altButton?: boolean;
};

export default function SimpleCard({ className, altButton }: Props) {

    return (
        <>
            <Card className={`shadow ${className}`}>
                <Card.Body>
                    <Col className={"py-3"}>
                        <Row className={"d-flex justify-content-between"}>
                            <Col sm="8">
                                <div>
                                    <p className={"text-primary fw-bold mb-0"}>Rental car care</p>
                                    <p className={"text-dark"}>Coverage up to $35,000 for rental car damage and theft.</p>
                                    <Button variant='link' className={"ps-0"}><i className="fa-regular fa-circle-question pe-2 fs-6"></i>Tell me more</Button>
                                </div>
                            </Col>
                            <Col className={"d-flex flex-column align-items-end"}>
                                <h2 className={"mb-0 text-dark"}><strong>$7.00</strong></h2>
                                <p className={"text-dark"}><small>per day</small></p>
                                {
                                    (altButton) ?
                                        <Button variant='primary'>Remove</Button> :
                                        <Button variant='outline-primary'>Add</Button>
                                }

                            </Col>
                        </Row>
                    </Col>
                </Card.Body>
            </Card>
        </>
    )
}