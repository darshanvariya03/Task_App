export const VIEW_TASK = () =>{
    return{
        type : 'view'
    }
}
export const ADD_TASK = (data) =>{
    return{
        type : 'add',
        payload : data
    }
}
export const DELETE_USER = (id) =>{
    return{
        type : 'del',
        payload : id
    }
}