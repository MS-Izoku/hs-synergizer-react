import React , { Component } from 'react'
import ForumPost from '../../components/forum/ForumPost';

import {tempData} from '../../App'

export default class ForumThread extends Component{
    constructor(){
        super()
        this.state={
            posts: tempData.posts
        }
    }

    renderPosts = () =>{
        return this.state.posts.map(post => <ForumPost post={post}/>)
    }

    render(){
        return<div className="forum-thread container bg-primary">
            <div className="row">
                {this.renderPosts()}
            </div>
        </div>
    }
}