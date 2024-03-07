import React from 'react';

type Props = { dishes: DishInCart[] };

export default function OrderedDishes({ dishes }: Props) {
    return (
        <fieldset name="orderedDishes" style={{ border: 'none', height: 0, padding: 0, margin: 0 }}>
            {dishes.map((dish, i) => {
                return (
                    <fieldset
                        name={i.toString()}
                        key={dish.id}
                        style={{ border: 'none', height: 0, padding: 0, margin: 0 }}
                    >
                        <input type="hidden" name={`name_${i}`} value={dish.id} />
                        <input type="hidden" name={`quantity_${i}`} value={dish.quantity} />
                        <input type="hidden" name={`price_${i}`} value={dish.price} />
                    </fieldset>
                );
            })}
        </fieldset>
    );
}
