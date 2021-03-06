
import Item from '../Item/Item';
// import Breadcrumb from '../Breadcrumb/Breadcrumb';
import { ItemRender, Category } from '../types';
import './SearchResults.scss'


export interface SearchResultsProps {

    items: ItemRender[];
    categories: Category[];

}
 
const SearchResults: React.FC<SearchResultsProps> = ({ items, categories }) => {
    
    

    return ( 
    
        <section className="main-container">
            {/* {
                categories 
                ? <Breadcrumb categories={categories} />
                : ''
            } */}
              <div className="items-container">
                  {
                    items.map((item: ItemRender) => <Item key={item.id} item={item}  />) 
                    } 
             </div>  

            </section>
             );  

}
 
export default SearchResults;