/** Services and Hooks */

import { ItemService } from '../../server/services/item.services';
import {useState, useEffect } from 'react';
import { RouteComponentProps, withRouter} from 'react-router-dom';

/** Layout */

import Base from '../layouts/Base';

/** Components */

import SearchResults from '../../components/SearchResults/SearchResults';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ItemDetails from '../../components/ItemDetails/ItemDetails';


export interface ResultsProps {
 
}
const Results: React.FC<ResultsProps & RouteComponentProps<any>> = (props) => {


    const [itemsToRender, setItemsToRender] = useState([]);
    const [onRefresh, setOnRefresh] = useState(true);
    const [itemDetails, setItemDetails] = useState(false);
    const [categoriesToRender, setCategoriesToRender] = useState([])
    const [singleItem, setSingleItem] = useState({
        id:'',
        title:'',
        price:{
            currency: '',
            amount: 0,
            decimals: 0
        },
        picture: '', 
        shipping: {
            free_shipping: false
        }, 
        condition: '', 
        sold_quantity: 0, 
        description: ''
    });
    
    useEffect(()=>{

        onRefreshAction();

    }, [props.location.search, props.match.params.id, itemDetails]);
    

    const onRefreshAction = () => {
        setOnRefresh(true); 
        const  { id }  = props.match.params;

        if (id) { 
            getSingleItem(id) 
            setItemDetails(true)
            
        } else {
            searchItems();
        }

        setOnRefresh(false);
    }

    const getSingleItem = async (id: string) => {
        const result = await ItemService.item(id)

        try {
            setSingleItem(result);
            setOnRefresh(false);

        } catch (error) {
            
        }

    }

    const searchItems = async () => {
        setItemDetails(false);
        const {items, categories} = await ItemService.search(props.location.search.substring(8))

        try {
            setItemsToRender(items);
            setCategoriesToRender(categories.json()) 
           
        
        } catch (error) {
            
        }
    } 



    return (
        <Base>
    
             {categoriesToRender &&
                <Breadcrumb categories={categoriesToRender} />
             }
             {
                (!onRefresh && !itemDetails && itemsToRender.length > 0) &&
                (
                    <SearchResults items={itemsToRender} categories={categoriesToRender}/>
                )
             }
             {
                 (!onRefresh && itemDetails) &&
                 (
                     <ItemDetails item={ singleItem } />
                 )
             }
        </Base>
 );
}
 
export default withRouter(Results);