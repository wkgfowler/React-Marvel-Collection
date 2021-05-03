let token = `b589afe8677f50fd6e2c36c2d8d9dd508c8622cf9a30ee45`

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://marvel-hero-inventorywf.herokuapp.com/api/heroes`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to find Hero`s Credentials.')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`https://marvel-hero-inventorywf.herokuapp.com/api/heroes`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to initiliaze Hero Origin.')
        }

        return await response.json()
    },

    update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://marvel-hero-inventorywf.herokuapp.com/api/heroes/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
    },
    
    delete: async(id:string) => {
        const response = await fetch(`https://marvel-hero-inventorywf.herokuapp.com/api/heroes/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}