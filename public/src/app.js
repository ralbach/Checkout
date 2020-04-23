"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import React from 'react';

//how can i make these functions dynamically call -> then pass props to my controller


var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      checkout: true,
      formOne: false,
      formTwo: false,
      formThree: false,
      complete: false,
      name: "",
      email: "",
      password: "",
      street: "",
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
    };
    _this.handleCheckout = _this.handleCheckout.bind(_this);
    _this.handleStepOne = _this.handleStepOne.bind(_this);
    _this.handleStepTwo = _this.handleStepTwo.bind(_this);
    _this.handleStepThree = _this.handleStepThree.bind(_this);
    _this.handlePost = _this.handlePost.bind(_this);
    return _this;
  }

  //handle checkout button isn't working - but no errors logging either


  _createClass(App, [{
    key: "handleCheckout",
    value: function handleCheckout() {
      this.setState({
        checkout: false,
        formOne: true
      });
    }
  }, {
    key: "handleStepOne",
    value: function handleStepOne(name, email, password) {
      //var obj = Object.assign({}, this.state.allData, name, email, password)
      this.setState({
        //allData: obj,
        name: name,
        email: email,
        password: password,
        formOne: false,
        formTwo: true
      });
    }
  }, {
    key: "handleStepTwo",
    value: function handleStepTwo(street, houseNum, city, state, zip, phone) {
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
      });
    }
  }, {
    key: "handleStepThree",
    value: function handleStepThree(cardNum, expiration, cvv, billingZip) {
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
      var data = { name: this.state.name,
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
        billingZip: this.state.billingZip };
      this.setState({ user: data });
      this.handlePost(data);
    }
  }, {
    key: "handlePost",
    value: function handlePost(data) {
      axios.post('/', data)
      // ({
      //   method: "POST",
      //   url:'/',
      //   data: {data: JSON.stringify(data)},
      //   headers: {
      //     'Content-Type': 'application/json;charset=utf-8',
      //   }
      // })
      .then(function () {
        console.log('successful');
      }).catch(function (err) {
        return console.error(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var checkOut = React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Check Out"
        ),
        React.createElement(
          "div",
          { className: "fields" },
          React.createElement(
            "div",
            { className: "form" },
            React.createElement(
              "button",
              {
                className: "btn btn-dark btn-block",
                onClick: this.handleCheckout
              },
              "Check Out"
            )
          )
        )
      );
      var formOne = React.createElement(FormOne, { handleStepOne: this.handleStepOne, handleClick: this.handleClick });
      var formTwo = React.createElement(FormTwo, { handleStepTwo: this.handleStepTwo });
      var formThree = React.createElement(FormThree, { handleStepThree: this.handleStepThree });
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          { className: "wrapper" },
          this.state.checkout ? checkOut : null,
          this.state.formOne ? formOne : null,
          this.state.formTwo ? formTwo : null,
          this.state.formThree ? formThree : null,
          this.state.complete ? React.createElement(Done, { user: this.state.user }) : null
        )
      );
    }
  }]);

  return App;
}(React.Component);

