import React from 'react';

type Props = { dishes: DishInCart[] };

export default function OrderedDishes({ dishes }: Props) {
    return (
        <fieldset style={{ border: 'none', height: 0, padding: 0, margin: 0 }}>
            {dishes.map((dish, i) => {
                return (
                    <fieldset
                        key={dish._id}
                        style={{ border: 'none', height: 0, padding: 0, margin: 0 }}
                    >
                        <input type="hidden" name={`dishId_${i}`} value={dish._id} />
                        <input type="hidden" name={`productName_${i}`} value={dish.productName} />
                        <input type="hidden" name={`quantity_${i}`} value={dish.quantity} />
                        <input type="hidden" name={`price_${i}`} value={dish.price} />
                        <input type="hidden" name={`photoUrl_${i}`} value={dish.photoUrl} />
                    </fieldset>
                );
            })}
        </fieldset>
    );
}
