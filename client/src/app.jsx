//import React from 'react';

//how can i make these functions dynamically call -> then pass props to my controller


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     checkout: true,
     formOne: false,
     formTwo: false,
     formThree: false,
     complete:false,
     name: "",
     email: "",
     password: "",
     street:"",
     houseNum: "",
     city: "",
     state: "",
     zip: "",
     phone: "",
     cardNum: "",
     expiration: "",
     cvv: "",
     billingZip: "",
     user: {}
    }
    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleStepOne = this.handleStepOne.bind(this);
    this.handleStepTwo = this.handleStepTwo.bind(this);
    this.handleStepThree = this.handleStepThree.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  //handle checkout button isn't working - but no errors logging either
  handleCheckout(){
      this.setState({
        checkout: false,
        formOne: true
      });
    }

    handleStepOne(name, email, password){
      //var obj = Object.assign({}, this.state.allData, name, email, password)
      this.setState({
        //allData: obj,
        name: name,
        email: email,
        password: password,
        formOne: false,
        formTwo: true
      })
    }

    handleStepTwo(street, houseNum, city, state, zip, phone){
      //var obj = Object.assign({}, this.state.allData, street, houseNum, city, state, zip, phone)
      this.setState({
       // allData: obj,
        formTwo: false,
        formThree: true,
        street: street,
        houseNum: houseNum,
        city: city,
        state: state,
        zip: zip,
        phone: phone
      })
    }

    handleStepThree(cardNum, expiration, cvv, billingZip) {
      this.setState({
        //allData: obj,
        cardNum: cardNum,
        expiration: expiration,
        cvv: cvv,
        billingZip: billingZip,
        formThree: false,
        complete: true
        // user: data
      });
      var data = {name: this.state.name,
         email: this.state.email,
         password: this.state.password,
         street: this.state.street,
         houseNum: this.state.houseNum,
         city: this.state.city,
         state: this.state.state,
         zip: this.state.zip,
         phone: this.state.phone,
         cardNum: this.state.cardNum,
         expiration: this.state.expiration,
         cvv: this.state.cvv,
         billingZip: this.state.billingZip};
      this.setState({user: data});
      this.handlePost(data);
    }


    handlePost(data) {
      axios.post('/', data)
      // ({
      //   method: "POST",
      //   url:'/',
      //   data: {data: JSON.stringify(data)},
      //   headers: {
      //     'Content-Type': 'application/json;charset=utf-8',
      //   }
      // })
        .then(() => {
          console.log('successful')
        })
        .catch((err) => console.error(err))

    }





render(){
  const checkOut = (
    <div>
      <h1>Check Out</h1>
      <div className="fields">
        <div className="form">
          <button
            className="btn btn-dark btn-block"
            onClick={this.handleCheckout}
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
  const formOne = <FormOne handleStepOne={this.handleStepOne} handleClick={this.handleClick} />;
  const formTwo = <FormTwo handleStepTwo={this.handleStepTwo} />;
  const formThree = <FormThree handleStepThree={this.handleStepThree} />;
    return (
      <div>
        <div className="wrapper">
            {this.state.checkout ? checkOut : null}
            {this.state.formOne ? formOne : null}
            {this.state.formTwo ? formTwo : null}
            {this.state.formThree ? formThree : null}
            {this.state.complete ? <Done user={this.state.user} /> : null}
          </div>
      </div>

    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));