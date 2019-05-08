import React from 'react';
// import styled from 'styled-components';

const SearchBar = props => {
    return (
        <Header>
            <LogoHeader>
                <LogoImage className="fab fa-instagram"></LogoImage>
                <StyledH1>Instagram</StyledH1>
            </LogoHeader>

            <SearchContainer>

           

            <SearchInput 
            placeholder=""
            type="search"
            onChange={props.searchHandler}
            />
            
            </SearchContainer>



        </Header>
    )
}

export default SearchBar;