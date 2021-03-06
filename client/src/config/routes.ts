import IRoutes from '../interfaces/route';
import Home from '../pages/views/Home';
import Results from '../pages/views/Results';

const routes: IRoutes[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        exact: true,
    },
    {
        path: '/items',
        name: 'Search Results',
        component: Results,
        exact: true,
    },
    {
        path: '/items/:id',
        name: 'Item Detail',
        component: Results,
        exact: true,
    },
]

export default routes;