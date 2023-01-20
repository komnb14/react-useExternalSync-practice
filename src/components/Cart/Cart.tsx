import React from 'react';
import useCartStore from "../../hooks/useCartStore";

const Cart = () => {
    const [snapshot] = useCartStore();
    const {items} = snapshot;

    console.log("??????????",snapshot);
    return (
        <div>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        상품 #
                        {item.productId}
                        {' - '}
                        {item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
