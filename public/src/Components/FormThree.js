"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormThree = function (_React$Component) {
  _inherits(FormThree, _React$Component);

  function FormThree(props) {
    _classCallCheck(this, FormThree);

    var _this = _possibleConstructorReturn(this, (FormThree.__proto__ || Object.getPrototypeOf(FormThree)).call(this, props));

    _this.state = {
      ccnum: "",
      expiration: "",
      cvv: "",
      billingZip: ""
    };
    return _this;
  }

  _createClass(FormThree, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.id, e.target.value));
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var cardNum = this.state.cardNum;
      var expiration = this.state.expiration;
      var cvv = this.state.cvv;
      var billingZip = this.state.billingZip;
      this.props.handleStepThree(cardNum, expiration, cvv, billingZip);
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          ccnum = _state.ccnum,
          expiration = _state.expiration,
          cvv = _state.cvv,
          billingZip = _state.billingZip;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Payment"
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
                null,
                "Card Number"
              ),
              React.createElement("input", {
                id: "cardNum",
                type: "number",
                className: "form-control",
                placeholder: "Enter card number",
                onChange: this.handleChange.bind(this)
              })
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                null,
                "Expiration Date"
              ),
              React.createElement("input", {
                id: "expiration",
                className: "form-control",
                type: "number",
                placeholder: "Enter expiration date",
                onChange: this.handleChange.bind(this)
              })
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                null,
                "CVV"
              ),
              React.createElement("input", {
                id: "cvv",
                type: "number",
                className: "form-control",
                placeholder: "Enter cvv",
                onChange: this.handleChange.bind(this)
              })
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                null,
                "Zip Code"
              ),
              React.createElement("input", {
                type: "number",
                id: "billingZip",
                className: "form-control",
                placeholder: "Enter zip code",
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
              "Complete Purchase"
            )
          )
        )
      );
    }
  }]);

  return FormThree;
}(React.Component);