;

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9zcmMvYXBwLmpzeCJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiY2hlY2tvdXQiLCJmb3JtT25lIiwiZm9ybVR3byIsImZvcm1UaHJlZSIsImNvbXBsZXRlIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJzdHJlZXQiLCJob3VzZU51bSIsImNpdHkiLCJ6aXAiLCJwaG9uZSIsImNhcmROdW0iLCJleHBpcmF0aW9uIiwiY3Z2IiwiYmlsbGluZ1ppcCIsInVzZXIiLCJoYW5kbGVDaGVja291dCIsImJpbmQiLCJoYW5kbGVTdGVwT25lIiwiaGFuZGxlU3RlcFR3byIsImhhbmRsZVN0ZXBUaHJlZSIsImhhbmRsZVBvc3QiLCJzZXRTdGF0ZSIsImRhdGEiLCJheGlvcyIsInBvc3QiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwiZXJyb3IiLCJjaGVja091dCIsImhhbmRsZUNsaWNrIiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7O0lBR01BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQSwwR0FDVkEsS0FEVTs7QUFFaEIsVUFBS0MsS0FBTCxHQUFhO0FBQ1pDLGdCQUFVLElBREU7QUFFWkMsZUFBUyxLQUZHO0FBR1pDLGVBQVMsS0FIRztBQUlaQyxpQkFBVyxLQUpDO0FBS1pDLGdCQUFTLEtBTEc7QUFNWkMsWUFBTSxFQU5NO0FBT1pDLGFBQU8sRUFQSztBQVFaQyxnQkFBVSxFQVJFO0FBU1pDLGNBQU8sRUFUSztBQVVaQyxnQkFBVSxFQVZFO0FBV1pDLFlBQU0sRUFYTTtBQVlaWCxhQUFPLEVBWks7QUFhWlksV0FBSyxFQWJPO0FBY1pDLGFBQU8sRUFkSztBQWVaQyxlQUFTLEVBZkc7QUFnQlpDLGtCQUFZLEVBaEJBO0FBaUJaQyxXQUFL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IGZyb20gJ3JlYWN0JztcblxuLy9ob3cgY2FuIGkgbWFrZSB0aGVzZSBmdW5jdGlvbnMgZHluYW1pY2FsbHkgY2FsbCAtPiB0aGVuIHBhc3MgcHJvcHMgdG8gbXkgY29udHJvbGxlclxuXG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICBjaGVja291dDogdHJ1ZSxcbiAgICAgZm9ybU9uZTogZmFsc2UsXG4gICAgIGZvcm1Ud286IGZhbHNlLFxuICAgICBmb3JtVGhyZWU6IGZhbHNlLFxuICAgICBjb21wbGV0ZTpmYWxzZSxcbiAgICAgbmFtZTogXCJcIixcbiAgICAgZW1haWw6IFwiXCIsXG4gICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgICBzdHJlZXQ6XCJcIixcbiAgICAgaG91c2VOdW06IFwiXCIsXG4gICAgIGNpdHk6IFwiXCIsXG4gICAgIHN0YXRlOiBcIlwiLFxuICAgICB6aXA6IFwiXCIsXG4gICAgIHBob25lOiBcIlwiLFxuICAgICBjYXJkTnVtOiBcIlwiLFxuICAgICBleHBpcmF0aW9uOiBcIlwiLFxuICAgICBjdnY6IFwiXCIsXG4gICAgIGJpbGxpbmdaaXA6IFwiXCIsXG4gICAgIHVzZXI6IHt9XG4gICAgfVxuICAgIHRoaXMuaGFuZGxlQ2hlY2tvdXQgPSB0aGlzLmhhbmRsZUNoZWNrb3V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdGVwT25lID0gdGhpcy5oYW5kbGVTdGVwT25lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdGVwVHdvID0gdGhpcy5oYW5kbGVTdGVwVHdvLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdGVwVGhyZWUgPSB0aGlzLmhhbmRsZVN0ZXBUaHJlZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlUG9zdCA9IHRoaXMuaGFuZGxlUG9zdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLy9oYW5kbGUgY2hlY2tvdXQgYnV0dG9uIGlzbid0IHdvcmtpbmcgLSBidXQgbm8gZXJyb3JzIGxvZ2dpbmcgZWl0aGVyXG4gIGhhbmRsZUNoZWNrb3V0KCl7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY2hlY2tvdXQ6IGZhbHNlLFxuICAgICAgICBmb3JtT25lOiB0cnVlXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVTdGVwT25lKG5hbWUsIGVtYWlsLCBwYXNzd29yZCl7XG4gICAgICAvL3ZhciBvYmogPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLmFsbERhdGEsIG5hbWUsIGVtYWlsLCBwYXNzd29yZClcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAvL2FsbERhdGE6IG9iaixcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXG4gICAgICAgIGZvcm1PbmU6IGZhbHNlLFxuICAgICAgICBmb3JtVHdvOiB0cnVlXG4gICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVN0ZXBUd28oc3RyZWV0LCBob3VzZU51bSwgY2l0eSwgc3RhdGUsIHppcCwgcGhvbmUpe1xuICAgICAgLy92YXIgb2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZS5hbGxEYXRhLCBzdHJlZXQsIGhvdXNlTnVtLCBjaXR5LCBzdGF0ZSwgemlwLCBwaG9uZSlcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgIC8vIGFsbERhdGE6IG9iaixcbiAgICAgICAgZm9ybVR3bzogZmFsc2UsXG4gICAgICAgIGZvcm1UaHJlZTogdHJ1ZSxcbiAgICAgICAgc3RyZWV0OiBzdHJlZXQsXG4gICAgICAgIGhvdXNlTnVtOiBob3VzZU51bSxcbiAgICAgICAgY2l0eTogY2l0eSxcbiAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICB6aXA6IHppcCxcbiAgICAgICAgcGhvbmU6IHBob25lXG4gICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZVN0ZXBUaHJlZShjYXJkTnVtLCBleHBpcmF0aW9uLCBjdnYsIGJpbGxpbmdaaXApIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAvL2FsbERhdGE6IG9iaixcbiAgICAgICAgY2FyZE51bTogY2FyZE51bSxcbiAgICAgICAgZXhwaXJhdGlvbjogZXhwaXJhdGlvbixcbiAgICAgICAgY3Z2OiBjdnYsXG4gICAgICAgIGJpbGxpbmdaaXA6IGJpbGxpbmdaaXAsXG4gICAgICAgIGZvcm1UaHJlZTogZmFsc2UsXG4gICAgICAgIGNvbXBsZXRlOiB0cnVlXG4gICAgICAgIC8vIHVzZXI6IGRhdGFcbiAgICAgIH0pO1xuICAgICAgdmFyIGRhdGEgPSB7bmFtZTogdGhpcy5zdGF0ZS5uYW1lLFxuICAgICAgICAgZW1haWw6IHRoaXMuc3RhdGUuZW1haWwsXG4gICAgICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZCxcbiAgICAgICAgIHN0cmVldDogdGhpcy5zdGF0ZS5zdHJlZXQsXG4gICAgICAgICBob3VzZU51bTogdGhpcy5zdGF0ZS5ob3VzZU51bSxcbiAgICAgICAgIGNpdHk6IHRoaXMuc3RhdGUuY2l0eSxcbiAgICAgICAgIHN0YXRlOiB0aGlzLnN0YXRlLnN0YXRlLFxuICAgICAgICAgemlwOiB0aGlzLnN0YXRlLnppcCxcbiAgICAgICAgIHBob25lOiB0aGlzLnN0YXRlLnBob25lLFxuICAgICAgICAgY2FyZE51bTogdGhpcy5zdGF0ZS5jYXJkTnVtLFxuICAgICAgICAgZXhwaXJhdGlvbjogdGhpcy5zdGF0ZS5leHBpcmF0aW9uLFxuICAgICAgICAgY3Z2OiB0aGlzLnN0YXRlLmN2dixcbiAgICAgICAgIGJpbGxpbmdaaXA6IHRoaXMuc3RhdGUuYmlsbGluZ1ppcH07XG4gICAgICB0aGlzLnNldFN0YXRlKHt1c2VyOiBkYXRhfSk7XG4gICAgICB0aGlzLmhhbmRsZVBvc3QoZGF0YSk7XG4gICAgfVxuXG5cbiAgICBoYW5kbGVQb3N0KGRhdGEpIHtcbiAgICAgIGF4aW9zLnBvc3QoJy8nLCBkYXRhKVxuICAgICAgLy8gKHtcbiAgICAgIC8vICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIC8vICAgdXJsOicvJyxcbiAgICAgIC8vICAgZGF0YToge2RhdGE6IEpTT04uc3RyaW5naWZ5KGRhdGEpfSxcbiAgICAgIC8vICAgaGVhZGVyczoge1xuICAgICAgLy8gICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04JyxcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzZnVsJylcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcblxuICAgIH1cblxuXG5cblxuXG5yZW5kZXIoKXtcbiAgY29uc3QgY2hlY2tPdXQgPSAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5DaGVjayBPdXQ8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWVsZHNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNoZWNrb3V0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIENoZWNrIE91dFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xuICBjb25zdCBmb3JtT25lID0gPEZvcm1PbmUgaGFuZGxlU3RlcE9uZT17dGhpcy5oYW5kbGVTdGVwT25lfSBoYW5kbGVDbGljaz17dGhpcy5oYW5kbGVDbGlja30gLz47XG4gIGNvbnN0IGZvcm1Ud28gPSA8Rm9ybVR3byBoYW5kbGVTdGVwVHdvPXt0aGlzLmhhbmRsZVN0ZXBUd299IC8+O1xuICBjb25zdCBmb3JtVGhyZWUgPSA8Rm9ybVRocmVlIGhhbmRsZVN0ZXBUaHJlZT17dGhpcy5oYW5kbGVTdGVwVGhyZWV9IC8+O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZXJcIj5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNoZWNrb3V0ID8gY2hlY2tPdXQgOiBudWxsfVxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZm9ybU9uZSA/IGZvcm1PbmUgOiBudWxsfVxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZm9ybVR3byA/IGZvcm1Ud28gOiBudWxsfVxuICAgICAgICAgICAge3RoaXMuc3RhdGUuZm9ybVRocmVlID8gZm9ybVRocmVlIDogbnVsbH1cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmNvbXBsZXRlID8gPERvbmUgdXNlcj17dGhpcy5zdGF0ZS51c2VyfSAvPiA6IG51bGx9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cbn07XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpOyJdfQ==