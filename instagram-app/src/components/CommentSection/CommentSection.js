import React from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import moment from "moment";
import styled from 'styled-components';


class CommentSection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            comment: "", 

        }
    }

    addNewComment = e => {
        e.preventDefault(); 
        if(!this.state.comment) return;
        let newComment = { 
            username: localStorage.getItem('username'), 
            text: this.state.comment
        };
        this.setState({
                comments: [...this.state.comments, newComment],
                comment: ""
        })
    };

    handleInput = e => {
        this.setState({ comment: e.target.value }) 
    }


    render() {
        return ( 
            <CommentsSection> 
                {this.state.comments.map(eachComment => {
                return  <Comment
                        eachComment={eachComment}
                        key={eachComment.timestamp}
                        />
                })}
                <TimeStamp>{moment(this.props.timestamp, "MMMM Do YYYY, hh:mm:ss a").fromNow()}</TimeStamp>
                <BorderTop/>
                <CommentInput 
                comment={this.state.comment}
                handleInput={this.handleInput}
                addNewComment={this.addNewComment}
                />
            </CommentsSection> )
 }
}

export default CommentSection;