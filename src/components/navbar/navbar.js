import styled from 'styled-components';
// the style component must be capital letter
const NavBar = styled.div`
    height: 50px;
    background-color: #003580;
    display: flex;
    justify-content: center;
`;

const NavContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LogoContainer = styled.span`
    font-weight: 500;
`

const NavButton = styled.button`
    margin-left: 20px;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    color: #003580
`;

const NavItems = styled.div`

`;

const Navbar = () => {
    return (
        <NavBar>
            <NavContainer>
                <LogoContainer>
                    <LogoContainer>Booking App</LogoContainer>
                </LogoContainer>
                <NavItems>
                    <NavButton>Login</NavButton>
                    <NavButton>Register</NavButton>
                </NavItems>
            </NavContainer>
        </NavBar>
    )
}

export default Navbar;