
import Item from '../Item/Item';
import { ItemRender } from '../types';
import './SearchResults.scss'


export interface SearchResultsProps {
    items: ItemRender[];
}
 
const SearchResults: React.FC<SearchResultsProps> = ({ items }) => {
    
    

    return ( 
    
        <section className="main-container">
              <div className="items-container">
                  {
                    items.map((item: ItemRender) => <Item key={item.id} item={item}  />) 
                    } 
             </div>  

            </section>
             );  

}
 
export default SearchResults;