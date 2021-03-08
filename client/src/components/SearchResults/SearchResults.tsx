/** Hooks */
import { useEffect } from 'react';
/** Interfaces */
import { ItemRender, Category } from '../types';
/** Components */
import Item from '../Item/Item';
import Breadcrumb from '../Breadcrumb/Breadcrumb';

/** Assets */
import './SearchResults.scss'


export interface SearchResultsProps {
    items: ItemRender[];
    categories: Category[];
}
 
const SearchResults: React.FC<SearchResultsProps> = ({ items, categories }) => {
    
    useEffect(() => {
        document.title=`Mercado Libre | ${categories[categories.length - 1]?.name}`;
    }, [items, categories])

    return ( 
        <>
            <Breadcrumb categories={categories} />

            <section className="main-container">
                <div className="items-container">
                    {
                        items.map((item: ItemRender) => <Item key={item.id} item={item}  />) 
                    } 
                </div>  
            </section>
        </>
             );  

}
 
export default SearchResults;