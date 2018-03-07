export class HomeListItem {
    id: string;
    price: number;
    pc: string;
    title: string;
}
export class HomeList {
    list: Array<HomeListItem>;
    constructor() {
        this.list = new Array<HomeListItem>();
    }
}