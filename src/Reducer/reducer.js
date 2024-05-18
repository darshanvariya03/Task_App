const initalState = {
    users: JSON.parse(localStorage.getItem("users")) || []
}

const taskReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'add':
            const old = [...state.users, action.payload];
            let a = localStorage.setItem('users', JSON.stringify(old));
            return {
                ...state,
                users: old
            }
        case 'del':
            const id = action.payload
            const del = state.users.filter(item=> item.id !== id);
            localStorage.setItem('users',JSON.stringify(del));
            return{
                ...state,
                users : del
            }
        default:
            return state
    }
}

export default taskReducer;