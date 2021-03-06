
export interface RawData { 
    id: string;
    title: string;
    price: {
        currency: string;
        amount: number;
        decimals: number;
    }
    picture: string;
    condition: string;
    shipping: {
        free_shipping: boolean;
    }
    seller_address: {
        state: {
           name: string;
        }
    }
    sold_quantity?: number;
    description?: string;
}

export interface RawDescription {
    plain_text: string;
}

export interface RawCategories {
    filters: {
        values: {
            path_from_root: {
                name: string;
            }
        }
    }   
}

export interface SearchResponse {
    filters: RawCategories[];
    results: RawData[];
}