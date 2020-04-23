"use strict";

var Done = function Done(props) {
  return React.createElement(
    "div",
    null,
    "    ",
    React.createElement(
      "h1",
      null,
      "Thank you for shopping with us ",
      React.createElement("br", null),
      " ",
      props.user.name
    ),
    React.createElement(
      "div",
      { className: "fields" },
      !props.user ? React.createElement(
        "h4",
        null,
        "Loading..."
      ) : React.createElement(
        "div",
        { className: "form userInfo" },
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "Name"
          ),
          ": ",
          props.user.name
        ),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "Email"
          ),
          ": ",
          props.user.email
        ),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "Password"
          ),
          ":",
          props.password
        ),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "Address"
          ),
          ":",
          props.user.street
        ),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "Apt/Unit Num"
          ),
          ":",
          props.user.houseNum
        ),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "City"
          ),
          ": ",
          props.user.city
        ),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "State"
          ),
          ": ",
          props.user.state
        ),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "Zip code"
          ),
          ":",
          props.user.zip
        ),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "Phone"
          ),
          ": ",
          props.user.phone
        ),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "Card #"
          ),
          ":",
          props.user.cardNum
        ),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "CVV"
          ),
          ": ",
          props.user.cvv
        ),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "Expire"
          ),
          ":",
          props.user.expiration
        ),
        React.createElement(
          "h5",
          null,
          React.createElement(
            "span",
            { className: "badge badge-dark" },
            "Billing Zip code"
          ),
          ":",
          props.user.billingZip
        )
      )
    )
  );
};
window.Done = Done;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9zcmMvQ29tcG9uZW50cy9Eb25lLmpzeCJdLCJuYW1lcyI6WyJEb25lIiwicHJvcHMiLCJ1c2VyIiwibmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJzdHJlZXQiLCJob3VzZU51bSIsImNpdHkiLCJzdGF0ZSIsInppcCIsInBob25lIiwiY2FyZE51bSIsImN2diIsImV4cGlyYXRpb24iLCJiaWxsaW5nWmlwIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLFNBQ1g7QUFBQTtBQUFBO0FBQUE7QUFFRztBQUFBO0FBQUE7QUFBQTtBQUNnQyxxQ0FEaEM7QUFBQTtBQUN3Q0MsWUFBTUMsSUFBTixDQUFXQztBQURuRCxLQUZIO0FBS0U7QUFBQTtBQUFBLFFBQUssV0FBVSxRQUFmO0FBQ0csT0FBQ0YsTUFBTUMsSUFBUCxHQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FERCxHQUdDO0FBQUE7QUFBQSxVQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFNLFdBQVUsa0JBQWhCO0FBQUE7QUFBQSxXQURGO0FBQUE7QUFDbURELGdCQUFNQyxJQUFOLENBQVdDO0FBRDlELFNBREY7QUFJRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBTSxXQUFVLGtCQUFoQjtBQUFBO0FBQUEsV0FERjtBQUFBO0FBQ29ERixnQkFBTUMsSUFBTixDQUFXRTtBQUQvRCxTQUpGO0FBT0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxrQkFBaEI7QUFBQTtBQUFBLFdBREY7QUFBQTtBQUVHSCxnQkFBTUk7QUFGVCxTQVBGO0FBV0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxrQkFBaEI7QUFBQTtBQUFBLFdBREY7QUFBQTtBQUVHSixnQkFBTUMsSUFBTixDQUFXSTtBQUZkLFNBWEY7QUFlRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBTSxXQUFVLGtCQUFoQjtBQUFBO0FBQUEsV0FERjtBQUFBO0FBRUdMLGdCQUFNQyxJQUFOLENBQVdLO0FBRmQsU0FmRjtBQW1CRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBTSxXQUFVLGtCQUFoQjtBQUFBO0FBQUEsV0FERjtBQUFBO0FBQ21ETixnQkFBTUMsSUFBTixDQUFXTTtBQUQ5RCxTQW5CRjtBQXNCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBTSxXQUFVLGtCQUFoQjtBQUFBO0FBQUEsV0FERjtBQUFBO0FBQ29EUCxnQkFBTUMsSUFBTixDQUFXTztBQUQvRCxTQXRCRjtBQXlCRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBTSxXQUFVLGtCQUFoQjtBQUFBO0FBQUEsV0FERjtBQUFBO0FBRUdSLGdCQUFNQyxJQUFOLENBQVdRO0FBRmQsU0F6QkY7QUE2QkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxrQkFBaEI7QUFBQTtBQUFBLFdBREY7QUFBQTtBQUNvRFQsZ0JBQU1DLElBQU4sQ0FBV1M7QUFEL0QsU0E3QkY7QUFnQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxrQkFBaEI7QUFBQTtBQUFBLFdBREY7QUFBQTtBQUVHVixnQkFBTUMsSUFBTixDQUFXVTtBQUZkLFNBaENGO0FBb0NFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFNLFdBQVUsa0JBQWhCO0FBQUE7QUFBQSxXQURGO0FBQUE7QUFDa0RYLGdCQUFNQyxJQUFOLENBQVdXO0FBRDdELFNBcENGO0FBdUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxjQUFNLFdBQVUsa0JBQWhCO0FBQUE7QUFBQSxXQURGO0FBQUE7QUFFR1osZ0JBQU1DLElBQU4sQ0FBV1k7QUFGZCxTQXZDRjtBQTJDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsY0FBTSxXQUFVLGtCQUFoQjtBQUFBO0FBQUEsV0FERjtBQUFBO0FBRUdiLGdCQUFNQyxJQUFOLENBQVdhO0FBRmQ7QUEzQ0Y7QUFKSjtBQUxGLEdBRFc7QUFBQSxDQUFiO0FBOERBQyxPQUFPaEIsSUFBUCxHQUFjQSxJQUFkIiwiZmlsZSI6IkRvbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBEb25lID0gcHJvcHMgPT4gKFxuICA8ZGl2PlxueyAgICAvL2NvbnNvbGUubG9nKHByb3BzKVxufSAgICA8aDE+XG4gICAgICBUaGFuayB5b3UgZm9yIHNob3BwaW5nIHdpdGggdXMgPGJyIC8+IHtwcm9wcy51c2VyLm5hbWV9XG4gICAgPC9oMT5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZpZWxkc1wiPlxuICAgICAgeyFwcm9wcy51c2VyID8gKFxuICAgICAgICA8aDQ+TG9hZGluZy4uLjwvaDQ+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0gdXNlckluZm9cIj5cbiAgICAgICAgICA8aDU+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYXJrXCI+TmFtZTwvc3Bhbj46IHtwcm9wcy51c2VyLm5hbWV9XG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgICA8aDU+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYXJrXCI+RW1haWw8L3NwYW4+OiB7cHJvcHMudXNlci5lbWFpbH1cbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDxoNT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIGJhZGdlLWRhcmtcIj5QYXNzd29yZDwvc3Bhbj46XG4gICAgICAgICAgICB7cHJvcHMucGFzc3dvcmR9XG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgICA8aDU+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYXJrXCI+QWRkcmVzczwvc3Bhbj46XG4gICAgICAgICAgICB7cHJvcHMudXNlci5zdHJlZXR9XG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgICA8aDU+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYXJrXCI+QXB0L1VuaXQgTnVtPC9zcGFuPjpcbiAgICAgICAgICAgIHtwcm9wcy51c2VyLmhvdXNlTnVtfVxuICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgPGg1PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFya1wiPkNpdHk8L3NwYW4+OiB7cHJvcHMudXNlci5jaXR5fVxuICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgPGg1PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFya1wiPlN0YXRlPC9zcGFuPjoge3Byb3BzLnVzZXIuc3RhdGV9XG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgICA8aDU+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYXJrXCI+WmlwIGNvZGU8L3NwYW4+OlxuICAgICAgICAgICAge3Byb3BzLnVzZXIuemlwfVxuICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgPGg1PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFya1wiPlBob25lPC9zcGFuPjoge3Byb3BzLnVzZXIucGhvbmV9XG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgICA8aDU+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYXJrXCI+Q2FyZCAjPC9zcGFuPjpcbiAgICAgICAgICAgIHtwcm9wcy51c2VyLmNhcmROdW19XG4gICAgICAgICAgPC9oNT5cbiAgICAgICAgICA8aDU+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSBiYWRnZS1kYXJrXCI+Q1ZWPC9zcGFuPjoge3Byb3BzLnVzZXIuY3Z2fVxuICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgPGg1PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFya1wiPkV4cGlyZTwvc3Bhbj46XG4gICAgICAgICAgICB7cHJvcHMudXNlci5leHBpcmF0aW9ufVxuICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgPGg1PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgYmFkZ2UtZGFya1wiPkJpbGxpbmcgWmlwIGNvZGU8L3NwYW4+OlxuICAgICAgICAgICAge3Byb3BzLnVzZXIuYmlsbGluZ1ppcH1cbiAgICAgICAgICA8L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcbndpbmRvdy5Eb25lID0gRG9uZTsiXX0=