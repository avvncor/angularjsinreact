import React, { useState, useEffect} from 'react'
import axios from 'axios'
import propTypes from 'prop-types'

function TodoList() {

    let [posts, setPosts] = useState([])

    useEffect(onMount,[])

    function onMount(){
        axios('https://jsonplaceholder.typicode.com/posts')
        .then((posts)=>{
            setPosts([...posts.data])
        })
    }

  return (
    <div className='container'>
        <h2 className="h2">Posts</h2>
        <hr/>
        <ul className="list-group">
            {
                posts.length > 0 ?
                posts.map((p,i)=>{
                    return <li className="list-group-item" key={i}>{p.title}</li>
                })
                : null
            }
        </ul>
    </div>
  )
}

TodoList.propTypes = {
    props: propTypes.object
}
export default TodoList