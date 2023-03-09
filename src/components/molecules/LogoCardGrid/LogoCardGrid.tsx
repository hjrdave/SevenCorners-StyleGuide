import React from 'react';
import LogoCard, { LogoType } from '../../atoms/LogoCard';
import styles from './LogoCardGrid.module.scss';

interface Props {
    logos: {
        type: LogoType;
    }[];
};
export default function LogoCardGrid({ logos }: Props) {

    return (
        <>
            <div className={styles.compContainer}>
                {
                    logos.map((logo, index) => (
                        <React.Fragment key={index}>
                            <LogoCard type={logo.type} />
                        </React.Fragment>
                    ))
                }
            </div>
        </>
    )
}