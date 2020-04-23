"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormTwo = function (_React$Component) {
  _inherits(FormTwo, _React$Component);

  function FormTwo() {
    _classCallCheck(this, FormTwo);

    var _this = _possibleConstructorReturn(this, (FormTwo.__proto__ || Object.getPrototypeOf(FormTwo)).call(this));

    _this.state = {
      street: "",
      houseNum: "",
      city: "",
      state: "",
      zip: "",
      phone: ""
    };
    return _this;
  }

  _createClass(FormTwo, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.id, e.target.value));
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var street = this.state.street;
      var houseNum = this.state.houseNum;
      var city = this.state.city;
      var state = this.state.state;
      var zip = this.state.zip;
      var phone = this.state.phone;

      // console.log(data);
      this.props.handleStepTwo(street, houseNum, city, state, zip, phone);
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          street = _state.street,
          houseNum = _state.houseNum,
          city = _state.city,
          state = _state.state,
          zip = _state.zip;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Address"
        ),
        React.createElement(
          "div",
          { className: "fields" },
          React.createElement(
            "div",
            { className: "form" },
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                { htmlFor: "street" },
                "Street Address"
              ),
              React.createElement("input", {
                id: "street",
                className: "form-control",
                placeholder: "Enter street adress",
                onChange: this.handleChange.bind(this)
              })
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                { htmlFor: "houseNum" },
                "Apt/Unit Number"
              ),
              React.createElement("input", {
                id: "houseNum",
                className: "form-control",
                placeholder: "Enter Apt Number",
                onChange: this.handleChange.bind(this)
              })
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                { htmlFor: "city" },
                "City"
              ),
              React.createElement("input", {
                id: "city",
                className: "form-control",
                type: "text",
                placeholder: "Enter city",
                onChange: this.handleChange.bind(this)
              })
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                { htmlFor: "state" },
                "State"
              ),
              React.createElement("input", {
                id: "state",
                className: "form-control",
                placeholder: "Enter state",
                onChange: this.handleChange.bind(this)
              })
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                { htmlFor: "zip" },
                "Zip Code"
              ),
              React.createElement("input", {
                type: "number",
                id: "zip",
                className: "form-control",
                placeholder: "Enter zip code",
                onChange: this.handleChange.bind(this)
              })
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                { htmlFor: "phone" },
                "Phone Number"
              ),
              React.createElement("input", {
                type: "number",
                id: "phone",
                className: "form-control",
                placeholder: "Enter phone number",
                onChange: this.handleChange.bind(this)
              })
            ),
            React.createElement(
              "button",
              {
                type: "submit",
                className: "btn btn-dark",
                onClick: this.handleClick.bind(this)
              },
              "Submit"
            )
          )
        )
      );
    }
  }]);

  return FormTwo;
}(React.Component);

