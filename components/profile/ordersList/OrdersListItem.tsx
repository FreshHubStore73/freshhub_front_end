import { addSpaces } from '@/utils/helpers';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Divider,
    SvgIcon,
    Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';

type Props = {
    order: IOrdersHistory;
    i: number;
    expanded: number | false;
    handleChange: (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
};

const ArrowDownIcon = () => (
    <SvgIcon>
        <svg
            width="34"
            height="16"
            viewBox="0 0 34 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M16.9307 14.8613L1.00015 0.999858" stroke="#040705" strokeLinecap="round" />
            <path d="M33 1.13867L17.0695 15.0001" stroke="#040705" strokeLinecap="round" />
        </svg>
    </SvgIcon>
);

const OrderItemTitle = ({
    orderNumber,
    ordered,
    orderStatus,
    totalAmount,
    isExpanded,
}: IOrdersHistoryTitle & { isExpanded: boolean }) => {
    const backgroundColor = (orderStatus: 'in progress' | 'done' | 'rejected') => {
        switch (orderStatus) {
            case 'in progress':
                return 'peach.main';
            case 'done':
                return '#37B268';
            case 'rejected':
                return 'accent.main';
            default:
                return 'text.secondary';
        }
    };
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                gap: '24px',
            }}
        >
            <Box
                sx={{
                    backgroundColor: backgroundColor(orderStatus),
                    height: '52px',
                    width: '6px',
                    borderRadius: '6px',
                }}
            ></Box>
            <Box
                sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    gap: '4px',
                    fontSize: '16px',
                    color: 'text.primary',
                }}
            >
                <div>
                    <Box component={'span'} sx={{ mr: '24px' }}>
                        {orderNumber}
                    </Box>
                    <Box component={'span'}>{ordered}</Box>
                </div>
                <Box
                    sx={{
                        fontSize: '24px',
                        color: 'text.secondary',
                        fontWeight: 400,
                        '&::first-letter': {
                            textTransform: 'capitalize',
                        },
                    }}
                    component={'h4'}
                >
                    {orderStatus}
                </Box>
            </Box>
            {isExpanded ? null : (
                <Box
                    sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        gap: '4px',
                    }}
                >
                    <Box
                        sx={{
                            fontSize: '16px',
                            color: 'text.primary',
                            fontWeight: 400,
                        }}
                        component={'h4'}
                    >
                        Total
                    </Box>
                    <Box
                        sx={{
                            fontSize: '24px',
                            color: 'text.secondary',
                            fontWeight: 400,
                        }}
                    >
                        ${totalAmount}
                    </Box>
                </Box>
            )}
        </Box>
    );
};

const OrdersListDish = ({
    dish,
}: {
    dish: {
        dishId: string;
        dishName: string;
        dishPrice: number;
        dishQuantity: number;
        dishImage: string;
    };
}) => {
    const { dishId, dishName, dishPrice, dishQuantity, dishImage } = dish;
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: '50px minmax(150px, 250px) 40px 55px 50px',
                gridTemplateRaws: 'repeat(2, auto)',
                columnGap: '16px',
                rowGap: '3px',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Image
                src={dishImage}
                alt={dishName}
                width="50"
                height="40"
                style={{ gridArea: '1 / 1 / 3 / 2', objectFit: 'contain' }}
            />
            <Typography
                sx={{
                    alignContent: 'flex-start',
                    fontSize: '18px',
                    color: 'text.secondary',
                    gridArea: '1 / 2 / 3 / 3',
                }}
            >
                {dishName}
            </Typography>
            <Box
                component={'span'}
                sx={{
                    color: 'text.primary',
                    fontSize: '14px',
                    lineHeight: '16.8px',
                    gridArea: '1 / 3 / 2 / 4',
                    justifySelf: 'center',
                }}
            >
                Price
            </Box>
            <Box
                component={'span'}
                sx={{
                    color: 'text.secondary',
                    fontSize: '18px',
                    lineHeight: '21.6px',
                    gridArea: '2 / 3 / 3 / 4',
                    justifySelf: 'center',
                }}
            >
                ${dishPrice}
            </Box>
            <Box
                component={'span'}
                sx={{
                    color: 'text.primary',
                    fontSize: '14px',
                    lineHeight: '16.8px',
                    justifySelf: 'center',
                    gridArea: '1 / 4 / 2 / 5',
                }}
            >
                Quantity
            </Box>
            <Box
                component={'span'}
                sx={{
                    color: 'text.secondary',
                    fontSize: '18px',
                    lineHeight: '21.6px',
                    gridArea: '2 / 4 / 3 / 5',
                    justifySelf: 'center',
                    alignSelf: 'center',
                }}
            >
                {dishQuantity}
            </Box>
            <Box
                component={'span'}
                sx={{
                    color: 'text.primary',
                    fontSize: '14px',
                    lineHeight: '16.8px',
                    justifySelf: 'center',
                    gridArea: '1 / 5 / 2 / 6',
                }}
            >
                Amount
            </Box>
            <Box
                component={'span'}
                sx={{
                    color: 'text.secondary',
                    fontSize: '18px',
                    lineHeight: '21.6px',
                    justifySelf: 'center',
                    gridArea: '2 / 5 / 3 / 6',
                }}
            >
                ${dishQuantity * dishPrice}
            </Box>
        </Box>
    );
};

