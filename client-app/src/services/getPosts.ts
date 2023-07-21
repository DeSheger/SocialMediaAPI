import axios from "axios";
import urlApi from "./servicesVariables";

const getPosts = async (dispatch: Function, setUpdate: Function, update:boolean) => {

    if(update)
    {
        await axios.get(`${urlApi}/posts`).then(response => {
        console.log(response.data)
        dispatch({
            type: 'SET_POSTS', payload: response.data
        })
        setUpdate(true)
    })
    }
    setUpdate(false)
}

export default getPosts;