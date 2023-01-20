import {useSyncExternalStore} from 'react';
import CartStore, {CartStoreSnapShotType} from "../store/CartStore";


const cartStore = new CartStore();

export default function useCartStore(): [CartStoreSnapShotType, CartStore] {
    const snapshot = useSyncExternalStore(
        (onStoreChange) => {
            cartStore.addListener(onStoreChange);
            return () => cartStore.removeListener(onStoreChange);
        },
        () => cartStore.getSnapshot(),
    );
    return [snapshot, cartStore];
}
