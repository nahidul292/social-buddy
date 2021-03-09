import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts,setPosts] = useState([]);
    useEffect(() =>{
        const url = 'http://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res =>res.json())
        .then(data => {
            setPosts(data);
            // console.log(data);
        })
    } ,[])
    return (
        <div>
            <h1>Welcome to Home</h1>
            <h3>Total post is {posts.length}</h3>
            {
                posts.map(post => <Post post= {post}></Post>)
            }
        </div>
    );
};

export default Home;