const initialState = [{
    id: 'null',
    authorId: 'null',
    addresseeId:'null',
    authorDisplayName:'null',
    userMessage:'null',
    date:'null'
}]

function getMessagesReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'SET_MESSAGES':
            return [
                ...action.payload 
            ]
        default:
            return state;
    }
}

export default getMessagesReducer;