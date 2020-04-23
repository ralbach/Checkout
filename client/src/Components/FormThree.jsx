class FormThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ccnum: "",
      expiration: "",
      cvv: "",
      billingZip: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleClick() {
    var cardNum = this.state.cardNum;
    var expiration = this.state.expiration;
    var cvv = this.state.cvv;
    var billingZip = this.state.billingZip;
    this.props.handleStepThree(cardNum, expiration, cvv, billingZip);
  }

  render() {
    const { ccnum, expiration, cvv, billingZip } = this.state;
    return (
      <div>
        <h1>Payment</h1>
        <div className="fields">
          <div className="form">
            <div className="form-group">
              <label>Card Number</label>
              <input
                id="cardNum"
                type="number"
                className="form-control"
                placeholder="Enter card number"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label>Expiration Date</label>
              <input
                id="expiration"
                className="form-control"
                type="number"
                placeholder="Enter expiration date"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label>CVV</label>
              <input
                id="cvv"
                type="number"
                className="form-control"
                placeholder="Enter cvv"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label>Zip Code</label>
              <input
                type="number"
                id="billingZip"
                className="form-control"
                placeholder="Enter zip code"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-dark"
              onClick={this.handleClick.bind(this)}
            >
              Complete Purchase
            </button>
          </div>
        </div>
      </div>
    );
  }
}

window.FormThree = FormThree;