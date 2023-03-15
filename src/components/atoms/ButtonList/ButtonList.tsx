import React from 'react';
import Button from 'react-bootstrap/Button';
import styles from './ButtonList.module.scss';

interface Props {
    variant?: 'outline' | 'large' | 'small' | 'outline-large' | 'outline-small';
    className?: string;
};

export default function ButtonList({ variant, className }: Props) {

    return (
        <>
            <div className={`${styles.compContainer} ${className}`}>
                {
                    (variant === "outline") ?
                        <>
                            <div>
                                <Button variant="outline-primary" className={"mx-1"}>Primary</Button>
                                <Button variant="outline-secondary" className={"mx-1"}>Secondary</Button>
                                <Button variant="outline-success" className={"mx-1"}>Success</Button>
                                <Button variant="outline-warning" className={"mx-1"}>Warning</Button>
                            </div>
                            <div className={"pt-2"}>
                                <Button variant="outline-danger" className={"mx-1"}>Danger</Button>
                                <Button variant="outline-info" className={"mx-1"}>Info</Button>
                                <Button variant="outline-light" className={"mx-1"}>Light</Button>
                                <Button variant="outline-dark" className={"mx-1"}>Dark</Button>
                                <Button variant="outline-primary" disabled className={"mx-1"}>Disabled</Button>
                                <Button variant="outline-primary" className={"mx-1"}>
                                    <i className="fa-regular fa-circle-question fs-6 pe-2"></i>
                                    Button with Icon
                                </Button>
                            </div>
                        </> :

                        (variant === 'large') ?
                            <>
                                <div>
                                    <Button variant="primary" size="lg" className={"mx-1"}>Primary</Button>
                                    <Button variant="secondary" size="lg" className={"mx-1"}>Secondary</Button>
                                    <Button variant="success" size="lg" className={"mx-1"}>Success</Button>
                                    <Button variant="warning" size="lg" className={"mx-1"}>Warning</Button>
                                </div>
                                <div className={'pt-2'}>
                                    <Button variant="danger" size="lg" className={"mx-1"}>Danger</Button>
                                    <Button variant="info" size="lg" className={"mx-1"}>Info</Button>
                                    <Button variant="light" size="lg" className={"mx-1"}>Light</Button>
                                    <Button variant="dark" size="lg" className={"mx-1"}>Dark</Button>
                                    <Button variant="primary" size="lg" disabled className={"mx-1"}>Disabled</Button>
                                    <Button variant="primary" size="lg" className={"mx-1"}>
                                        <i className="fa-regular fa-circle-question fs-6 pe-2"></i>
                                        Button with Icon
                                    </Button>
                                </div>

                            </> :
                            (variant === 'small') ?
                                <>
                                    <div>
                                        <Button variant="primary" size="sm" className={"mx-1"}>Primary</Button>
                                        <Button variant="secondary" size="sm" className={"mx-1"}>Secondary</Button>
                                        <Button variant="success" size="sm" className={"mx-1"}>Success</Button>
                                        <Button variant="warning" size="sm" className={"mx-1"}>Warning</Button>
                                    </div>
                                    <div className={'pt-2'}>
                                        <Button variant="danger" size="sm" className={"mx-1"}>Danger</Button>
                                        <Button variant="info" size="sm" className={"mx-1"}>Info</Button>
                                        <Button variant="light" size="sm" className={"mx-1"}>Light</Button>
                                        <Button variant="dark" size="sm" className={"mx-1"}>Dark</Button>
                                        <Button variant="primary" size="sm" disabled className={"mx-1"}>Disabled</Button>
                                        <Button variant="primary" className={"mx-1"}>
                                            <i className="fa-regular fa-circle-question fs-7 pe-2"></i>
                                            Button with Icon
                                        </Button>
                                    </div>
                                </> :
                                (variant === 'outline-large') ?
                                    <>
                                        <div>
                                            <Button variant="outline-primary" size="lg" className={"mx-1"}>Primary</Button>
                                            <Button variant="outline-secondary" size="lg" className={"mx-1"}>Secondary</Button>
                                            <Button variant="outline-success" size="lg" className={"mx-1"}>Success</Button>
                                            <Button variant="outline-warning" size="lg" className={"mx-1"}>Warning</Button>
                                        </div>
                                        <div className={'pt-2'}>
                                            <Button variant="outline-danger" size="lg" className={"mx-1"}>Danger</Button>
                                            <Button variant="outline-info" size="lg" className={"mx-1"}>Info</Button>
                                            <Button variant="outline-light" size="lg" className={"mx-1"}>Light</Button>
                                            <Button variant="outline-dark" size="lg" className={"mx-1"}>Dark</Button>
                                            <Button variant="outline-primary" size="lg" disabled className={"mx-1"}>Disabled</Button>
                                            <Button variant="outline-primary" size="lg" className={"mx-1"}>
                                                <i className="fa-regular fa-circle-question fs-4 pe-2"></i>
                                                Button with Icon
                                            </Button>
                                        </div>

                                    </> :
                                    (variant === 'outline-small') ?
                                        <>
                                            <div>
                                                <Button variant="outline-primary" size="sm" className={"mx-1"}>Primary</Button>
                                                <Button variant="outline-secondary" size="sm" className={"mx-1"}>Secondary</Button>
                                                <Button variant="outline-success" size="sm" className={"mx-1"}>Success</Button>
                                                <Button variant="outline-warning" size="sm" className={"mx-1"}>Warning</Button>
                                            </div>
                                            <div className={'pt-2'}>
                                                <Button variant="outline-danger" size="sm" className={"mx-1"}>Danger</Button>
                                                <Button variant="outline-info" size="sm" className={"mx-1"}>Info</Button>
                                                <Button variant="outline-light" size="sm" className={"mx-1"}>Light</Button>
                                                <Button variant="outline-dark" size="sm" className={"mx-1"}>Dark</Button>
                                                <Button variant="outline-primary" size="sm" disabled className={"mx-1"}>Disabled</Button>
                                                <Button variant="outline-primary" size={"sm"} className={"mx-1"}>
                                                    <i className="fa-regular fa-circle-question fs-7 pe-2"></i>
                                                    Button with Icon
                                                </Button>
                                            </div>
                                        </> :

                                        <>
                                            <div>
                                                <Button variant="primary" className={"mx-1"}>Primary</Button>
                                                <Button variant="secondary" className={"mx-1"}>Secondary</Button>
                                                <Button variant="success" className={"mx-1"}>Success</Button>
                                                <Button variant="warning" className={"mx-1"}>Warning</Button>
                                            </div>
                                            <div className={"pt-2"}>
                                                <Button variant="danger" className={"mx-1"}>Danger</Button>
                                                <Button variant="info" className={"mx-1"}>Info</Button>
                                                <Button variant="light" className={"mx-1"}>Light</Button>
                                                <Button variant="dark" className={"mx-1"}>Dark</Button>
                                                <Button variant="link" className={"mx-1"}>Link</Button>
                                                <Button variant="primary" disabled className={"mx-1"}>Disabled</Button>
                                                <Button variant="primary" className={"mx-1"}>
                                                    <i className="fa-regular fa-circle-question fs-6 pe-2"></i>
                                                    Button with Icon
                                                </Button>
                                            </div>
                                        </>

                }



            </div>
        </>
    )
}