import "./list.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import SearchItem from "../../components/searchItem/SearchItem"

const List = () => {
  return (
    <div>
      <Navbar />
      <Header  type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listTitle">Search</h1>
            <div className="lsItem">
            <label> Destination</label><br />
            <input type="text" placeholder="destination" />
            </div>
            <div className="lsItem">
            <label> Check in Date</label><br />
            <input type="text" placeholder="12/04/2023" />
            </div>

            <div className="lsItem">
            <label> Options</label> <br />
            <div className="lsOptionItem">
              <span className="lsoptionTxt">Min price <small>per night</small></span>
              <input type="number" className="lsOptionInput"  />
            </div>
            <div className="lsOptionItem">
              <span className="lsoptionTxt">Max price <small>per night</small></span>
              <input type="number" className="lsOptionInput" />
            </div>
            <div className="lsOptionItem">
              <span className="lsoptionTxt">Adults</span>
              <input type="number" className="lsOptionInput" />
            </div>
            <div className="lsOptionItem">
              <span className="lsoptionTxt">Children</span>
              <input type="number" className="lsOptionInput" />
            </div>
            <div className="lsOptionItem">
              <span className="lsoptionTxt">Room</span>
              <input type="number" className="lsOptionInput" />
            </div>
            </div>

          </div>
          <div className="ListResult" style={{width:"75%"}}>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