const OrderItemFooter = ({
    payment,
    totalAmount,
}: {
    payment: 'cash' | 'card';
    totalAmount: number;
}) => {
    return (
        <Box sx={{ width: '100%' }}>
            <Divider
                sx={{
                    backgroundColor: 'peach.main',
                    mb: '12px',
                }}
            />
            <Box
                sx={{
                    width: '100%',
                    display: 'grid',
                    gridTemplate: 'repeat(3, auto) / 1fr 1fr',
                    rowGap: '8px',
                    fontSize: '14px',
                    lineHeight: '16.8px',
                }}
            >
                <Box component={'span'}>Payment</Box>
                <Box
                    component={'span'}
                    sx={{
                        justifySelf: 'flex-end',
                        textTransform: 'capitalize',
                        color: 'text.secondary',
                    }}
                >
                    {payment}
                </Box>
                <Box component={'span'}>Delivery</Box>
                <Box component={'span'} sx={{ justifySelf: 'flex-end', color: 'text.secondary' }}>
                    Free
                </Box>
                <Box component={'span'}>Total</Box>
                <Box component={'span'} sx={{ justifySelf: 'flex-end', color: 'text.secondary' }}>
                    ${totalAmount}
                </Box>
            </Box>
        </Box>
    );
};

const OrderItemBody = ({
    deliveryAddress,
    recipientName,
    recipientPhoneNumber,
    orderedDishes,
    payment,
    totalAmount,
}: IOrdersHistoryBody) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: '20px',
                width: '100%',
            }}
        >
            <Box
                sx={{
                    width: '40%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '18px',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '18px',
                        lineHeight: '21.6px',
                    }}
                >
                    {deliveryAddress}
                </Typography>
                <Box
                    sx={{
                        fontSize: '20px',
                        lineHeight: '24px',
                        color: 'text.secondary',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: '6px',
                    }}
                >
                    <p>{recipientName}</p>
                    <p>{addSpaces(recipientPhoneNumber)}</p>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: '16px',
                }}
            >
                <Typography fontSize={'18px'}>Order</Typography>
                {orderedDishes.map((dish) => (
                    <OrdersListDish key={dish.dishId} dish={dish} />
                ))}
                <OrderItemFooter payment={payment} totalAmount={totalAmount} />
            </Box>
        </Box>
    );
};

export default function OrdersListItem({ order, i, expanded, handleChange }: Props) {
    const {
        orderNumber,
        ordered,
        orderStatus,
        totalAmount,
        deliveryAddress,
        recipientName,
        recipientPhoneNumber,
        orderedDishes,
        payment,
    } = order;
    return (
        <Accordion
            disableGutters
            expanded={expanded === i}
            onChange={handleChange(i)}
            sx={{
                boxShadow: 'none',
                border: '1px solid #BDBDBD',
                '&::before': {
                    height: '0px',
                },
                '&.MuiPaper-root': {
                    borderRadius: '50px',
                },
                '& .MuiAccordionSummary-root': {
                    padding: '0 40px',
                },
                '& .MuiAccordionSummary-content': {
                    margin: '28px 0',
                },
            }}
        >
            <AccordionSummary expandIcon={<ArrowDownIcon />} aria-controls="panel1bh-content">
                <OrderItemTitle
                    orderNumber={orderNumber}
                    ordered={ordered}
                    orderStatus={orderStatus}
                    totalAmount={totalAmount}
                    isExpanded={expanded === i}
                />
            </AccordionSummary>
            <AccordionDetails
                sx={{
                    '&.MuiAccordionDetails-root': {
                        padding: '0px 40px 28px',
                    },
                }}
            >
                <OrderItemBody
                    deliveryAddress={deliveryAddress}
                    recipientName={recipientName}
                    recipientPhoneNumber={recipientPhoneNumber}
                    orderedDishes={orderedDishes}
                    totalAmount={totalAmount}
                    payment={payment}
                />
            </AccordionDetails>
        </Accordion>
    );
}
