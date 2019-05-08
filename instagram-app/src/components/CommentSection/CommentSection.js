import React from "react";
import Comment from "./Comment";

// const CommentsSection = styled.section`
//     display: flex;
//     flex-direction: column;
// `;

// const TimeStamp = styled.span`
//     color: silver;
//     font-size: .8rem;
//     padding-left: 15px;
// `;

// const BorderTop = styled.hr`
//     color: rgb(199, 198, 198);
//     width: 96%;
//     margin: 15px auto; 
// `;

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
                {this.state.comment.map(eachComment => {
                return  <Comment
                        eachComment={eachComment}
                        key={eachComment.timestamp}
                        />
                })}
                <TimeStamp>{moment(this.props.timestamp, "MMMM Do YYYY, hh:mm:ss a").fromNow()}</TimeStamp>
                <BorderTop/>
                
            </CommentsSection> )
 }
}

export default CommentSection;