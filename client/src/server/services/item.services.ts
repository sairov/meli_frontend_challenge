
const URL = `http://localhost:3001/api`;

export const ItemService = {
    
    search: async (query: string) => {
        try{

            const response = await fetch(`${URL}/items?search=${query}`);
            const data = await response.json();
           
            if(response.status !== 200) {
                return {
                    error: true,
                    message: data.message,
                }    
            }
        
            console.log(data);
            return data;

            } catch (error) {

            return error;

        }  

    },

    item: async (id: string) => {
        try{
            const response = await fetch(`${URL}/items/${id}`);
            const data = await response.json();

            
            if(response.status !== 200) {
                return {
                    error: true,
                    message: data.message,
                }    
            }
            
            console.log(data);
            return data;

            } catch (error) {

                return error;

            }  

 
    }
}


