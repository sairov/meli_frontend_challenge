export interface Item {
    author?: Author;
    id: string;
    title: string;
    price: {
        currency: string;
        amount: number;
        decimals: number;
    },
    picture: string;
    condition: string;
    shipping: {
        free_shipping: boolean;
    },
    sold_quantity?: number;
    description?: string;
}

export interface Author {
        name: string;
        lastname: string;
}

export interface Category {
    name: string;           
}

export interface SearchItems {
    author: Author;
    categories: Category[]
    items: Item[];

}