'use client';
import { FC } from 'react';
import Image from 'next/image';

import { Box, Stack, SvgIcon, Typography } from '@mui/material';
import { DishInCart, useShoppingCart } from '@/store';

import NumberInput from '@/components/numberInput';
interface ICartListItem {
    dish: DishInCart;
    isOrder?: boolean;
}
const CartListItem: FC<ICartListItem> = ({ dish, isOrder = false }) => {
    const { dishId, dTitle, dPic, dPrice, dQuantity } = dish;
    const { removeDish, changeQuantity } = useShoppingCart();

    const onRemove = () => {
        removeDish(dish);
    };

    const onChange = (q: number) => {
        changeQuantity(dishId, q);
    };

    return (
        <Box
            component={'li'}
            sx={{
                display: 'grid',
                gridTemplateColumns: isOrder ? '97px 1fr' : '146px auto',
                gridTemplateRow: 'repeat(2, auto)',
                columnGap: isOrder ? '20px' : '27px',
                rowGapGap: 'auto',
            }}
        >
            <Box
                sx={{
                    height: isOrder ? '81px' : '121px',
                    borderRadius: '30px',
                    alignSelf: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    objectFit: 'contain',
                    gridArea: '1 / 1 / 3 / 2',
                }}
            >
                <Image src={dPic} fill alt={dTitle} />
            </Box>
            <Box
                sx={{
                    gridArea: '1 / 2 / 2 / 3',
                    alignSelf: 'start',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '10px',
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 700,
                        fontSize: isOrder ? '24px' : '28px',
                        color: 'text.secondary',
                    }}
                >
                    {dTitle}
                </Typography>
                <SvgIcon
                    onClick={onRemove}
                    sx={{
                        cursor: 'pointer',
                        height: isOrder ? '24px' : '30px',
                        '&.MuiSvgIcon-root:hover path': {
                            stroke: '#F15C30',
                        },
                    }}
                >
                    <svg
                        width="26"
                        height="30"
                        viewBox="0 0 26 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M25.2777 6.09497H0.722168M22.8698 9.94052L22.2054 20.5542C21.9497 24.6367 21.8226 26.6779 20.5732 27.9223C19.3237 29.1683 17.4012 29.1683 13.5589 29.1683H12.4409C8.59872 29.1683 6.67617 29.1683 5.42672 27.9223C4.17728 26.6779 4.04872 24.6367 3.7945 20.5542L3.13006 9.94052M9.38883 13.7861L10.1111 21.4772M16.6111 13.7861L15.8888 21.4772"
                            stroke="#3E3B3B"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                        <path
                            d="M5.05566 6.09489H5.21455C5.79586 6.07907 6.35916 5.8768 6.83078 5.51453C7.30239 5.15227 7.66037 4.64687 7.85789 4.06444L7.907 3.906L8.04711 3.45838C8.167 3.07536 8.22766 2.88462 8.30711 2.72157C8.46341 2.40222 8.68773 2.12626 8.96213 1.91579C9.23653 1.70531 9.55338 1.56615 9.88733 1.50945C10.0563 1.48022 10.2456 1.48022 10.624 1.48022H15.3762C15.7547 1.48022 15.9439 1.48022 16.1129 1.50945C16.4468 1.56615 16.7637 1.70531 17.0381 1.91579C17.3125 2.12626 17.5368 2.40222 17.6931 2.72157C17.7726 2.88462 17.8332 3.07536 17.9531 3.45838L18.0932 3.906C18.2763 4.55401 18.6548 5.11967 19.1703 5.51538C19.6858 5.91109 20.3094 6.11477 20.9446 6.09489"
                            stroke="#3E3B3B"
                            strokeWidth="1.5"
                        />
                    </svg>
                </SvgIcon>
            </Box>
            <Box
                sx={{
                    gridArea: '2 / 2 / 3 / 3',
                    alignSelf: 'end',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <NumberInput quantity={dish.dQuantity} setQuantity={onChange} isOrder={isOrder} />
                <Typography
                    sx={{
                        fontWeight: isOrder ? 400 : 700,
                        fontSize: isOrder ? '24px' : '30px',
                        color: 'text.secondary',
                    }}
                >
                    ${dPrice * dQuantity}
                </Typography>
            </Box>
        </Box>
    );
};

export default CartListItem;
