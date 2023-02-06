import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <section className="Login align-items-center">
      <div className="container">
        <div className="row align-center justify-content-center">
          <div className="card col-md-6 col-12">
            <div className="card-body">
              <img src="../Image/CircleConnect.png" alt="..." />
              <h6>Login</h6>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
              />
              <input
                type="text"
                className="form-control"
                placeholder="Password"
              />
              <button className="btn">Login</button>
            </div>
            <p>
              You don't have an account? <a href="">Register</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
