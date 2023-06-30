import axios from "axios";

const getPosts = (dispatch: Function, setUpdate: Function, update:boolean) => {

    if(update)
    {
        axios.get("http://localhost:5000/api/posts").then(response => {
        console.log(response.data)
        dispatch({
            type: 'SET_POSTS', payload: response.data
        })
    })
    }
    setUpdate(false)
}

export default getPosts;