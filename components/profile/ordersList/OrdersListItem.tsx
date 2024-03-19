import { addSpaces } from '@/utils/helpers';
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Divider,
    SvgIcon,
    Tooltip,
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
    <SvgIcon
        sx={{
            width: { mobile: '22px', tablet: '32px', desktop: '34px' },
            height: { mobile: '10px', tablet: '14px', desktop: '16px' },
        }}
    >
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
                gap: { mobile: '15px', tablet: '27px', desktop: '21px' },
            }}
        >
            <Box
                sx={{
                    backgroundColor: backgroundColor(orderStatus),
                    height: { mobile: '48px', tablet: '60px' },
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
                    gap: { mobile: '4px', tablet: '9px' },
                    fontSize: { mobile: '10px', tablet: '14px', desktop: '16px' },
                    color: 'text.primary',
                }}
            >
                <div>
                    <Box
                        component={'span'}
                        sx={{ mr: { mobile: '12px', tablet: '30px', desktop: '24px' } }}
                    >
                        № {orderNumber}
                    </Box>
                    <Box component={'span'}>{ordered}</Box>
                </div>
                <Box
                    sx={{
                        fontSize: { mobile: '16px', tablet: '22px', desktop: '24px' },
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
                        gap: { mobile: '4px', tablet: '7px' },
                    }}
                >
                    <Box
                        sx={{
                            fontSize: { mobile: '10px', tablet: '14px', desktop: '16px' },
                            color: 'text.primary',
                            fontWeight: 400,
                        }}
                        component={'h4'}
                    >
                        Total
                    </Box>
                    <Box
                        sx={{
                            fontSize: { mobile: '16px', tablet: '22px', desktop: '24px' },
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
                gridTemplateColumns: '50px minmax(100px, 450px) repeat(3, minmax(25px, 55px))',
                gridTemplateRaws: 'auto',
                columnGap: { mobile: '8px', tablet: '16px' },
                rowGap: '3px',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <Box
                sx={{
                    borderRadius: { mobile: '10px' },
                    gridArea: '1 / 1 / 3 / 2',
                    width: '50px',
                    height: '42px',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Image
                    src={dishImage}
                    alt={dishName}
                    fill
                    sizes="(max-width: 768px) 30vw, (max-width: 1200px) 20vw, 10vw"
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </Box>
            <Tooltip
                title={dishName}
                placement="top"
                componentsProps={{
                    tooltip: {
                        sx: {
                            backgroundColor: '#BDBDBD',
                            color: 'text.secondary',
                            padding: '8px 14px',
                            borderRadius: '10px',
                            fontSize: '14px',
                            boxShadow: '0px 2px 16px 1px rgba(0, 0, 0, 0.15)',
                        },
                    },
                }}
            >
                <Typography
                    sx={{
                        alignContent: 'flex-start',
                        fontSize: { mobile: '14px', tablet: '16px', desktop: '18px' },
                        color: 'text.secondary',
                        gridArea: '1 / 2 / 3 / 3',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        cursor: 'pointer',
                    }}
                >
                    {dishName}
                </Typography>
            </Tooltip>
            <Box
                component={'span'}
                sx={{
                    color: 'text.primary',
                    fontSize: { mobile: '10px', tablet: '12px', desktop: '14px' },
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
                    fontSize: { mobile: '12px', tablet: '16px', desktop: '18px' },
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
                    fontSize: { mobile: '10px', tablet: '12px', desktop: '14px' },
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
                    fontSize: { mobile: '12px', tablet: '16px', desktop: '18px' },
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
                    fontSize: { mobile: '10px', tablet: '12px', desktop: '14px' },
                    justifySelf: 'flex-end',
                    gridArea: '1 / 5 / 2 / 6',
                }}
            >
                Amount
            </Box>
            <Box
                component={'span'}
                sx={{
                    color: 'text.secondary',
                    fontSize: { mobile: '12px', tablet: '16px', desktop: '18px' },
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
        <Box sx={{ width: '100%', mt: { mobile: '2px', tablet: '4px', desktop: '0px' } }}>
            <Divider
                sx={{
                    backgroundColor: 'peach.main',
                    mb: { mobile: '16px', tablet: '12px' },
                }}
            />
            <Box
                sx={{
                    width: '100%',
                    display: 'grid',
                    gridTemplate: 'repeat(3, auto) / 1fr 1fr',
                    rowGap: '8px',
                    fontSize: { mobile: '12px', tablet: '14px' },
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
                flexDirection: { mobile: 'column', tablet: 'row' },
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                gap: { mobile: '16px', tablet: '20px' },
                width: '100%',
            }}
        >
            <Box
                sx={{
                    width: { mobile: '100%', tablet: '40%' },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-start',
                    gap: { mobile: '10px', tablet: '16px', desktop: '18px' },
                }}
            >
                <Typography
                    sx={{
                        fontSize: { mobile: '10px', tablet: '16px', desktop: '18px' },
                    }}
                >
                    {deliveryAddress}
                </Typography>
                <Box
                    sx={{
                        fontSize: { mobile: '12px', tablet: '18px', desktop: '20px' },
                        color: 'text.secondary',
                        display: 'flex',
                        flexDirection: { mobile: 'row', tablet: 'column' },
                        justifyContent: 'flex-start',
                        alignItems: 'flex-start',
                        gap: { mobile: '38px', tablet: '8px', desktop: '6px' },
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
                    // width: '100%',
                    // flexGrow: 1,
                    gap: { mobile: '10px', tablet: '12px', desktop: '16px' },
                }}
            >
                <Typography
                    sx={{
                        fontSize: { mobile: '14px', tablet: '16px', desktop: '18px' },
                    }}
                >
                    Order
                </Typography>
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
                    borderRadius: { mobile: '36px', tablet: '50px' },
                },
                '& .MuiAccordionSummary-root': {
                    padding: { mobile: '0 27px', tablet: '0 37px', desktop: '0 37px' },
                },
                '& .MuiAccordionSummary-content': {
                    margin: { mobile: '13px 0', tablet: '24px 0' },
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
                        padding: {
                            mobile: '5px 30px 19px',
                            tablet: '1px 40px 28px',
                            desktop: '0px 40px 28px',
                        },
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
