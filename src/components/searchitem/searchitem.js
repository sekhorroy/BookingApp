//import "./searchitem.css";
import styled from "styled-components";

const SearchItemContainer = styled.div`
    border: 1px solid lightgray;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 10px;
`
const SearchItemImage = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
`
const SearchItemDesc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 2
`
const SearchItemTitle = styled.h1`
    font-size: 20px;
    color: #0071c2;
`
const SearchItemDistance = styled.span`
    font-size: 12px;
`
const SearchItemTaxiOp = styled.span`
    font-size: 12px;
    background-color: #008009;
    color: white;
    width: max-content;
    padding: 3px;
    border-radius: 5px; 
`
const SearchItemSubTitle = styled.span`
    font-size: 12px;
    font-weight: bold;

`
const SearchItemFeatures = styled.span`
    font-size: 12px;

`
const SearchItemCancelOp = styled.span`
    font-size: 12px;
    color: #008009;
    font-weight: bold;
`
const SearchItemCancelOpSubtitle = styled.span`
    font-size: 12px;
    color: #008009;
`
const SearchItemDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const SearchItemRating = styled.div`
    display: flex;
    justify-content: space-between;
`
const SearchItemRatingSpan = styled.span`
    font-weight: 500;
`
const SearchItemRatingButton = styled.button`
    background-color: #003580;
    color: white;
    padding: 5px;
    font-weight: bold;
    border: none;
`
const SearchItemDetailsTexts = styled.div`
    text-align: right;
    display: flex;
    flex-direction: column;
    gap: 5px;
`
const SearchItemPrice = styled.span`
    font-size: 24px;
`
const SearchItemTaxOp = styled.span`
    font-size: 12px;
    color: gray;
` 
const SearchItemCheckButton = styled.button`
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    padding: 10px 5px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
` 

const SearchItem = () => {
    return (
        <SearchItemContainer>
            <SearchItemImage src="https://cf.bstatic.com/xdata/images/hotel/square600/252216806.webp?k=54c79c6dc8a0e3645ed4ea687f926969cce788263636b9566c458b02753d57c6&o=&s=1" alt=""/>
            <SearchItemDesc>
                <SearchItemTitle>Tower Street Apartments</SearchItemTitle>
                <SearchItemDistance>500 m from center</SearchItemDistance>
                <SearchItemTaxiOp>Free airport taxi</SearchItemTaxiOp>
                <SearchItemSubTitle>Studio Apartment with Air conditioning</SearchItemSubTitle>
                <SearchItemFeatures>Entire studio - 1 bathroom - 21m full bed</SearchItemFeatures>
                <SearchItemCancelOp>Free cancellation</SearchItemCancelOp>
                <SearchItemCancelOpSubtitle>You can cancel later, so lock in this great price today!</SearchItemCancelOpSubtitle>
            </SearchItemDesc>
            <SearchItemDetails>
                <SearchItemRating>
                    <SearchItemRatingSpan>Excellent</SearchItemRatingSpan>
                    <SearchItemRatingButton>8.9</SearchItemRatingButton>
                </SearchItemRating>
                <SearchItemDetailsTexts>
                    <SearchItemPrice>$123</SearchItemPrice>
                    <SearchItemTaxOp>Includes taxes and fees</SearchItemTaxOp>
                    <SearchItemCheckButton>Available ?</SearchItemCheckButton>
                </SearchItemDetailsTexts>
            </SearchItemDetails>
        </SearchItemContainer>
    )
}

export default SearchItem