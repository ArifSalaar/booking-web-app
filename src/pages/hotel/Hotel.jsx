import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Header from "../../components/header/Header"
import Navbar from "../../components/navbar/Navbar"
import "./hotel.css"
import { faLocation, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"

const Hotel = () => {
  const photos=[{
    src: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
    {
    src: "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    src: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

    {
      src: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },

    {
      src: "https://plus.unsplash.com/premium_photo-1676968002512-3eac82b1d847?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1380&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotalContainer">
        <div className="hotalWrapper">

          <button className="reserveBtn">Reserve or Book Now</button>

          <h1 className="hotalTitle">Grand Hotal</h1>
          <div className="hotalAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 432 Australia</span>
          </div>
          <span className="hotalDistance"> Great loacation - 500M from Center </span>
          <span className="hotalPriceHL">Book a stay over $231 property and get a free airport taxi</span>
          <div className="hotalImages">
          {photos.map(photo=>(
            <div className="hotalImgWrapper">
              <img src={photo.src} alt="" className="hotalImg" />
            </div>
          ))}
          </div>
          <div className="hotalDetails">
            <div className="hotalDetailsTxt">
              <h1 className="hotalTitle">Stay in the heart of Milboran</h1>
              <p className="hotalDec">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore quasi cum dicta, ratione sed fugit veniam eos natus vero. In veniam eveniet distinctio alias nisi at odio minus id cupiditate.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore quasi cum dicta, ratione sed fugit veniam eos natus vero. In veniam eveniet distinctio alias nisi at odio minus id cupiditate.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore quasi cum dicta, ratione sed fugit veniam eos natus vero. In veniam eveniet distinctio alias nisi at odio minus id cupiditate.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore quasi cum dicta, ratione sed fugit veniam eos natus vero. In veniam eveniet distinctio alias nisi at odio minus id cupiditate.</p>
            </div>
            <div className="hotalDetailsPrice">
              <h1>Perfect for a 9 night Stay</h1>
              <span> Locates in the nearest Heart of Krakro. This property has excellent location by 8.7.
                
              </span>
              <h2><b>$985</b> (9 Nights)</h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Hotel
