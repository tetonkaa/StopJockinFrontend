import { Routes, Route, Link, Navigate } from 'react-router-dom'
import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import { useEffect} from 'react';
import './main.css'
import axios from 'axios'



export default function Comments({isLoggedIn, setIsLoggedIn}) {
    // state declarations
    const [comments, setComments] = useState([])
    const [fetch, setFetch] = useState(false)
    const [username, setUsername] = useState()
    const [formShow, setFormShow] = useState(false)
    const [user, setUser] = useState({})
    const [commentKey, setCommentKey] = useState(0)
    
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/')
        }
    }, [isLoggedIn])
    
    useEffect(() => {
        setShowName(user.username)
    }, [user])

    
    
        function handleChange2(event) {
            setUser({ ...user, "username": event.target.value })
        }
        const handleSubmit = async (event) => {
            event.preventDefault();
            await updateUsername(user);
            
        };

        async function deleteUser() {
            const config = {
                headers:{
                    'Authorization': localStorage.getItem('token')
                }
            };
            await axios.delete('https://jockloc.herokuapp.com/user/', config)
            
          
          localStorage.clear()
          setIsLoggedIn (false)
          
        
    }
    
     async function updateUsername(formState) {
        const config = {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }
            const {_id} = formState;
            const updatedData = await axios.put(`https://jockloc.herokuapp.com/user/${_id}`, formState, config)
            return updatedData.data
        };

    async function getUserName() {
        const config = {
            headers: {
                'Authorization': localStorage.getItem('token')
                
            }
    }
        const { data } = await axios.get('https://jockloc.herokuapp.com/user/', config)
        setUsername(data.username)
        return data
        
    }   
    // Set Comments
    





    
    const navigate = useNavigate()
    


 
    return (
        <div className="CommentComponent">
        {formShow ? 
        <form className="editName" onSubmit={handleSubmit}>
        <input
                type='text'
                name='title'
                onChange={handleChange2}
                value={username.username} />
                 <button className="button is-danger" type="submit">change username</button>
        </form>
        : null
        }
        <button onClick={() => {setFormShow(true)}}>Edit</button>

        <div className='content-under'>
                
                <br />
                <Comment key={commentKey} setCommentKey={setCommentKey} />
        </div>
        
        </div>
    )


}
