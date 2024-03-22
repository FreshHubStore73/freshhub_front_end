import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Divider,
    SvgIcon,
    Typography,
} from '@mui/material';

import { addSpaces } from '@/utils/helpers';
import { ListOfDishes } from './ListOfDishes';

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
    const backgroundColor = (orderStatus: 'In progress' | 'Done' | 'Rejected') => {
        switch (orderStatus) {
            case 'In progress':
                return 'peach.main';
            case 'Done':
                return '#37B268';
            case 'Rejected':
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
                    <Box component={'span'}>{ordered || 'trali-vali, trali-vali'}</Box>
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
                        width: '20%',
                        display: 'flex',
                        marginRight: '20%',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        gap: { mobile: '4px', tablet: '7px' },
                    }}
                >
                    <Box
                        sx={{
                            fontSize: { mobile: '10px', tablet: '14px', desktop: '16px' },
                            color: 'text.primary',
                            fontWeight: 400,
                            alignSelf: 'center',
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
                            alignSelf: 'center',
                        }}
                    >
                        ${totalAmount}
                    </Box>
                </Box>
            )}
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
                <ListOfDishes orderedDishes={orderedDishes} />

                <OrderItemFooter payment={payment} totalAmount={totalAmount} />
            </Box>
        </Box>
    );
};

type Props = {
    order: IOrdersHistory;
    i: number;
    expanded: number | false;
    handleChange: (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
};

export default function OrderItem({ order, i, expanded, handleChange }: Props) {
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
