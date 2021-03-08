/** Assets */
import './NotFound.scss'
import logo from '../../assets/images/Logo_ML@2x.png'
export interface NotFoundProps {
    
}
 
const NotFound: React.FC<NotFoundProps> = () => {
    return ( 
        <article className="not-found">
            <p>Ups!</p>
            <h3>No hemos encontrado resultados</h3>
            <p>Prueba buscar otros productos, seguro encontrarás el indicado para ti.</p>
            <img src={logo} alt="Logo Mercado Libre"/>
            <p>Mercado Libre, ¡Nunca dejes de buscar!</p>
        </article>
     );
}
 
export default NotFound;