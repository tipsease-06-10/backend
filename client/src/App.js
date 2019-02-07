import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import stipe from "";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form action="your-server-side-code" method="POST">
            <script
              src="https://checkout.stripe.com/checkout.js"
              class="stripe-button"
              data-key="pk_test_E13kwSNsUK02DnHeVJ82AJ7d"
              data-amount="999"
              data-name="BTMedia"
              data-description="Widget"
              data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
              data-locale="auto"
            />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
