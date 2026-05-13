export async function Client_api_call <T> (
    url : string,
    options ?: ResponseInit
): Promise<T> {

    const response  =  await fetch(url, options)

    if(!response.ok){
        throw new Error (`error occured in ${url}--please chek`)
    }
    
    return response.json()
}