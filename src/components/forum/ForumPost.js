import React from 'react'

const ForumPost = (props) =>{
    return <div className="container">
        <div className="row">
            <div className="col">USER INFO</div>
            <div className="col">{props.post.body !== null ? props.post.body : null}</div>
        </div>
        <hr className="row"/>
        <div className="row">BOTTOM TEXT</div>
    </div>
}

export default ForumPost