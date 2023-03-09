import React from 'react';
import ColorSwatch, { Props as SwatchProps } from '../../atoms/ColorSwatch/ColorSwatch';
import styles from './ColorSwatchGrid.module.scss';

interface Props {
    swatches: SwatchProps[]
};

export default function ColorSwatchGrid({ swatches }: Props) {

    return (
        <>
            <div className={styles.compContainer}>
                {
                    swatches.map((swatch, index) => (
                        <React.Fragment key={index}>
                            <ColorSwatch name={swatch.name} color={swatch.color} />
                        </React.Fragment>
                    ))
                }
            </div>
        </>
    )
}