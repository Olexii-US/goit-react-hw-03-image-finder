import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { AppStyles } from './App.styled';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchName: '',
  };

  handleSearchSubmit = searchName => {
    this.setState({ searchName });
  };

  render() {
    return (
      <AppStyles>
        <Searchbar onSearchSubmit={this.handleSearchSubmit} />
        <ToastContainer autoClose={4000} />
        <ImageGallery searchName={this.state.searchName} />
      </AppStyles>
    );
  }
}

export default App;
