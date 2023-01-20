import React, {useCallback} from 'react';
import useCartStore from "../../hooks/useCartStore";

const Product = () => {
    const [, cartStore] = useCartStore();

    const onClickAddCart = useCallback((productId: number) => {
        cartStore.addItem({productId: productId, quantity: 1});
    }, []);

    return (
        <div>
            <h2>상품 목록</h2>
            <ul>
                {[1, 2, 3, 4, 5].map((productId) => {
                    return (
                        <li key={productId}>
                            상품 #{productId}{"  "}
                            <button onClick={() => onClickAddCart(productId)}>카트에 넣기</button>
                        </li>

                    )

                })}
            </ul>
        </div>
    );
};

export default Product;
