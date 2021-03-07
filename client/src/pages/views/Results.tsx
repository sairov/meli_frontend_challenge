/** Services and Hooks */

import { ItemService } from '../../server/services/item.services';
import {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';

/** Layout */

import Base from '../layouts/Base';

/** Components */

import SearchResults from '../../components/SearchResults/SearchResults';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ItemDetails from '../../components/ItemDetails/ItemDetails';
import Loader from '../../components/Loader/Loader';



export interface ResultsProps {
 
}
const Results: React.FC<ResultsProps & RouteComponentProps<any>> = (props) => {
    
    const history = useHistory();
    
    const [itemsToRender, setItemsToRender] = useState([]);
    const [haveResults, setHaveResults] = useState(false);
    const [itemDetails, setItemDetails] = useState(false);
    const [categoriesToRender, setCategoriesToRender] = useState([]);
    const [singleItem, setSingleItem] = useState({
        id:'',
        title:'',
        price:{
            currency: '',
            amount: 0,
            decimals: 0
        },
        thumbnail: '',
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
        const  { id }  = props.match.params;

        if (id) { 
            getSingleItem(id) 
            setItemDetails(true);
            
        } else {
            searchItems();
        }

    }

    const getSingleItem = async (id: string) => {
        const result = await ItemService.item(id)

        try {
            setSingleItem(result);
            setHaveResults(true);

        } catch (error) {
            return error;
        }

    }

    const searchItems = async () => {
        setItemDetails(false);
        const {items, categories} = await ItemService.search(props.location.search.substring(8).toString())

        try {
            if (items){
                setItemsToRender(items);
                setHaveResults(true);
            }
            if(categories ) {
                setCategoriesToRender(categories);      
            } 
            
        } catch (error) {
            return error;
        }
    } 



    return (
        <Base>

            {
             categoriesToRender && haveResults === true &&
                <Breadcrumb categories={categoriesToRender} />
            }

            {
                ((itemDetails === false && itemsToRender.length > 0) &&

                <SearchResults items={itemsToRender} />)
                ||

                ((itemDetails === true) &&
                
                <ItemDetails item={ singleItem } />)

                ||
                
                ((haveResults === false) &&
                
                <Loader />
                )
                || ((haveResults === true) &&
                
                history.push(`/Error404`)
                
                )
            }
        </Base>
 );
}
 
export default Results;