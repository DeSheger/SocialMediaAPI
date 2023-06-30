const initialState = [{
    author: 'null',
    authorId: 'null',
    date:'null',
    description:'null',
    id:'null',
    image:'null',
    title:'null',
}]

function getPostsReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'SET_POSTS':
            return [
                ...action.payload 
            ]
        default:
            return state;
    }
}

export default getPostsReducer;