window.FormThree = FormThree;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvQ29tcG9uZW50cy9Gb3JtVGhyZWUuanN4Il0sIm5hbWVzIjpbIkZvcm1UaHJlZSIsInByb3BzIiwic3RhdGUiLCJjY251bSIsImV4cGlyYXRpb24iLCJjdnYiLCJiaWxsaW5nWmlwIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsImNhcmROdW0iLCJoYW5kbGVTdGVwVGhyZWUiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLFM7OztBQUNKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0hBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxhQUFPLEVBREk7QUFFWEMsa0JBQVksRUFGRDtBQUdYQyxXQUFLLEVBSE07QUFJWEMsa0JBQVk7QUFKRCxLQUFiO0FBRmlCO0FBUWxCOzs7O2lDQUVZQyxDLEVBQUc7QUFDZCxXQUFLQyxRQUFMLHFCQUNHRCxFQUFFRSxNQUFGLENBQVNDLEVBRFosRUFDaUJILEVBQUVFLE1BQUYsQ0FBU0UsS0FEMUI7QUFHRDs7O2tDQUVhO0FBQ1osVUFBSUMsVUFBVSxLQUFLVixLQUFMLENBQVdVLE9BQXpCO0FBQ0EsVUFBSVIsYUFBYSxLQUFLRixLQUFMLENBQVdFLFVBQTVCO0FBQ0EsVUFBSUMsTUFBTSxLQUFLSCxLQUFMLENBQVdHLEdBQXJCO0FBQ0EsVUFBSUMsYUFBYSxLQUFLSixLQUFMLENBQVdJLFVBQTVCO0FBQ0EsV0FBS0wsS0FBTCxDQUFXWSxlQUFYLENBQTJCRCxPQUEzQixFQUFvQ1IsVUFBcEMsRUFBZ0RDLEdBQWhELEVBQXFEQyxVQUFyRDtBQUNEOzs7NkJBRVE7QUFBQSxtQkFDd0MsS0FBS0osS0FEN0M7QUFBQSxVQUNDQyxLQURELFVBQ0NBLEtBREQ7QUFBQSxVQUNRQyxVQURSLFVBQ1FBLFVBRFI7QUFBQSxVQUNvQkMsR0FEcEIsVUFDb0JBLEdBRHBCO0FBQUEsVUFDeUJDLFVBRHpCLFVBQ3lCQSxVQUR6Qjs7QUFFUCxhQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFLLFdBQVUsUUFBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsTUFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUNFLG9CQUFHLFNBREw7QUFFRSxzQkFBSyxRQUZQO0FBR0UsMkJBQVUsY0FIWjtBQUlFLDZCQUFZLG1CQUpkO0FBS0UsMEJBQVUsS0FBS1EsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkI7QUFMWjtBQUZGLGFBREY7QUFXRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFDRSxvQkFBRyxZQURMO0FBRUUsMkJBQVUsY0FGWjtBQUdFLHNCQUFLLFFBSFA7QUFJRSw2QkFBWSx1QkFKZDtBQUtFLDBCQUFVLEtBQUtELFlBQUwsQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCO0FBTFo7QUFGRixhQVhGO0FBcUJFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUNFLG9CQUFHLEtBREw7QUFFRSxzQkFBSyxRQUZQO0FBR0UsMkJBQVUsY0FIWjtBQUlFLDZCQUFZLFdBSmQ7QUFLRSwwQkFBVSxLQUFLRCxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QjtBQUxaO0FBRkYsYUFyQkY7QUErQkU7QUFBQTtBQUFBLGdCQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQ0Usc0JBQUssUUFEUDtBQUVFLG9CQUFHLFlBRkw7QUFHRSwyQkFBVSxjQUhaO0FBSUUsNkJBQVksZ0JBSmQ7QUFLRSwwQkFBVSxLQUFLRCxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QjtBQUxaO0FBRkYsYUEvQkY7QUF5Q0U7QUFBQTtBQUFBO0FBQ0Usc0JBQUssUUFEUDtBQUVFLDJCQUFVLGNBRlo7QUFHRSx5QkFBUyxLQUFLQyxXQUFMLENBQWlCRCxJQUFqQixDQUFzQixJQUF0QjtBQUhYO0FBQUE7QUFBQTtBQXpDRjtBQURGO0FBRkYsT0FERjtBQXdERDs7OztFQW5GcUJFLE1BQU1DLFM7O0FBc0Y5QkMsT0FBT25CLFNBQVAsR0FBbUJBLFNBQW5CIiwiZmlsZSI6IkZvcm1UaHJlZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEZvcm1UaHJlZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjY251bTogXCJcIixcbiAgICAgIGV4cGlyYXRpb246IFwiXCIsXG4gICAgICBjdnY6IFwiXCIsXG4gICAgICBiaWxsaW5nWmlwOiBcIlwiXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdmFyIGNhcmROdW0gPSB0aGlzLnN0YXRlLmNhcmROdW07XG4gICAgdmFyIGV4cGlyYXRpb24gPSB0aGlzLnN0YXRlLmV4cGlyYXRpb247XG4gICAgdmFyIGN2diA9IHRoaXMuc3RhdGUuY3Z2O1xuICAgIHZhciBiaWxsaW5nWmlwID0gdGhpcy5zdGF0ZS5iaWxsaW5nWmlwO1xuICAgIHRoaXMucHJvcHMuaGFuZGxlU3RlcFRocmVlKGNhcmROdW0sIGV4cGlyYXRpb24sIGN2diwgYmlsbGluZ1ppcCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBjY251bSwgZXhwaXJhdGlvbiwgY3Z2LCBiaWxsaW5nWmlwIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+UGF5bWVudDwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPkNhcmQgTnVtYmVyPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJjYXJkTnVtXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgY2FyZCBudW1iZXJcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPkV4cGlyYXRpb24gRGF0ZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwiZXhwaXJhdGlvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGV4cGlyYXRpb24gZGF0ZVwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWw+Q1ZWPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJjdnZcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBjdnZcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsPlppcCBDb2RlPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgaWQ9XCJiaWxsaW5nWmlwXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgemlwIGNvZGVcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmtcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENvbXBsZXRlIFB1cmNoYXNlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbndpbmRvdy5Gb3JtVGhyZWUgPSBGb3JtVGhyZWU7Il19