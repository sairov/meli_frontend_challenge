/** Assets */
import './Loader.scss';

export interface LoaderProps {
    type: string;
}
 
const Loader: React.FC<LoaderProps> = ({ type }) => {
    return ( 
        <div className="loader-box">
            <div className="loader">Loading...</div>
            { type==='searchLoader'               
            ? <p className="headline">Estamos buscando los mejores resultados para vos</p>
            : <p className="headline">Cargando información solicitada</p>
            }
        </div>
     );
}
 
export default Loader;