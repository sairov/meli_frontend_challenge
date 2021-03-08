import fetch from 'node-fetch';

/**
 * Get Static Data
 */
import { NAME, LASTNAME } from '../config/config';

/**
 *  Import Data Types
 */
import { RawData, RawDescription, ItemCategory, SearchResponse } from '../interfaces/rawData.interface';
import { Item, SearchItems } from '../interfaces/items.interface';



export const ItemServices = {

        search: async (query: string): Promise<SearchItems> => {
        
                /**
                 * Fetching Data
                 */
                
                const URL = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURIComponent(query)}`;
                const response = await fetch(URL);
                const { results, filters }: SearchResponse = await response.json();

                /**
                 * Formatting array of Categories
                 */   

                const categories =  filters[0]?.values[0]?.path_from_root?.map(element => ({
                                name: element.name
                        }));

                /**
                 * Formatting array of Items
                 */

                const rawItems = results.map( element => ({
                                id: element.id,
                                title: element.title,
                                price: {
                                        amount: element.price,
                                        currency: element.currency_id,
                                        decimals: parseFloat((element.price % 1).toFixed(2)),
                                },
                                thumbnail: element.thumbnail,
                                condition: element.condition,
                                shipping: {
                                        free_shipping: element.shipping.free_shipping
                                },
                                address: {
                                        state_name: element.address.state_name
                                }
                        }))

                /**
                 * Limit the lenght of items
                 */

                const onlyFour = rawItems.slice(0,4);
                

                /**
                 * Matching up the result
                 */

                const result = {
                        author: {
                                name: NAME,
                                lastname: LASTNAME
                                },
                                categories: categories,
                                items: onlyFour
                }

                return result;
        },

        item: async (id: string): Promise<Item> => {
                
                 /**
                 * Fetching Data
                 */

                // Item properties
                const URL = `https://api.mercadolibre.com/items/${id}`;
                const itemResponse = await fetch(URL);
                const element: RawData = await itemResponse.json();
                // Item description
                const descriptionResponse = await fetch(`${URL}/description`);
                const desc: RawDescription = await descriptionResponse.json();
                // Item categories
                const currentCategory_id = element.category_id;
                const itemCategories = await fetch(`https://api.mercadolibre.com/categories/${currentCategory_id}`);
                const categories: ItemCategory = await itemCategories.json();

                /**
                 * Formatting Item Output
                 */

                const item = {
                        author: {
                                name: NAME,
                                lastname: LASTNAME
                        },
                        id: element.id,
                        title: element.title,
                        price: {
                                amount: element.price,
                                currency: element.currency_id,
                                decimals: parseFloat((element.price % 1).toFixed(2))
                        },
                        thumbnail: element.thumbnail,
                        picture: element.pictures?.[0].url,
                        condition: element.condition,
                        shipping: {
                                free_shipping: element.shipping.free_shipping
                        },
                        item_categories: categories.path_from_root.map(element => ({
                                name: element.name
                        })),
                        sold_quantity: element.sold_quantity,
                        description: desc.plain_text
                }

                return item;
        }

}


