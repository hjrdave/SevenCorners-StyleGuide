import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './ProductCard.module.scss';

interface Props {
    notRecommended?: boolean;
    className?: string;
};
export default function ProductCard({ notRecommended, className }: Props) {

    return (
        <>
            <div style={{ width: "450px" }} className={className}>
                <Card className={'shadow'}>
                    <Card.Header className={'d-flex justify-content-end p-0'}>
                        {
                            (!notRecommended) ?
                                <div className={`d-flex position-relative`}>
                                    <div className={`${styles.cardBadgeSlant} bg-primary bg-gradient`}></div>
                                    <div className={`position-relative p-2 text-uppercase text-white bg-gradient bg-primary`}>
                                        <strong>Recommended</strong>
                                    </div>
                                </div> :
                                <div className={`d-flex position-relative invisible`}>
                                    <div className={`bg-primary bg-gradient`}></div>
                                    <div className={`position-relative p-2 text-uppercase text-white bg-gradient bg-primary`}>
                                        <strong>&nbsp;&nbsp;&nbsp;</strong>
                                    </div>
                                </div>
                        }

                    </Card.Header>
                    <Card.Body>
                        <Card.Title className={"text-primary fs-2"}>
                            {(!notRecommended) ? "RoundTrip Choice" : "RoundTrip Basic"}
                        </Card.Title>
                        <div className={"d-flex align-items-center pt-3"}>
                            <Card.Subtitle className="pe-3 mb-2 text-muted">
                                Starting at:
                            </Card.Subtitle>
                            <p className={"fs-1 text-dark fw-bold"}>
                                {(!notRecommended) ? "$216.00" : "$94.00"}
                            </p>
                        </div>
                        <Card.Text>
                            <p><small className={"text-primary"}><strong>Includes:</strong></small></p>
                            <div className={'d-flex'}>
                                <i className="fa-regular fa-square-check text-success pe-2 fs-5"></i>
                                <p className={"text-dark"}><strong>150%</strong> trip interruption coverage</p>
                            </div>
                            <div className={'d-flex'}>
                                <i className="fa-regular fa-square-check text-success pe-2 fs-5"></i>
                                <p className={"text-dark"}>Medical expense coverage, including Covid treatment, up to <strong>$500,000</strong></p>
                            </div>
                            <div className={'d-flex'}>
                                <i className="fa-regular fa-square-check text-success pe-2 fs-5"></i>
                                <p className={"text-dark"}>Trip delay coverage up to <strong>$2,000</strong></p>
                            </div>
                            <div className={'d-flex'}>
                                <i className="fa-regular fa-square-check text-success pe-2 fs-5"></i>
                                <p className={"text-dark"}>Protection for lost belongings, including baggage, VISA, credit card, and more.</p>
                            </div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className={'d-flex justify-content-center pb-4'}>
                        <Button variant='secondary' className={'w-75'}>Select</Button>
                    </Card.Footer>
                </Card>
            </div>
        </>
    )
}