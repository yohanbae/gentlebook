import React, { Component } from 'react';
import logo from './logo.svg';
import './css/app.css';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
       // selectedKey:-1,
        info:[
        { name: "Yohan", content:"Mauris eget lacus fringilla, congue justo eu, suscipit ligula." },
        { name: "Hanna", content:"Vestibulum vestibulum nisi non mauris malesuada" },
        { name: "Stephanie", content:"Aliquam at tincidunt dui. Suspendisse dapibus euismod sem" },
        { name: "Eugene", content:"Sed vehicula sed metus maximus semper." },
        { name: "Carmen", content:"Fusce maximus porta ipsum ut facilisis" },                               
        { name: "Sophia", content:"In non lorem sed arcu elementum scelerisque vel a odio" },
        { name: "Carmen", content:"Fusce maximus porta ipsum ut facilisis" }
        ]
      };    

      this.handlePost = this.handlePost.bind(this);
      this.handleDelete = this.handleDelete.bind(this);
      this.handleEdit = this.handleEdit.bind(this);
  }

  handlePost(newContent){
      this.setState({
          info: [...this.state.info, newContent]
      });
  }

  handleEdit(index){
    //
  }
  handleDelete(index){
    var array = [...this.state.info]; // make a separate copy of the array
    array.splice(index, 1);
    this.setState({info: array});
  }



  render() {
    return (
      <div className="App">
        <h4>Gentle-Book</h4>
        <div className="user-input">
          <Create_content handlePost={this.handlePost} />
        </div>
        <div className="main-list">
          { this.state.info.reverse().map((contents, index) => {
              return <Mainlist 
                name={contents.name} content = {contents.content}
                key={index} ikey={index}
                handleDelete={ this.handleDelete }
              />
            })
          }

        </div>
      </div>
    );
  }
} // App Compoent Close


class Mainlist extends Component{
  constructor(props){
    super(props);

    this.handleDel = this.handleDel.bind(this);
  }

  handleDel(){
    this.props.handleDelete(this.props.ikey);
  }

  render(){
    return(
      <div className="contentbox">      
        <h6>{this.props.ikey} {this.props.name}</h6>
        <h6>{this.props.content}</h6>
        <button onClick={ this.handleDel }>DEL</button>
        <button>EDIT</button>
      </div>
    )
  }
} // Mainlist Component close


class Create_content extends Component{
  constructor(props){
    super(props);

    this.handlePostD = this.handlePostD.bind(this);
  }

  handlePostD(){
      var newContent = document.getElementById('write-content').value;
      const contentData = {
        name: 'Yohan',
        content: newContent
      }
      this.props.handlePost(contentData);
      document.getElementById('write-content').value = "";

  }

  render(){
    return(
      <div>
        <textarea id="write-content" placeholder="What happened today?"></textarea>
        <button onClick={this.handlePostD}>POST</button>      
      </div>
    )
  }  
}


export default App;
