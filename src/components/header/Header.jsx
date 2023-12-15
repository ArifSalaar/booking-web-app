import "./header.css"
import { faBed, faCalendarDay, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DateRange } from "react-date-range"
import { useState } from "react"
import { format } from "date-fns"

const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const handleOption =(name, operation) =>{
        setOptions(prev=>{return {
            ...prev, [name]:operation === "i" ? options[name] +1 : options[name] -1
    }})
    }

    return (
        <div className="header">
            <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                <div className="headerList">

                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                { type !== "list" &&
                    <>
                <h1 className="headerTitle">A lifetime of discount? Its Genius.</h1>
                <p className="headerDec">Lorem ipsum dolæor sit amet consectetur, adipisicing elit. </p>
                <button className="headerBtn">Sign In / Register</button>

                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text" placeholder="Where are you going.?" className="headerSearchInput" />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
                        <span onClick={() => setOpenDate(!openDate)} className="headerSearchTxt">{
                            `${format(date[0].startDate, "MM/dd/yyyy")} to
                             ${format(date[0].endDate, "MM/dd/yyyy")}
                            `}</span>

                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                        />}

                    </div>

                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span onClick={() =>setOpenOptions(!openOptions)} className="headerSearchTxt">{`
                        ${options.adult} adult 
                        . ${options.children} children
                        . ${options.room} room`}</span>

                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionTxt">Adult</span>
                                <div className="optionCounter">
                                <button disabled = {options.adult <=1} className="optionCounterBtn" onClick={()=>handleOption("adult", "d")}>-</button>
                                <span className="optionCounterNumber">{options.adult}</span>
                                <button className="optionCounterBtn"  onClick={()=>handleOption("adult", "i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionTxt">Children</span>
                                <div className="optionCounter">
                                <button disabled = {options.children <=1} className="optionCounterBtn"  onClick={()=>handleOption("children", "d")}>-</button>
                                <span className="optionCounterNumber">{options.children}</span>
                                <button className="optionCounterBtn"  onClick={()=>handleOption("children", "i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionTxt">Room</span>
                                <div className="optionCounter">
                                <button disabled = {options.room <=1} className="optionCounterBtn"  onClick={()=>handleOption("room", "d")}>-</button>
                                <span className="optionCounterNumber">{options.room}</span>
                                <button className="optionCounterBtn"  onClick={()=>handleOption("room", "i")}>+</button>
                                </div>
                            </div>
                        </div>
}
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn">Search</button>
                    </div>
                </div>
                </>}

            </div>
        </div>
    )
}

export default Header
