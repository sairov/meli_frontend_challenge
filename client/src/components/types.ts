export interface ItemRender {
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
    seller_address?: {

        state:  {
            name: string;
        }
    }

    sold_quantity?: number;
    description?: string;
}


export interface Category {

    filters: {
        values: {
            path_from_root: {
                name: string;
            }
        }
    }           
}

export interface SearchItems {
    categories: Category[]
    items: ItemRender[];

}