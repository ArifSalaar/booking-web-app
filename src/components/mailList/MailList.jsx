import "./mailList.css"

const MailList = () => {
  return (
    <div className="mail">
    <h1 className="mailTitle">Save time, Save Money</h1>
    <span className="mailDec"> Sign up and we will send you Feedback..!!</span>
    <div className="mailContainer">
        <input type="text" placeholder="Enter your Mail" />
        <button>Subscribe</button>
    </div>
    </div>
  )
}

export default MailList
