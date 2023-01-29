import axios from "axios"



export async function createComment(formState2) {
    const config = {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    }
    const { data } = await axios.post("https://jockloc.herokuapp.com/comment", formState, config)
    return data
};


export async function getCommentInfo() {
    const config = {
        headers: {
            "Authorization": localStorage.getItem("token")
        }
    }
    const { data } = await axios.get('https://jockloc.herokuapp.com/comment', config)
    return data
};