import { useState, useEffect } from 'react'
import axios from 'axios'

const Comment = ({setCommentKey}) => {
    
    const [formState, setFormState] = useState({
        title: '',
        dsecription: ''
    })
    const [comments, setComments] = useState([])
    

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value })
    }

    async function submitHandler(event) {
        event.preventDefault()
        const config = {
            headers:{
              'Authorization': localStorage.getItem('token')
            }
          };
        const { data } = await axios.post('https://jockloc.herokuapp.com/comment', formState, config)
        setCommentKey(Math.random())
    }

    async function getComments() {
        const config = {
            headers:{
              'Authorization': localStorage.getItem('token')
            }
          };
        const { data } = await axios.get('https://jockloc.herokuapp.com/comment', config)
        return data
    }

    async function showComments() {
        const comments = await getComments()
        setComments(comments)
    }
    
    useEffect(() => {
        showComments()
    }, [])

    return(
        <main>
            <h1 className="commentsHeader">Comments</h1>
            <form onSubmit={submitHandler} className='content-under'>
                <div className="input-text">
                    <label htmlFor="title"></label>
                    <input
                        type='text'
                        name='title'
                        onChange={handleChange}
                        placeholder="Title"
                        value={formState.title} />
                </div>
                <div className="input-text">
                    <label htmlFor="content"></label>
                    <input
                        type='text'
                        name='content'
                        onChange={handleChange}
                        placeholder="Content"
                        value={formState.description} />
                </div>
                <button type="submit" className='btn btn-secondary comment-submit'>Submit</button>
            </form>
            <section>
            { comments.map((comment, i) =>
                    <div key={i} className="comment">
                        <p className='comment-title'>{comment.title}</p>
                        <p className='comment-content'>{comment.content}</p>
                    </div>
            )}
            </section>
        </main>
    )
}

export default Comment