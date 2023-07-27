import "./index.css"
function App() {

  return (
    <main>
      <div className="style-panel">
        <div className="front-img-container">
          <img
            src="./images/bg-card-front.png"
            alt="card-front-img"
            className="card-front-img"
          />
          <div className="img-content">
            <img
              src="./images/card-logo.svg"
              alt="card-front-img"
              className="card-logo"
            />
            <p className="card-number"> 0000 0000 0000 0000</p>
            <div className="footer">
              <p>JANE APPLESEED</p>
              <p>00/00</p>
            </div>
          </div>

        </div>
        <div className="back-img-container">
          <img
            src="./images/bg-card-back.png"
            alt="card-back-img"
            className="card-back-img"
          />
          <p className="cvc">000</p>
        </div>
      </div>
      <div className="form-container">
        <form>
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Jane Appleseed"
          />
          <label htmlFor="cardNumber"> CARD NUMBER</label>
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
          />



          <div className="dateCvcLabel-container">
            <label htmlFor="expiryDate">EXP.DATE (MM/YY)</label>
            <label htmlFor="cvc"> CVC</label>
          </div>

          <div className="dateCvcInput-container">
            <input
              type="text"
              name="expiryMonth"
              id="expiryDate"
              placeholder="MM"
            />
            <input
              type="text"
              name="expiryYear"
              id="expiryDate"
              placeholder="YY"
            />

            <input
              type="text"
              name="cvc"
              id="cvc"
              className="cvc"
              placeholder="e.g. 123"
            />
          </div>

          <button> Confirm</button>
        </form>
      </div>
    </main>
  );
}

export default App;
