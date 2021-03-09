import { Button } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router';
import '../Post/Post.css';
const Post = (props) => {
    // console.log(props);
    const {id,title,body} = (props.post)
    const history = useHistory();
    // const showComments = id =>{
    //     const url = `/post/${id}`;
    //     history.push(url);
    // }
    return (
        <div className="post-container">
            <h3>Title : {title}</h3>
            <h4><strong>Post Id: {id}</strong></h4>
            <p>{body}</p>
            {/* <Button onClick={() => showComments(id)} size="small" variant="contained" color="primary">Show comments</Button> */}
            <Button onClick={() => history.push(`/post/${id}`)} size="small" variant="contained" color="primary">Show comments</Button>
            
        </div>
    );
};

export default Post;