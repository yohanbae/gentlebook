import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';
import Userinfo from './Userinfo';

class App extends Component {
  state = {
    userinfo:[],
    per: 8,
    page:1,
    totalPages: null,
    hasMore: null
  }

  componentWillMount(){
    this.loadContacts()
  }


  loadContacts = () =>{
    const { per, page, userinfo } = this.state;
    const url = "/users/haha?per="+per+"&page="+page
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(json => this.setState({
        userinfo: [...userinfo, ...json.userinfo],
        hasMore: json.hasMore
      }));    
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }), this.loadContacts)
  }

  render() {
    let button;
    if(this.state.hasMore){
      button = <a onClick={this.loadMore}>Load More</a>;
    }else{
      button="";
    }

    return (
      <div className="App">
        <h1>Users</h1>
        <ul>
          {this.state.userinfo.map(user =>
            <div className="user-list" key={user.id}>
              <Userinfo {...user}></Userinfo>
            </div>
          )}
        </ul>
        {button}
      </div>
    );
  }
}

export default App;
