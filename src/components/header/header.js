import styled from "styled-components";
import "./header.css";
import { useState } from 'react';
import { useNavigate } from "react-router-dom"

//calender component imports
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'

//icon and font imports
import { faBed, faPlane, faTaxi, faCar, faLandmark, faCalendarDays, faPerson } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderDiv = styled.div`
    background-color: #003580;
    color: white;
    display: flex;
    justify-content: center;
`
const HeaderContainer = styled.div`
    width: 100%;
    max-width: 1024px;
    position: relative;
    margin: ${props => props.type !== "list" ? "20px 0px 100px 0px" : "20px 0px 0px 0px"};
   
`
const HeaderListItem = styled.div`
    display: flex;
    align-item: center;
    gap: 10px;
    
    &.${props=>props.active} {
        padding: 10px;
        border: 1px solid white;
        border-radius: 20px;
        cursor: pointer;
    }
`
const HeaderTitle = styled.div`

`
const HeaderDesc = styled.div`
    margin: 20px 0px;
`
const HeaderList = styled.div`
    display: flex;
    gap: 40px;
    padding: 20px;
`
const HeaderBtn = styled.button`
    background-color: #0071c2;
    color: white;
    font-weight: 500;
    border: none;
    padding: 10px;
    cursor: pointer
`
const HeaderSearch = styled.div`
    width: 100%;
    height: 30px;
    background-color: white;
    border: 3px solid #febb02;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0px;
    border-radius: 5px;
    position: absolute;
    bottom: -130px;
    max-width: 1024px;
`
const HeaderSearchItem = styled.div`
    display: flex;
    align-item: center;
    gap: 10px;
`
const HeaderSearchInput = styled.input`
    border: none;
    outline: none;
    color: lightgray;
    cursor: pointer;
`
const CalenderInput = styled.div`
    position: absolute;
    top: 60px;
    -webkit-box-shadow: 10px 10px 32px -6px rgba(77,77,53,1);
    -moz-box-shadow: 10px 10px 32px -6px rgba(77,77,53,1);
    box-shadow: 10px 10px 32px -6px rgba(77,77,53,1);
    z-index: 2;
`
const Options = styled.div`
    position: absolute;
    top: 60px;
    background-color: white;
    color: gray;
    border-radius: 5px;
    border: none;
    -webkit-box-shadow: 10px 10px 32px -6px rgba(77,77,53,1);
    -moz-box-shadow: 10px 10px 32px -6px rgba(77,77,53,1);
    box-shadow: 10px 10px 32px -6px rgba(77,77,53,1);
    z-index: 2;
`
const OptionItem = styled.div`
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin: 10px;
    padding: 10px;
`
const OptionText = styled.span`

`
const OptionCounter = styled.div`
    display: flex;
    align-item: center;
    gap: 10px;
    font-size: 12px;
    color: black;
`
const OptionCounterNumber = styled.span``

const OptionCounterButton = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid #0071c2;
    color: #0071c2;
    cursor: pointer;
    background-color: white;
    border-radius: 5px;

    &:disabled {
        cursor: not-allowed;
        border: 1px solid gray;
    }
