// Code for this SearchForm was taken from a tutorial at teamtreehouse.com
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

class SearchForm extends Component {
  
  state = {
    searchText: ''
  }
  
  onSearchChange = e => {
    this.setState({ searchText: e.target.value });
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.query.value)
    this.props.history.push(`/${this.query.value}`);
    e.currentTarget.reset();
  }
  
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <input type="search" 
               onChange={this.onSearchChange}
               name="search" 
               ref={(input) => this.query = input}
               placeholder="Search..." />
        <button type="submit" id="submit">Click</button>
      </form>      
    );
  }
}

export default withRouter (SearchForm)