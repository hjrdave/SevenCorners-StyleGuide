import React from 'react';
import useClipboard from 'react-cork/useClipboard';
import styles from './ColorSwatch.module.scss';

export interface Props {
    name: string;
    color: string;
};
export default function ColorSwatch({ name, color }: Props) {

    const clipboard = useClipboard();
    const [isCopied, setIsCopied] = React.useState(false);
    const shouldBeDark = (name === "secondary" || name === "warning" || name === "grey" || name === "grey-2") ? true : false;
    const onClick = () => {
        clipboard.copyToClipboard(color);
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 250);
    }

    return (
        <>
            <div className={styles.compContainer} style={{ backgroundColor: color }} onClick={onClick}>
                <p className={(shouldBeDark) ? styles.dark : styles.white}><strong>{name}</strong></p>
                <div className={styles.copyIcon}>
                    {
                        (isCopied) ? <span>Copied!</span> : <i className={`fa-regular fa-copy`}></i>
                    }
                </div>
                <code>{color}</code>
            </div>
        </>
    )
}