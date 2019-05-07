import React from 'react';
import styled from 'styled-components';

const SearchBar = props => {
    return (
        <Header>
            <LogoHeader>
                <LogoImage className="fab fa-instagram"></LogoImage>
                <StyledH1>Instagram</StyledH1>
            </LogoHeader>

            <SearchContainer>

            <SearchButton 
            onClick={props.preventRefresh}>
            <SearchIcon className="fas fa-search"></SearchIcon>
            </SearchButton>

            <SearchInput 
            placeholder=""
            type="search"
            onChange={props.searchHandler}
            />
            
            </SearchContainer>

            <HeaderIcons>
                <ClickMes className="far fa-compass"></ClickMes>
                <ClickMes className="far fa-heart"></ClickMes>
                <ClickMes onClick={props.handleLogOut} className="far fa-user"></ClickMes>
            </HeaderIcons>


        </Header>
    )
}

export default SearchBar;