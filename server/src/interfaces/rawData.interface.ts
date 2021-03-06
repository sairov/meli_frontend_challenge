
export interface RawData { 
        id: string;
        title: string;
        currency_id: string;
        price: number;
        thumbnail: string;
        condition: string;
        shipping: {
            free_shipping: boolean;
        },
        seller_address: {
            state: {
                name: string;
            }
        }
        sold_quantity?: number;
        description?: RawDescription;
}

export interface RawDescription {
    plain_text: string;
}

export interface RawCategories {
    values: [
        {
        path_from_root: [
                {
                    name: string;
                }
            ]
        }
    ]
}

export interface SearchResponse {
    filters: RawCategories[];
    results: RawData[];
}

