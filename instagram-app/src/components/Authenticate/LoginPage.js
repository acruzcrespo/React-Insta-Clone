import React from 'react';



class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleLoginInput = e => {
        this.setState({ 
            [e.target.name]: e.target.value
         })
    }


    handleNewUser = e => {
        e.preventDefault();
        const username = this.state.username;
        localStorage.setItem('username', username);
        window.location.reload();
    }    


    render(){
    return (
        <LoginPageContainer>
        <LoginCard>
            <StyledH2>Instagram</StyledH2>
            <Subtitle>Sign up to see Camping Trips Ideas</Subtitle>
            <LoginButton onClick={this.handleNewUser}>Log In with Facebook</LoginButton>
            <LoginInput 
            placeholder="Username..."
            type="text"
            value={this.state.username}
            name="username"
            onChange={this.handleLoginInput}
            />
            <LoginInput 
            type="password" 
            placeholder="Password..." 
            value={this.state.password}
            name="password"
            onChange={this.handleLoginInput}
            />
            <LoginButton onClick={this.handleNewUser}>Sign In</LoginButton>
           </LoginCard>
      </LoginPageContainer>
    )
 }
}

export default LoginPage;