window.FormTwo = FormTwo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvQ29tcG9uZW50cy9Gb3JtVHdvLmpzeCJdLCJuYW1lcyI6WyJGb3JtVHdvIiwic3RhdGUiLCJzdHJlZXQiLCJob3VzZU51bSIsImNpdHkiLCJ6aXAiLCJwaG9uZSIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsImlkIiwidmFsdWUiLCJwcm9wcyIsImhhbmRsZVN0ZXBUd28iLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLE87OztBQUNKLHFCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGNBQVEsRUFERztBQUVYQyxnQkFBVSxFQUZDO0FBR1hDLFlBQU0sRUFISztBQUlYSCxhQUFPLEVBSkk7QUFLWEksV0FBSyxFQUxNO0FBTVhDLGFBQU87QUFOSSxLQUFiO0FBRlk7QUFVYjs7OztpQ0FFWUMsQyxFQUFHO0FBQ2QsV0FBS0MsUUFBTCxxQkFDR0QsRUFBRUUsTUFBRixDQUFTQyxFQURaLEVBQ2lCSCxFQUFFRSxNQUFGLENBQVNFLEtBRDFCO0FBR0Q7OztrQ0FFYTtBQUNaLFVBQUlULFNBQVMsS0FBS0QsS0FBTCxDQUFXQyxNQUF4QjtBQUNBLFVBQUlDLFdBQVcsS0FBS0YsS0FBTCxDQUFXRSxRQUExQjtBQUNBLFVBQUlDLE9BQU8sS0FBS0gsS0FBTCxDQUFXRyxJQUF0QjtBQUNBLFVBQUlILFFBQVEsS0FBS0EsS0FBTCxDQUFXQSxLQUF2QjtBQUNBLFVBQUlJLE1BQU0sS0FBS0osS0FBTCxDQUFXSSxHQUFyQjtBQUNBLFVBQUlDLFFBQVEsS0FBS0wsS0FBTCxDQUFXSyxLQUF2Qjs7QUFFQTtBQUNBLFdBQUtNLEtBQUwsQ0FBV0MsYUFBWCxDQUF5QlgsTUFBekIsRUFBaUNDLFFBQWpDLEVBQTJDQyxJQUEzQyxFQUFpREgsS0FBakQsRUFBd0RJLEdBQXhELEVBQTZEQyxLQUE3RDtBQUNEOzs7NkJBRVE7QUFBQSxtQkFDd0MsS0FBS0wsS0FEN0M7QUFBQSxVQUNDQyxNQURELFVBQ0NBLE1BREQ7QUFBQSxVQUNTQyxRQURULFVBQ1NBLFFBRFQ7QUFBQSxVQUNtQkMsSUFEbkIsVUFDbUJBLElBRG5CO0FBQUEsVUFDeUJILEtBRHpCLFVBQ3lCQSxLQUR6QjtBQUFBLFVBQ2dDSSxHQURoQyxVQUNnQ0EsR0FEaEM7O0FBRVAsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFFBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLE1BQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFPLFNBQVEsUUFBZjtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQ0Usb0JBQUcsUUFETDtBQUVFLDJCQUFVLGNBRlo7QUFHRSw2QkFBWSxxQkFIZDtBQUlFLDBCQUFVLEtBQUtTLFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCO0FBSlo7QUFGRixhQURGO0FBVUU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxrQkFBTyxTQUFRLFVBQWY7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUNFLG9CQUFHLFVBREw7QUFFRSwyQkFBVSxjQUZaO0FBR0UsNkJBQVksa0JBSGQ7QUFJRSwwQkFBVSxLQUFLRCxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QjtBQUpaO0FBRkYsYUFWRjtBQW1CRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFPLFNBQVEsTUFBZjtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQ0Usb0JBQUcsTUFETDtBQUVFLDJCQUFVLGNBRlo7QUFHRSxzQkFBSyxNQUhQO0FBSUUsNkJBQVksWUFKZDtBQUtFLDBCQUFVLEtBQUtELFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCO0FBTFo7QUFGRixhQW5CRjtBQTZCRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFPLFNBQVEsT0FBZjtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQ0Usb0JBQUcsT0FETDtBQUVFLDJCQUFVLGNBRlo7QUFHRSw2QkFBWSxhQUhkO0FBSUUsMEJBQVUsS0FBS0QsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkI7QUFKWjtBQUZGLGFBN0JGO0FBc0NFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQU8sU0FBUSxLQUFmO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFDRSxzQkFBSyxRQURQO0FBRUUsb0JBQUcsS0FGTDtBQUdFLDJCQUFVLGNBSFo7QUFJRSw2QkFBWSxnQkFKZDtBQUtFLDBCQUFVLEtBQUtELFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCO0FBTFo7QUFGRixhQXRDRjtBQWdERTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFPLFNBQVEsT0FBZjtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQ0Usc0JBQUssUUFEUDtBQUVFLG9CQUFHLE9BRkw7QUFHRSwyQkFBVSxjQUhaO0FBSUUsNkJBQVksb0JBSmQ7QUFLRSwwQkFBVSxLQUFLRCxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QjtBQUxaO0FBRkYsYUFoREY7QUEwREU7QUFBQTtBQUFBO0FBQ0Usc0JBQUssUUFEUDtBQUVFLDJCQUFVLGNBRlo7QUFHRSx5QkFBUyxLQUFLQyxXQUFMLENBQWlCRCxJQUFqQixDQUFzQixJQUF0QjtBQUhYO0FBQUE7QUFBQTtBQTFERjtBQURGO0FBRkYsT0FERjtBQXlFRDs7OztFQTFHbUJFLE1BQU1DLFM7O0FBNkc1QkMsT0FBT25CLE9BQVAsR0FBaUJBLE9BQWpCIiwiZmlsZSI6IkZvcm1Ud28uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGb3JtVHdvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RyZWV0OiBcIlwiLFxuICAgICAgaG91c2VOdW06IFwiXCIsXG4gICAgICBjaXR5OiBcIlwiLFxuICAgICAgc3RhdGU6IFwiXCIsXG4gICAgICB6aXA6IFwiXCIsXG4gICAgICBwaG9uZTogXCJcIlxuICAgIH07XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgW2UudGFyZ2V0LmlkXTogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIHZhciBzdHJlZXQgPSB0aGlzLnN0YXRlLnN0cmVldDtcbiAgICB2YXIgaG91c2VOdW0gPSB0aGlzLnN0YXRlLmhvdXNlTnVtO1xuICAgIHZhciBjaXR5ID0gdGhpcy5zdGF0ZS5jaXR5O1xuICAgIHZhciBzdGF0ZSA9IHRoaXMuc3RhdGUuc3RhdGU7XG4gICAgdmFyIHppcCA9IHRoaXMuc3RhdGUuemlwO1xuICAgIHZhciBwaG9uZSA9IHRoaXMuc3RhdGUucGhvbmU7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICB0aGlzLnByb3BzLmhhbmRsZVN0ZXBUd28oc3RyZWV0LCBob3VzZU51bSwgY2l0eSwgc3RhdGUsIHppcCwgcGhvbmUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3RyZWV0LCBob3VzZU51bSwgY2l0eSwgc3RhdGUsIHppcCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgxPkFkZHJlc3M8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3RyZWV0XCI+U3RyZWV0IEFkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cInN0cmVldFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHN0cmVldCBhZHJlc3NcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJob3VzZU51bVwiPkFwdC9Vbml0IE51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwiaG91c2VOdW1cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBBcHQgTnVtYmVyXCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY2l0eVwiPkNpdHk8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cImNpdHlcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgY2l0eVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN0YXRlXCI+U3RhdGU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cInN0YXRlXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgc3RhdGVcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ6aXBcIj5aaXAgQ29kZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIGlkPVwiemlwXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgemlwIGNvZGVcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwaG9uZVwiPlBob25lIE51bWJlcjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIGlkPVwicGhvbmVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBwaG9uZSBudW1iZXJcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmtcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG53aW5kb3cuRm9ybVR3byA9IEZvcm1Ud287Il19