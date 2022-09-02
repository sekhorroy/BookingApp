import Header from "../../components/header/header";
import Navbar from "../../components/navbar/navbar";

import styled from "styled-components";
import { DateRange } from 'react-date-range';

import { useLocation } from "react-router-dom";
import { useState } from "react";

import { format } from 'date-fns'
import SearchItem from "../../components/searchitem/searchitem";
//import SearchItem from "../../components/searchitem/searchitem";

const ListContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`
const ListWrapper = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    gap: 20px;
`
const ListSearch = styled.div`
    flex: 1;
    background-color: #febb02;
    border-radius: 10px;
    padding: 20px;
    position: sticky;
    top: 10px;
    height: max-content;
`
const ListResult = styled.div`
    flex: 3;
`
const ListTitle = styled.h1`
    color: #555;
    font-size: 20px;
    margin-bottom: 10px;
`
const ListSearchItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 10px;
`
const ListSearchInputLabel = styled.label`
    font-size: 12px;
`
const ListSearchInput = styled.input`
    height: 30px;
    border: none;
    padding: 5px;
    cursor: pointer;
`
const ListSearchInputSpan = styled.span`
    height: 30px;
    border: none;
    padding: 5px;
    cursor: pointer;
    background-color: white;
    color: gray;
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 12px;
`
const ListSearchOptionItemContainer = styled.div`
    padding: 10px;
`
const ListSearchOptionItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    color: #555;
    font-size: 12px;
`
const ListSearchOptionInput = styled.input`
    width: 75px;
`
const ListSearchOptionTextSpan = styled.span`
`
const ListSearchItemDateItem = styled.div`
    position: absolute;
    -webkit-box-shadow: 10px 10px 32px -6px rgba(77,77,53,1);
    -moz-box-shadow: 10px 10px 32px -6px rgba(77,77,53,1);
    box-shadow: 10px 10px 32px -6px rgba(77,77,53,1);
`

const ListSearchButton = styled.button`
    padding: 10px;
    background-color: #0071c2;
    color: white;
    border: none;
    width: 100%;
    font-weight: 500;
    cursor: pointer;
    border-radius: 5px;
`

function List () {

    // the location.state object carries the destination, date and options when the user fill it in home search page and click Search
    const location = useLocation()
    const [openDate, setOpenDate] = useState(false);
    const [destination, setDestination] = useState(location.state.destination)
    const [date, setDate] = useState(location.state.date)
    const [options, setOption] = useState(location.state.options)

    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <ListContainer>
                <ListWrapper>
                    <ListSearch>
                        <ListTitle>Search</ListTitle>
                        <ListSearchItem>
                            <ListSearchInputLabel>Destination</ListSearchInputLabel>
                            <ListSearchInput type="text" placeholder={`${destination}`}/>
                        </ListSearchItem>
                        <ListSearchItem onClick={()=>setOpenDate(!openDate)}>
                            <ListSearchInputLabel>Check-in date</ListSearchInputLabel>
                            <ListSearchInputSpan>{`${format(date[0].startDate, 'yyyy-MM-dd')} to ${format(date[0].endDate, 'yyyy-MM-dd')}`}</ListSearchInputSpan>
                        </ListSearchItem>
                        
                        {openDate &&
                                    <ListSearchItemDateItem>
                                        <DateRange
                                            editableDateInputs={true}
                                            onChange={(item) => setDate([item.selection])}
                                            moveRangeOnFirstSelection={false}
                                            ranges={date}
                                        />
                                    </ListSearchItemDateItem> 
                                    
                        }
                        <div>
                            <ListSearchOptionItemContainer> 
                                <label >Options</label>
                                <ListSearchOptionItem>
                                    <ListSearchOptionTextSpan>
                                        Min Price <small>per night</small>
                                    </ListSearchOptionTextSpan>
                                    <ListSearchOptionInput type="number"/>
                                </ListSearchOptionItem>
                                <ListSearchOptionItem>
                                    <ListSearchOptionTextSpan>
                                        Max Price <small>per night</small>
                                    </ListSearchOptionTextSpan>
                                    <ListSearchOptionInput type="number"/>
                                </ListSearchOptionItem>
                                <ListSearchOptionItem>
                                    <ListSearchOptionTextSpan>Adult</ListSearchOptionTextSpan>
                                    <ListSearchOptionInput type="number" placeholder={options.adult} min={1}/>
                                </ListSearchOptionItem>
                                <ListSearchOptionItem>
                                    <ListSearchOptionTextSpan>Children</ListSearchOptionTextSpan>
                                    <ListSearchOptionInput type="number" placeholder={options.children} min={0}/>
                                </ListSearchOptionItem>
                                <ListSearchOptionItem>
                                    <ListSearchOptionTextSpan>Room</ListSearchOptionTextSpan>
                                    <ListSearchOptionInput type="number" placeholder={options.children} min={1}/>
                                </ListSearchOptionItem>

                            </ListSearchOptionItemContainer>
                        </div>
                        <ListSearchButton>Search</ListSearchButton>
                    </ListSearch>
                    <ListResult>
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </ListResult>
                </ListWrapper>  
            </ListContainer>
        </div>
    );
}

export default List