'use client';

import Image from 'next/image';

import { Box, Theme, Tooltip, Typography, useMediaQuery } from '@mui/material';

export const ListOfDishes = ({ orderedDishes }: { orderedDishes: IOrderedDishes[] }) => {
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('tablet'));
    return (
        <>
            {orderedDishes.map((dish) => (
                <DishItemInOrder key={dish.dishId} dish={dish} isMobile={isMobile} />
            ))}
        </>
    );
};

const url = process.env.SERV_URL;

const DishItemInOrder = ({ dish, isMobile }: { dish: IOrderedDishes; isMobile: boolean }) => {
    const { dishId, dishName, dishPrice, dishQuantity, dishImage, categoryName } = dish;

    const photo = dishImage ? `${url}/Images/${dishImage}` : `/dishes/stub-${categoryName}.jpg`;

    const simpleTitle = (
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
    );
    const title = isMobile ? (
        simpleTitle
    ) : (
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
            {simpleTitle}
        </Tooltip>
    );
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
                    src={photo}
                    alt={dishName}
                    fill
                    sizes="(max-width: 768px) 30vw, (max-width: 1200px) 20vw, 10vw"
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </Box>
            {title}
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
