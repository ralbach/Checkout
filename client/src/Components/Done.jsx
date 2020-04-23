const Done = props => (
  <div>
{    //console.log(props)
}    <h1>
      Thank you for shopping with us <br /> {props.user.name}
    </h1>
    <div className="fields">
      {!props.user ? (
        <h4>Loading...</h4>
      ) : (
        <div className="form userInfo">
          <h5>
            <span className="badge badge-dark">Name</span>: {props.user.name}
          </h5>
          <h5>
            <span className="badge badge-dark">Email</span>: {props.user.email}
          </h5>
          <h5>
            <span className="badge badge-dark">Password</span>:
            {props.password}
          </h5>
          <h5>
            <span className="badge badge-dark">Address</span>:
            {props.user.street}
          </h5>
          <h5>
            <span className="badge badge-dark">Apt/Unit Num</span>:
            {props.user.houseNum}
          </h5>
          <h5>
            <span className="badge badge-dark">City</span>: {props.user.city}
          </h5>
          <h5>
            <span className="badge badge-dark">State</span>: {props.user.state}
          </h5>
          <h5>
            <span className="badge badge-dark">Zip code</span>:
            {props.user.zip}
          </h5>
          <h5>
            <span className="badge badge-dark">Phone</span>: {props.user.phone}
          </h5>
          <h5>
            <span className="badge badge-dark">Card #</span>:
            {props.user.cardNum}
          </h5>
          <h5>
            <span className="badge badge-dark">CVV</span>: {props.user.cvv}
          </h5>
          <h5>
            <span className="badge badge-dark">Expire</span>:
            {props.user.expiration}
          </h5>
          <h5>
            <span className="badge badge-dark">Billing Zip code</span>:
            {props.user.billingZip}
          </h5>
        </div>
      )}
    </div>
  </div>
);
window.Done = Done;