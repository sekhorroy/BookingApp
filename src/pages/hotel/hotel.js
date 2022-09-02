import "./hotel.css"

//import components
import Navbar from "../../components/navbar/navbar";
import Header from "../../components/header/header";
import MailList from "../../components/maillist/maillist";
import FooterComponent from "../../components/footer/footer";

//import react style and feature
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleXmark, faLocationDot, faCircleArrowRight} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const HotelContainer = styled.div`
    display:flex;
    justify-content: center;
    margin-top: 20px;
`
const HotelWrapper = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
`
const HotelTitle = styled.h1`
    font-size: 24px;

`
const HotelAddress = styled.div`
    font-size: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
`
const HotelAddressSpan = styled.span`
`
const HotelDistanceSpan = styled.span`
    color: #0071c2;
    font-weight: 500;
`
const HotelPriceHighLightSpan = styled.span`
    color: #008009;
    font-weight: 500;
`
const HotelImagesContainer = styled.span`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
const HotelImages = styled.img`
    width: 100%;
    object-fit: cover;
    cursor: pointer;
`
const HotelImagesWrapper = styled.img`
    width: 33%;
`

const HotelDetailsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 20px;
`
const HotelDetailsText = styled.div`
    flex: 3;
`
const HotelDetailsPriceContainer = styled.div`
    flex: 1;
    background-color: #ebf3ff;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
const HotelDetailTitle = styled.h1`
`
const HotelDetailDesc = styled.p`
    font-size: 14px;

`
const HotelDetailsPriceh1 = styled.h1`
    font-size: 18px;
    color: #555;
`
const HotelDetailsPriceSpan = styled.h1`
    font-size: 14px;

`
const HotelDetailsPriceh2 = styled.h2`
    font-weight: 300;
`
const HotelDetailsPriceButton = styled.button`
    border: none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    cursor: pointer;
`

const SliderContainer = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    width: 100vw;
    heigth: 100vh;
    background-color: lightgray;
    z-index: 10;
    display: flex;
    align-items: center;
`

const SlideWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-item: center;
`
const SliderImage = styled.img`
    width: 80%;
    height: 80vh;
`
function Hotel () {

    const [slideNumber, setSlideNumber] = useState(0);
    const [open, setOpen] = useState(false);

    const handleOpen = (index) => {
        setOpen(true)
        setSlideNumber(index)
    } 

    const handleSlideNumber = (direction) => {
        let newSlideNumber =  slideNumber;
        if(direction === "left") {
            newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
        } else {
            newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
        }
        setSlideNumber(newSlideNumber)
    }

    const photos = [
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
        },
        {
          src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
        },
      ];
    

    return (
        <div>
            <Navbar />
            <Header type="list"/>
            {open && 
                    <SliderContainer>
                        <FontAwesomeIcon  icon= {faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
                        <FontAwesomeIcon  icon= {faCircleArrowLeft} className="arrow" onClick={()=>handleSlideNumber("left")}/>
                        <SlideWrapper>
                            <SliderImage src={photos[slideNumber].src} />
                        </SlideWrapper>
                        <FontAwesomeIcon  icon= {faCircleArrowRight} className="arrow" onClick={()=>handleSlideNumber("right")}/>
                    </SliderContainer>
                }
            <HotelContainer>
               
                <HotelWrapper>
                    
                    <button className="bookNow">Reserve or Book Now!</button>
                    <HotelTitle>Grand Hotel</HotelTitle>
                    <HotelAddress>
                        <FontAwesomeIcon icon={faLocationDot}/>
                        <HotelAddressSpan>Elton St 125 New York</HotelAddressSpan>
                    </HotelAddress>
                    <HotelDistanceSpan>Excellent location 500m from center</HotelDistanceSpan>
                    <HotelPriceHighLightSpan>Book a stay $114 at this property and get a free airport taxi</HotelPriceHighLightSpan>
                    <HotelImagesContainer>
                        {photos.map((photo, index)=>(
                                <div className="hotelImageWrapper">
                                     <HotelImages src={photo.src} 
                                                  alt=""
                                                  onClick={()=>handleOpen(index)}/>
                                </div>
                         ))}
                    </HotelImagesContainer>
                    <HotelDetailsContainer>
                        <HotelDetailsText>
                            <HotelDetailTitle>Stay in the heart of Krakow</HotelDetailTitle>
                            <HotelDetailDesc>
                                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                                Street Apartments has accommodations with air conditioning and
                                free WiFi. The units come with hardwood floors and feature a
                                fully equipped kitchenette with a microwave, a flat-screen TV,
                                and a private bathroom with shower and a hairdryer. A fridge is
                                also offered, as well as an electric tea pot and a coffee
                                machine. Popular points of interest near the apartment include
                                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                                airport is John Paul II International Kraków–Balice, 16.1 km
                                from Tower Street Apartments, and the property offers a paid
                                airport shuttle service.
                            </HotelDetailDesc>
                        </HotelDetailsText>
                        <HotelDetailsPriceContainer>
                            <HotelDetailsPriceh1>Perfect for a 9-night stay</HotelDetailsPriceh1>
                            <HotelDetailsPriceSpan>Located in the real heart of Krakow, this property has an excellent locaton of score 9.8!</HotelDetailsPriceSpan>
                            <HotelDetailsPriceh2><b>$945</b>(9 nights)</HotelDetailsPriceh2>
                            <HotelDetailsPriceButton>Reserve or Book Now!</HotelDetailsPriceButton>
                        </HotelDetailsPriceContainer>
                    </HotelDetailsContainer>
                </HotelWrapper>
                
            </HotelContainer>
            <MailList />
            <FooterComponent />
        </div>
    );
}

export default Hotel