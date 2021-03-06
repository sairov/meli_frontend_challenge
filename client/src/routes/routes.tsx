import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import routes from '../config/routes';
import Home from '../pages/views/Home';
import Results from '../pages/views/Results';
export interface RoutesProps {
    
}
 
const Routes: React.FC<{}> = () => {
    return ( 
        <Switch>
            {
                routes.map((route, index) => {
                    return(
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            render={(props: RouteComponentProps<any>) => (
                                <route.component 
                                    {...props}
                                    {...route.props}
                                />
                            )}
                            />
                    )
                })
            }
 
            {/* <Route path='/'  exact component={Home}/>
            <Route path='/api/items' exact component={Results} />
            <Route path='/api/items/:id' exact component={Results} /> */}
        </Switch>
     );
}
 
export default Routes;