`


function Header({type}) {
    const [destination, setDestination] = useState("")
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
    ]);
    const [openDate, setOpenDate] = useState(false);
    const [openCounter, setViewCounter] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    // The useNavigate hook returns a function that lets you navigate programmatically,
    const navigate = useNavigate()

    const handleOption = (objName, operation) => {
        setOptions(prevState => {
            return {
                ...prevState,
                //from what i understand now 
                //the [objName] returns the property that we are interested to manipulate
                [objName] : operation === "+" ? options[objName] + 1 : options[objName] - 1
            }
        })
    }

    const handleSearch = () => {
        navigate("/hotels", {state: { destination, date, options }})
    }

    return(
        <HeaderDiv>
        <HeaderContainer>
            <HeaderList>
                <HeaderListItem className="active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stay</span>
                </HeaderListItem>
                <HeaderListItem name="flights">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </HeaderListItem>
                <HeaderListItem name="cars">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rental</span>
                </HeaderListItem>
                <HeaderListItem name="attractions">
                    <FontAwesomeIcon icon={faLandmark} />
                    <span>Attractions</span>
                </HeaderListItem>
                <HeaderListItem name="taxis">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxis</span>
                </HeaderListItem>
            </HeaderList>
            
            {
                type !== "list" && 
                <>
                    <HeaderTitle>
                        <h1>A lifetime of discount? It's Genius.</h1>
                    </HeaderTitle>
                    <HeaderDesc>
                        <p>
                            Get rewarded for your travels unlock instant savings of 10% or more with a free booking account
                        </p>
                    </HeaderDesc>
                    <HeaderBtn>Sign in / Register</HeaderBtn>
                    <HeaderSearch>
                        <HeaderSearchItem>
                            <FontAwesomeIcon icon={faBed} className="headerIcon"/>
                            <HeaderSearchInput type="text" 
                                               placeholder="Where are you going?"
                                               onChange={e=>setDestination(e.target.value)}/>
                        </HeaderSearchItem>
                        <HeaderSearchItem>
                            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                            <HeaderSearchInput type="text" 
                                            placeholder={`${format(date[0].startDate, 'yyyy-MM-dd')} to ${format(date[0].endDate, 'yyyy-MM-dd')}`}
                                            onClick = {()=>{setOpenDate(!openDate)}}/>
                            <CalenderInput>
                                {
                                    // conditional rendering here..
                                    openDate && <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        minDate={new Date()}
                                    />
                                }
                            </CalenderInput>
                        </HeaderSearchItem>
                        <HeaderSearchItem>
                            <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
                            <HeaderSearchInput type="text" 
                                            onClick = {()=>setViewCounter(!openCounter)}
                                            placeholder={`${options.adult} adult . ${options.children} children . ${options.room} room`}/>

                            {
                                openCounter && <Options>
                                    <OptionItem>
                                        <OptionText>Adult</OptionText>
                                        <OptionCounter>
                                            <OptionCounterButton onClick={()=>handleOption("adult", "+")}>+</OptionCounterButton>
                                            <OptionCounterNumber>{options.adult}</OptionCounterNumber>
                                            <OptionCounterButton disabled = {options.adult <= 1} onClick={()=>handleOption("adult", "-")}>-</OptionCounterButton>
                                        </OptionCounter>
                                    </OptionItem>
                                    <OptionItem>
                                        <OptionText>Children</OptionText>
                                        <OptionCounter>
                                            <OptionCounterButton onClick={()=>handleOption("children", "+")}>+</OptionCounterButton>
                                            <OptionCounterNumber>{options.children}</OptionCounterNumber>
                                            <OptionCounterButton disabled = {options.children <= 0} onClick={()=>handleOption("children", "-")}>-</OptionCounterButton>
                                        </OptionCounter>
                                    </OptionItem>
                                    <OptionItem>
                                        <OptionText>Room</OptionText>
                                        <OptionCounter>
                                            <OptionCounterButton onClick={()=>handleOption("room", "+")}>+</OptionCounterButton>
                                            <OptionCounterNumber>{options.room}</OptionCounterNumber>
                                            <OptionCounterButton disabled = {options.room <= 1} onClick={()=>handleOption("room", "-")}>-</OptionCounterButton>
                                        </OptionCounter>
                                    </OptionItem>
                                </Options>
                            }   
                        </HeaderSearchItem>
                        <HeaderSearchItem>
                            <HeaderBtn onClick={handleSearch}>Search</HeaderBtn>
                        </HeaderSearchItem>
                    </HeaderSearch>
                </>
            }
            
            
            
        </HeaderContainer>
        </HeaderDiv>
    );
}

export default Header