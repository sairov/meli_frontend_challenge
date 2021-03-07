import { ItemRender } from '../types';

import './ItemDetails.scss';

export interface ItemDetailsProps {
    item: ItemRender;
}
 
const ItemDetails: React.FC<ItemDetailsProps> = ( { item } ) => {

    const {
        title, 
        price, 
        picture, 
        condition, 
        sold_quantity, 
        description } = item;

     
    return ( <>

            <article className="container">             
                <div className="content">
                    <img className="picture" src={ picture } alt={title}/>
                    <div className="properties">
                        <p className="condition">{ condition === "new" ? "Nuevo" : "Usado" } - { sold_quantity } vendidos</p>
                        <h4 className="item-headline">{ title.trim() }</h4>
                        <div>
                            <h3 className="price">{ price.currency === "ARS" 
                            ? price.amount.toLocaleString("es-AR", {style: "currency", currency:`ARS` , maximumFractionDigits: 0 }) 
                            : price.amount.toLocaleString("es-AR", {style: "currency", currency:`USD` , maximumFractionDigits: 0 })} 
                            { price.decimals !==0 ?<span className="decimals">{price.decimals.toString().slice(2)}</span>:<span className="decimals">00</span>}</h3>
                        </div>
                        <button className="btn">Comprar</button>
                    </div>
                </div>
                <article className="description">
                    <h4 className="description-headline">Descripción del producto</h4>
                    <p className="description-body">{ description }</p>
                </article>
            </article>
        </> );
}
 
export default ItemDetails;