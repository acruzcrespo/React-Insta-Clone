import React from "react";
import CommentInput from "./commentInput";
import Comment from "./comment";
import moment from 'moment';
import styled from 'styled-components';

const CommentsSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
`;

const BorderTop = styled.hr`
    color: rgb(199, 198, 198);
    width: 96%;
    margin: 15px auto; 
`;



class CommentSection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.comments,
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
        console.log(this.state.comments);
        return ( 
            <CommentsSectionContainer> 
                {this.state.comments.map(eachComment => {
                return  <Comment
                        eachComment={eachComment}
                        key={eachComment.timestamp}
                        />
                })}
                <p>{moment(this.props.timestamp, "MMMM Do YYYY, hh:mm:ss a").fromNow()}</p>
               <BorderTop/>
                <CommentInput 
                comment={this.state.comment}
                handleInput={this.handleInput}
                addNewComment={this.addNewComment}
                />
            </CommentsSectionContainer> )
 }
}

export default CommentSection;