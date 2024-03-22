'use client';
import { useState } from 'react';

import { Box } from '@mui/material';

import OrderItem from './OrderItem';

type Props = { history: IOrdersHistory[] };

export default function ListOfOrders({ history }: Props) {
    const [expanded, setExpanded] = useState<number | false>(false);
    const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: { mobile: '8px', tablet: '12px' },
            }}
        >
            {history.map((order, i) => (
                <OrderItem
                    key={order.orderId}
                    order={order}
                    i={i}
                    expanded={expanded}
                    handleChange={handleChange}
                />
            ))}
        </Box>
    );
}
