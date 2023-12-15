import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
   <div className="featuredItem">
    <img src="https://plus.unsplash.com/premium_photo-1681628908570-3c95bed77a8e?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="featuredImg" />
    <div className="featuredTitle">
        <h1> London</h1>
        <h2>120 Properties</h2>
    </div>
   </div>
   <div className="featuredItem">
    <img src="https://images.unsplash.com/photo-1699968237129-b8d83b25ecd9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="featuredImg" />
    <div className="featuredTitle">
        <h1> Paris</h1>
        <h2>213 Properties</h2>
    </div>
   </div>
   <div className="featuredItem">
    <img src="https://plus.unsplash.com/premium_photo-1681628908570-3c95bed77a8e?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="featuredImg" />
    <div className="featuredTitle">
        <h1> Dublin</h1>
        <h2>320 Properties</h2>
    </div>
   </div>
    </div>
  )
}

export default Featured
