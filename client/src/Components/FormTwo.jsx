class FormTwo extends React.Component {
  constructor() {
    super();
    this.state = {
      street: "",
      houseNum: "",
      city: "",
      state: "",
      zip: "",
      phone: ""
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleClick() {
    var street = this.state.street;
    var houseNum = this.state.houseNum;
    var city = this.state.city;
    var state = this.state.state;
    var zip = this.state.zip;
    var phone = this.state.phone;

    // console.log(data);
    this.props.handleStepTwo(street, houseNum, city, state, zip, phone);
  }

  render() {
    const { street, houseNum, city, state, zip } = this.state;
    return (
      <div>
        <h1>Address</h1>
        <div className="fields">
          <div className="form">
            <div className="form-group">
              <label htmlFor="street">Street Address</label>
              <input
                id="street"
                className="form-control"
                placeholder="Enter street adress"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="houseNum">Apt/Unit Number</label>
              <input
                id="houseNum"
                className="form-control"
                placeholder="Enter Apt Number"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                id="city"
                className="form-control"
                type="text"
                placeholder="Enter city"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                id="state"
                className="form-control"
                placeholder="Enter state"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="zip">Zip Code</label>
              <input
                type="number"
                id="zip"
                className="form-control"
                placeholder="Enter zip code"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="number"
                id="phone"
                className="form-control"
                placeholder="Enter phone number"
                onChange={this.handleChange.bind(this)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-dark"
              onClick={this.handleClick.bind(this)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

window.FormTwo = FormTwo;