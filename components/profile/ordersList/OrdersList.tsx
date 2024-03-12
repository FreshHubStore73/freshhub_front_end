'use client';
import { Box } from '@mui/material';
import React from 'react';
import OrdersListItem from './OrdersListItem';

type Props = { history: IOrdersHistory[] };

export default function OrdersList({ history }: Props) {
    const [expanded, setExpanded] = React.useState<number | false>(false);
    const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {history.map((order, i) => (
                <OrdersListItem
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
