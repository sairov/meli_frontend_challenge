import './Loader.scss';

export interface LoaderProps {
    
}
 
const Loader: React.FC<LoaderProps> = () => {
    return ( 
        <div className="loader-box">
            <div className="loader">Loading...</div>
            <p className="headline">Estamos buscando los mejores resultados para vos</p>
        </div>
     );
}
 
export default Loader;