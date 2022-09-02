import styled from "styled-components";
import "./featuredproperties.css";

const FProperty = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`

const FPropertyItem = styled.div`
    gap: 10px;
    display: flex;
    flex-direction: column;
   
`

const FPropertyName = styled.span`
    font-weight: bold;
`

const FPropertyCity = styled.span`
    font-weight: 300;
`

const FPropertyPrice = styled.span`
    font-weight: 500;
`

const FPropertyRating = styled.span`
   
`
const FPropertyImage = styled.img`
    width: 100%;
    height: 150px;
    overflow: hidden;
    border-radius: 10px;
`

const FeaturedProperties = () => {
    return(
        <>
            <FProperty>
                <FPropertyItem>
                    <FPropertyImage src = "https://cf.bstatic.com/xdata/images/hotel/max500/103951224.jpg?k=03736dd4e1e89c1132e4957149e394d01ac6e8f64f4b09e30ade97a6176f0640&o=" 
                         alt = ""/>
                    <FPropertyName>Aparthotel Stare Miasto</FPropertyName>
                    <FPropertyCity>Krakow</FPropertyCity>
                    <FPropertyPrice>Starting from $120</FPropertyPrice>
                    <FPropertyRating>
                        <button className="fpButton">8.9</button>
                        <span className="fpRating">Excellent</span>
                    </FPropertyRating>
                </FPropertyItem>
                <FPropertyItem>
                    <FPropertyImage src = "https://cf.bstatic.com/xdata/images/hotel/max500/60345914.jpg?k=847c9404a7398f20d1c41febf7c96ab0f8ad5ad74062faae44a3efa73e709d62&o=" 
                         alt = ""/>
                    <FPropertyName>Villa Wellness</FPropertyName>
                    <FPropertyCity>Budapest</FPropertyCity>
                    <FPropertyPrice>Starting from $250</FPropertyPrice>
                    <FPropertyRating>
                        <button className="fpButton">8.5</button>
                        <span className="fpRating">Excellent</span>
                    </FPropertyRating>
                </FPropertyItem>
                <FPropertyItem>
                    <FPropertyImage src = "https://cf.bstatic.com/xdata/images/hotel/max500/38437078.jpg?k=241519692574af90306f0dbec0121eacfddc9a183df3ea34a7b7c8f2b4f5febb&o=" 
                         alt = ""/>
                    <FPropertyName>Unique Design Apartment</FPropertyName>
                    <FPropertyCity>Lisbon</FPropertyCity>
                    <FPropertyPrice>Starting from $180</FPropertyPrice>
                    <FPropertyRating>
                        <button className="fpButton">9.4</button>
                        <span className="fpRating">Excellent</span>
                    </FPropertyRating>
                </FPropertyItem>
                <FPropertyItem>
                    <FPropertyImage src = "https://cf.bstatic.com/xdata/images/hotel/max500/112346687.jpg?k=b0c1b36d31151ed463b8960c21e868584043522f4f380c0f382994d4b3e7ada2&o=" 
                         alt = ""/>
                    <FPropertyName>A Casa di Edi</FPropertyName>
                    <FPropertyCity>Rome</FPropertyCity>
                    <FPropertyPrice>Starting from $320</FPropertyPrice>
                    <FPropertyRating>
                        <button className="fpButton">10</button>
                        <span className="fpRating">Exceptional</span>
                    </FPropertyRating>
                </FPropertyItem>
            </FProperty>
        </>
    )
}

export default FeaturedProperties;