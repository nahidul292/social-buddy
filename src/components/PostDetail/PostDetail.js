import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        const url = `http://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    } ,[])
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])
    return (
        <div>
            <h3>Title : {post.title}</h3>
            <h4><strong>Post Id: {post.id}</strong></h4>
            <p>{post.body}</p>
            <p>Comments total : {comments.length}</p>
            <h2>Commenters Info</h2>
            {
                comments.map(comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;<h1>I am post details</h1>