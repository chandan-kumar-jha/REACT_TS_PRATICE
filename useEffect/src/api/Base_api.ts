const URI = import.meta.env.VITE_API_URL

if(!URI){
    throw new Error (`else client url is not present`)
}

export const api = URI 