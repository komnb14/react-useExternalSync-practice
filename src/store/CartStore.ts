import Store from "./Store";
import Item, {ModelItemType} from "../Model/Item";
import Cart from "../Model/Cart";


export interface CartStoreSnapShotType {
    items: Item[];
}

export default class CartStore extends Store<CartStoreSnapShotType> {

    cart = new Cart();

    constructor() {
        super();
        this.takeSnapshot();
    }


    addItem({productId, quantity}: ModelItemType) {
        this.cart = this.cart.addItem({productId, quantity});
        this.update();
    }

    private update() {
        this.takeSnapshot();
        this.publish();
    }

    private takeSnapshot() {
        this.snapshot = {
            items: this.cart.items,
        };
    }
}
