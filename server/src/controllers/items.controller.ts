import { Request, Response } from 'express';
import { ItemServices } from '../services/items.services';


// fetching data y debo renderizar las vistas desde el server (aca o router) <---------------

export const ItemsController = {

    search: async (req: Request, res: Response): Promise<any> => {
        
        
        try {
            const query = req.query.search;
            if (query) {
                const data = await ItemServices.search(query as string);
                return res.status(200).send(data);
            }

            return res.status(404).send(console.error("No ha ingresado valores de búsqueda"));

        } catch(e) {
            res.status(404).send(console.error("No hay resultados para la búsqueda"));
        }
    },
    item: async (req: Request, res:Response): Promise<any> => {
        try {
            const id = req.params.id;
            if (id) {
                const data = await ItemServices.item(id as string);
                console.log(res.statusCode);
                return res.status(res.statusCode).send(data);
            }
            return res.status(404).send(console.error("El elemento solicitado no existe"));
        } catch(e) {
            res.status(404).send(console.error("No hay resultados para la búsqueda"));
        }
    }


}
