import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import "./ContactData.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price, //In real app calculate the price in server so it cannot be modified by user
      customer: {
        //test data
        name: "Pyry Kanerva",
        address: {
          street: "mystreet 1",
          zipCode: "12345",
          country: "Finland"
        },
        email: "test@test.fi"
      },
      deliveryMethod: "cheapest"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input
          className="Input"
          type="text"
          name="name"
          placeholder="Your name"
        />
        <input
          className="Input"
          type="email"
          name="email"
          placeholder="Your email"
        />
        <input
          className="Input"
          type="text"
          name="street"
          placeholder="Street"
        />
        <input
          className="Input"
          type="text"
          name="posta"
          placeholder="Postal code"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="ContactData">
        <h4>Enter your contact info</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
