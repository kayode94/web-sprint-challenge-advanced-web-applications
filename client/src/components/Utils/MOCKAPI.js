import {axiosWithAuth} from './axiosWithAuth'

export const fetchBubbles = () =>{
    return axiosWithAuth()
    .get('/api/colors')
    .then(response=>{
        console.log(response)
        return response
    })
    .catch(error=>{
        console.log('THIS IS YOUR ERROR', error)
    })
}