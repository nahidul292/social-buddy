import React from 'react';

const Comment = (props) => {
    const {id ,name , email ,body} = props.comment;
    return (
        <div>
            <p>Name : {name}</p>
            <p><small>Email : {email}</small></p>
        </div>
    );
};

export default Comment;