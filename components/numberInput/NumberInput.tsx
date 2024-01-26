'use client';
import { MouseEventHandler, useRef } from 'react';
import styles from './numberInput.module.scss';

const NumberInput = ({
    quantity,
    setQuantity,
}: {
    quantity: number;
    setQuantity: (quantity: number) => void;
}) => {
    const up = useRef<HTMLButtonElement>(null);
    const down = useRef<HTMLButtonElement>(null);

    const handleClick = (el: HTMLButtonElement | null) => {
        el === up.current
            ? setQuantity(quantity + 1)
            : el === down.current && quantity > 1
            ? setQuantity(quantity - 1)
            : null;
    };

    return (
        <div className={styles.numberControl}>
            <button
                type="button"
                className={styles.numberLeft}
                onClick={() => handleClick(down.current)}
                ref={down}
            >
                -
            </button>
            <input
                type="number"
                name="number"
                className={styles.numberQuantity}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                autoComplete="off"
                min="1"
                step="1"
            />
            <button
                type="button"
                className={styles.numberRight}
                ref={up}
                onClick={() => handleClick(up.current)}
            >
                +
            </button>
        </div>
    );
};

export default NumberInput;
