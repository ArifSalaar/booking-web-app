import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">JoeBooking</span>
        <div className="navItems">
            <button className="navBtn"> Register</button>
            <button className="navBtn"> Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
