"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormOne = function (_React$Component) {
  _inherits(FormOne, _React$Component);

  function FormOne() {
    _classCallCheck(this, FormOne);

    var _this = _possibleConstructorReturn(this, (FormOne.__proto__ || Object.getPrototypeOf(FormOne)).call(this));

    _this.state = {
      name: "",
      email: "",
      password: ""
    };
    return _this;
  }

  _createClass(FormOne, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.id, e.target.value));
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var name = this.state.name;
      var email = this.state.email;
      var password = this.state.password;
      this.props.handleStepOne(name, email, password);
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          name = _state.name,
          email = _state.email,
          password = _state.password;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "User Information"
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
                { htmlFor: "name" },
                "Name"
              ),
              React.createElement("input", {
                onChange: this.handleChange.bind(this),
                id: "name",
                className: "form-control",
                placeholder: "Enter full name"
              })
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                { htmlFor: "email" },
                "Email address"
              ),
              React.createElement("input", {
                onChange: this.handleChange.bind(this),
                id: "email",
                className: "form-control",
                type: "email",
                placeholder: "Enter email"
              })
            ),
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement(
                "label",
                { htmlFor: "password" },
                "Password"
              ),
              React.createElement("input", {
                onChange: this.handleChange.bind(this),
                type: "password",
                id: "password",
                className: "form-control",
                placeholder: "Enter password"
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

  return FormOne;
}(React.Component);

window.FormOne = FormOne;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvQ29tcG9uZW50cy9Gb3JtT25lLmpzeCJdLCJuYW1lcyI6WyJGb3JtT25lIiwic3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsImlkIiwidmFsdWUiLCJwcm9wcyIsImhhbmRsZVN0ZXBPbmUiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlQ2xpY2siLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLE87OztBQUNKLHFCQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU0sRUFESztBQUVYQyxhQUFPLEVBRkk7QUFHWEMsZ0JBQVU7QUFIQyxLQUFiO0FBRlk7QUFPYjs7OztpQ0FFWUMsQyxFQUFHO0FBQ2QsV0FBS0MsUUFBTCxxQkFDR0QsRUFBRUUsTUFBRixDQUFTQyxFQURaLEVBQ2lCSCxFQUFFRSxNQUFGLENBQVNFLEtBRDFCO0FBR0Q7OztrQ0FFYTtBQUNaLFVBQUlQLE9BQU8sS0FBS0QsS0FBTCxDQUFXQyxJQUF0QjtBQUNBLFVBQUlDLFFBQVEsS0FBS0YsS0FBTCxDQUFXRSxLQUF2QjtBQUNBLFVBQUlDLFdBQVcsS0FBS0gsS0FBTCxDQUFXRyxRQUExQjtBQUNBLFdBQUtNLEtBQUwsQ0FBV0MsYUFBWCxDQUF5QlQsSUFBekIsRUFBK0JDLEtBQS9CLEVBQXNDQyxRQUF0QztBQUNEOzs7NkJBRVE7QUFBQSxtQkFDMkIsS0FBS0gsS0FEaEM7QUFBQSxVQUNDQyxJQURELFVBQ0NBLElBREQ7QUFBQSxVQUNPQyxLQURQLFVBQ09BLEtBRFA7QUFBQSxVQUNjQyxRQURkLFVBQ2NBLFFBRGQ7O0FBRVAsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFFBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLE1BQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFPLFNBQVEsTUFBZjtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQ0UsMEJBQVUsS0FBS1EsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FEWjtBQUVFLG9CQUFHLE1BRkw7QUFHRSwyQkFBVSxjQUhaO0FBSUUsNkJBQVk7QUFKZDtBQUZGLGFBREY7QUFVRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFPLFNBQVEsT0FBZjtBQUFBO0FBQUEsZUFERjtBQUVFO0FBQ0UsMEJBQVUsS0FBS0QsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FEWjtBQUVFLG9CQUFHLE9BRkw7QUFHRSwyQkFBVSxjQUhaO0FBSUUsc0JBQUssT0FKUDtBQUtFLDZCQUFZO0FBTGQ7QUFGRixhQVZGO0FBb0JFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQU8sU0FBUSxVQUFmO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFDRSwwQkFBVSxLQUFLRCxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQURaO0FBRUUsc0JBQUssVUFGUDtBQUdFLG9CQUFHLFVBSEw7QUFJRSwyQkFBVSxjQUpaO0FBS0UsNkJBQVk7QUFMZDtBQUZGLGFBcEJGO0FBOEJFO0FBQUE7QUFBQTtBQUNFLHNCQUFLLFFBRFA7QUFFRSwyQkFBVSxjQUZaO0FBR0UseUJBQVMsS0FBS0MsV0FBTCxDQUFpQkQsSUFBakIsQ0FBc0IsSUFBdEI7QUFIWDtBQUFBO0FBQUE7QUE5QkY7QUFERjtBQUZGLE9BREY7QUE2Q0Q7Ozs7RUF0RW1CRSxNQUFNQyxTOztBQXdFNUJDLE9BQU9qQixPQUFQLEdBQWlCQSxPQUFqQiIsImZpbGUiOiJGb3JtT25lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRm9ybU9uZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6IFwiXCIsXG4gICAgICBlbWFpbDogXCJcIixcbiAgICAgIHBhc3N3b3JkOiBcIlwiXG4gICAgfTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZVxuICAgIH0pO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdmFyIG5hbWUgPSB0aGlzLnN0YXRlLm5hbWU7XG4gICAgdmFyIGVtYWlsID0gdGhpcy5zdGF0ZS5lbWFpbDtcbiAgICB2YXIgcGFzc3dvcmQgPSB0aGlzLnN0YXRlLnBhc3N3b3JkO1xuICAgIHRoaXMucHJvcHMuaGFuZGxlU3RlcE9uZShuYW1lLCBlbWFpbCwgcGFzc3dvcmQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZSwgZW1haWwsIHBhc3N3b3JkIH0gPSB0aGlzLnN0YXRlO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+VXNlciBJbmZvcm1hdGlvbjwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmllbGRzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGZ1bGwgbmFtZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbndpbmRvdy5Gb3JtT25lID0gRm9ybU9uZTsiXX0=