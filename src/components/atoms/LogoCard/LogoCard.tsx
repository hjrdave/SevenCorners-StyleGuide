import React from 'react';
import styles from './LogoCard.module.scss';
import logoHorizUrl from '@site/static/img/sc-logos/sc-logo-horiz.webp';
import logoHorizWhiteUrl from '@site/static/img/sc-logos/sc-logo-horiz-white.webp';
import logoVertUrl from '@site/static/img/sc-logos/sc-logo-vert.webp';
import logoVertWhiteUrl from '@site/static/img/sc-logos/sc-logo-vert-white.webp';

export enum LogoType {
    vert = 'vert',
    vertWhite = 'vert-white',
    horiz = 'horiz',
    horizWhite = 'horiz-white'
}
interface Props {
    type: LogoType
};
export default function LogoCard({ type }: Props) {

    const isWhiteBG = (type === LogoType.horizWhite || type === LogoType.vertWhite) ? false : true;
    const logoType = {
        [LogoType.horiz]: logoHorizUrl,
        [LogoType.horizWhite]: logoHorizWhiteUrl,
        [LogoType.vert]: logoVertUrl,
        [LogoType.vertWhite]: logoVertWhiteUrl,
    }

    return (
        <>
            <a href={`${logoType[type]}`} target={"_blank"} rel="noopener noreferrer" download={type}>
                <div className={`${styles.compContainer} ${(isWhiteBG) ? styles.bgWhite : styles.bgDark}`} >
                    <div className={styles.content}>
                        <div className={styles.downloadIcon}>
                            <i className="fa-solid fa-download"></i>
                        </div>
                        <img src={`${logoType[type]}`} alt={type} />
                    </div>
                </div>
            </a>
        </>
    )
}