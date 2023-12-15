import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
      
      <img src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="searchItemImg" />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from end</span>
        <span className="siAirportTaxi">Free Airport taxi</span>
        <span className="siSubTitle">Studio Apartments with Air conditionings</span>
        <span className="siFeatures">Entire Studio . 1 bathroom 21m . 1 full bed </span>
        <span className="siCancel">Free Cancellation</span>
        <span className="siCancelSubTitle">You can cancel later, so look in this price today.</span>
      </div>
      <div className="siDetail">
        <div className="siRating">
          <span>Exellent</span>
          <button>8.4</button>
        </div>
        <div className="siDetailtxt">
           <span className="siPrice">$321</span>
           <span className="siTxt">Include Taxes and fees</span>
           <button className="siBtn">See Availability</button>
        </div>
      </div>
      
     
      {/* <img src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="searchItemImg" />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from end</span>
        <span className="siAirportTaxi">Free Airport taxi</span>
        <span className="siSubTitle">Studio Apartments with Air conditionings</span>
        <span className="siFeatures">Entire Studio . 1 bathroom 21m . 1 full bed </span>
        <span className="siCancel">Free Cancellation</span>
        <span className="siCancelSubTitle">You can cancel later, so look in this price today.</span>
      </div>
      <div className="siDetail">
        <div className="siRating">
          <span>Exellent</span>
          <button>8.4</button>
        </div>
        <div className="siDetailtxt">
           <span className="siPrice">$321</span>
           <span className="siTxt">Include Taxes and fees</span>
           <button className="siBtn">See Availability</button>
        </div>
      </div> */}
      
    </div>
  )
}

export default SearchItem
