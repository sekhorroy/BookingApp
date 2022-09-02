import styled from "styled-components"

const MailListContainer = styled.div`
    width: 100%;
    margin-top: 50px;
    background-color: #494949;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    gap: 20px;
`
const MailListTitle = styled.h1`

`
const MailListDesc = styled.h3`

`
const MailListInputContainer = styled.div`

`
const MailListInput = styled.input`
    width: 300px;
    height: 30px;
    padding: 10px;
    border: none;
    margin-right: 10px;
    border: none;
`
const MailListButton = styled.button`
    width: 100px;
    height: 50px;
    background-color: #0071c2;
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`
const MailList = () => {
    return (
        <>
        <MailListContainer>
            <MailListTitle>Save time, save money!</MailListTitle>
            <MailListDesc>Sign up and we'll send the best deals to you</MailListDesc>
            <MailListInputContainer>
                <MailListInput placeholder="Your Email"></MailListInput>
                <MailListButton>Subscribe</MailListButton>
            </MailListInputContainer>
        </MailListContainer>
        </>
    )   
}

export default MailList