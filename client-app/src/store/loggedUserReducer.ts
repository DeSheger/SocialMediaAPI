const initialState = {
    loggedUser: {
        Id: null,
        DisplayName: null,
        Token: null,
        Image: null,
        Username: null,
    }
}

function loggedUserReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                loggedUser: {
                    Id: action.payload.Id,
                    DisplayName: action.payload.DisplayName,
                    Token: action.payload.Token,
                    Image: action.payload.Image,
                    Username: action.payload.Username,
                }
            }
        default:
            return state;
    }
}

export default loggedUserReducer;