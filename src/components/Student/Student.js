import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentInfo: {}
    }

  }

  componentDidMount(){
    let { id } = this.props.match.params;
    axios
    .get(`http://localhost:3005/students/${id}`)
    .then( res => this.setState({studentInfo: res.data}) )
    .catch( err => console.log(err) );
  }

  render() {
    let { first_name, last_name, grade, email } = this.state.studentInfo;
    return (
      <div>
        <div className='subnav'>
          <Link to='#' className='subnav_links' onClick={this.props.history.goBack}><h3>Back</h3></Link>
        </div>
        <div className="box">
          <h1>Student</h1>
          <h1>{ first_name } { last_name }</h1>
          <h3>Grade: { grade }</h3>
          <h3>Email: { email }</h3>
        </div>
      </div>
    )
  }
}