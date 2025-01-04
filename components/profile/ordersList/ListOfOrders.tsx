'use client';
import { useState } from 'react';
import { Box } from '@mui/material';

import OrderItem from './OrderItem';

type Props = { history: OrderItemDB[] };

export default function ListOfOrders({ history }: Props) {
    const [expanded, setExpanded] = useState<number | null>(null);
    const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : null);
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
                    key={order.orderNumber}
                    order={order}
                    i={i}
                    expanded={expanded}
                    handleChange={handleChange}
                />
            ))}
        </Box>
    );
}
