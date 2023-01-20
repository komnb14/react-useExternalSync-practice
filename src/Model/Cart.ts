import Item, {ModelItemType} from "./Item";


export default class Cart {
    readonly items: Item[];

    constructor({items = []}: { items?: Item[] } = {}) {
        this.items = items;
    }

    addItem({productId, quantity}: ModelItemType) {
        const index = this.items.findIndex((data) => data.productId === productId)

        if (index < 0) {
            return this.insertItem({productId, quantity});
        } else {
            return this.updateItem({index, quantity})
        }

    }

    insertItem({productId, quantity}: ModelItemType) {
        const id = Math.max(0, ...this.items.map((i) => i.id)) + 1;
        const item = new Item({id, productId, quantity});

        return new Cart({
            items: [...this.items, item]
        });
    }

    updateItem({index, quantity}: { index: number, quantity: number }) {
        const item = this.items[index];
        return new Cart({
            items: [...this.items.slice(0,index),new Item({...item,
                ...item,
                quantity: item.quantity + quantity,
            }),...this.items.slice(index + 1)]
        })
    }


}
