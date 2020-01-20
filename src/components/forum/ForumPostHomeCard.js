import React from 'react'

const ForumPostHomeCard = (props) =>{
    return <div className="container">
        <div className="row">
            <div className="col">USER STUFF </div>
            <div className="col">POST STUFF {props.post.title}</div>
        </div>
    </div>
}

export default ForumPostHomeCard