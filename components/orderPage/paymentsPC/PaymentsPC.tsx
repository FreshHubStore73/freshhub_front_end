import React from 'react';
import Persons from './Persons';
import Payments from './Payments';
import Call from './Call';

type Props = {};

export default function PaymentsPC({}: Props) {
    return (
        <div>
            <Persons />
            <Call />
            <Payments />
        </div>
    );
}
