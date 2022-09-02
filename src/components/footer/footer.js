import styled from "styled-components";

const FooterContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    background-color: #003580;
    color: white;
    position: relative;
`

const FooterCopyRight = styled.div`
    padding: 1em;
    position: absolute;
    left: 38%;
`

const FooterComponent = () => {
    return(
        <>
            <FooterContainer>
                <FooterCopyRight>
                    Copyright_Demo © 1XXX–20XX BookingDemo™. All rights reserved.
                </FooterCopyRight>
            </FooterContainer>
        </>
    )
}

export default FooterComponent;