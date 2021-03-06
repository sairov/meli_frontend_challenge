import { Category } from "../types";
import './Breadcrumb.scss';

export interface BreadCrumbProps {
    categories: Category[];
}
 
const BreadCrumb: React.FC<BreadCrumbProps> = ( { categories } ) => {
    return ( 
    
    <>
        <section className="breadcrumb">

            <h1>{categories}</h1>
    
                { categories &&

                    categories.map( (category, index) => {
                        const lastCategory = (categories.length === (index + 1));
                        if(!lastCategory) {
                            return (
                                <div className="breadcrum-component-container" key={index}>
                                    <span>{category} </span>
                                    <span className="breadcrum-component-separator"> - </span>
                                </div>
                            
                            );
                        } else {
                            return (<span key={index}><b>{category}</b></span>)
                        }
                    })
                }
        </section> 
     </>
     );
}
 
export default BreadCrumb;