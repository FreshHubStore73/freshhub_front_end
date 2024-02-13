'use client';
import { FC } from 'react';
import styles from './numberInput.module.scss';

interface INumberInput {
    quantity: number;
    setQuantity: (quantity: number) => void;
    isOrder?: boolean;
    isAccent?: boolean;
}

const NumberInput: FC<INumberInput> = ({
    quantity,
    setQuantity,
    isOrder = false,
    isAccent = false,
}) => {
    const handleClick = (q: number) => {
        q + quantity ? setQuantity(quantity + q) : null;
    };

    return (
        <div
            className={styles.numberControl}
            style={{
                padding: isOrder ? '8px' : '',
                borderColor: isAccent ? 'rgba(241, 92, 48, 1)' : 'rgba(62, 59, 59, 0.4)',
            }}
        >
            <button
                type="button"
                className={styles.numberLeft}
                style={{ fontSize: isOrder ? '20px' : '' }}
                onClick={() => handleClick(-1)}
            >
                -
            </button>
            <input
                type="number"
                name="number"
                className={styles.numberQuantity}
                style={{ fontSize: isOrder ? '20px' : '' }}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                autoComplete="off"
                min="1"
                step="1"
            />
            <button
                type="button"
                className={styles.numberRight}
                style={{ fontSize: isOrder ? '20px' : '' }}
                onClick={() => handleClick(1)}
            >
                +
            </button>
        </div>
    );
};

export default NumberInput;
