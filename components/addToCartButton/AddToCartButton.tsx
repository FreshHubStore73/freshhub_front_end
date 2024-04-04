'use client';

import { MouseEventHandler } from 'react';
import { Button } from '@mui/material';

import { useShoppingCart } from '../../store';

const AddToCartButton = ({ dish, simple = true }: { dish: DishInCart; simple?: boolean }) => {
    const addDish = useShoppingCart((state) => state.addDish);
    const dishes = useShoppingCart((state) => state.dishes);

    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (!simple) e.preventDefault();
        addDish(dish);
    };

    let content, isInCart;
    if (simple) {
        content = 'Add';
    } else {
        isInCart = dishes.findIndex((item) => item.id === dish.id) !== -1;
        content = isInCart ? '✓' : 'Add';
    }

    return (
        <Button
            variant="contained"
            disabled={isInCart}
            onClick={handleClick}
            type="submit"
            sx={{
                width: simple
                    ? { mobile: '112px', tablet: '140px', desktop: '174px' }
                    : { mobile: '94px', tablet: '147px', desktop: '143px' },
                height: simple
                    ? { mobile: '30px', tablet: '36px', desktop: '50px' }
                    : { mobile: '24px', tablet: '38px', desktop: '50px' },
                borderRadius: { mobile: '24px', tablet: '40px', desktop: '50px' },
                fontSize: simple
                    ? { mobile: '16px', tablet: '18px', desktop: '24px' }
                    : { mobile: '12px', tablet: '18px', desktop: '24px' },
                borderColor: 'accent.main',
                '&:hover': {
                    backgroundColor: 'accent.main',
                },
                '&.Mui-disabled': {
                    color: 'accent.main',
                    backgroundColor: 'white',
                    border: '1px solid',
                    borderColor: 'accent.main',
                },
            }}
        >
            {content}
        </Button>
    );
};

export default AddToCartButton;
