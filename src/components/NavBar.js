import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { fastfood } from 'react-icons/md'
import { IoIosBeer } from 'react-icons/io'
import '../index.css'

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;
const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
`;
const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
`;
const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
  &:active,
  &:focus {
    text-align: left;
  }
`;
const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
  svg {
    margin-right: 20px;
  }
`;
const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const RedButton = styled(Button) `
color: red
border-color: red
`
const StyledLink = styled(Link)`
text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }

`

class NavBar extends Component {
    render() {
        return (
          // <div>yo</div>
            <Nav>
                <NavHeader>
                    <NavLeft>
                    <div class="dropdown">
                        <button class="dropbtn"> <IoIosBeer/> </button>
                        <div class="dropdown-content">
                            
                            <Link to='/home'>Home</Link>
                            <a href="#">Profile</a>
                            <a href="#">Past Orders</a>
                        </div>
                    </div>
                    </NavLeft>
                    <NavCenter>
                        {/* <input type='text' placeholder='search'/> */}
                        <StyledLink to='/startpage'> <h1>Food App</h1> </StyledLink>
                    </NavCenter>
                    <NavRight>
                        <RedButton> <Link to='/login'>Login</Link> </RedButton>
                    </NavRight>
                </NavHeader>
            </Nav>
        )
    }
}
export default NavBar

