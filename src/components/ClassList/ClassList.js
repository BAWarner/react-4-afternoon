import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: []
    }
    
  }
  
  componentDidMount(){
    let classList  = this.props.match.params.class;
    axios
    .get(`http://localhost:3005/students?class=${classList}`)
    .then( res => this.setState({students: res.data}))
    .catch( err => console.log(err) );
  }

  render() {
    let names = this.state.students.map( (student, index) => {
        let studentId = student.id;
        return(
          <Link key={index} to={`/student/${studentId}`}>
            <h3>{student.first_name} {student.last_name}</h3>
          </Link>
          
          )
    } )
    return (
      <div>
        <div className='subnav'>
          <Link to='#' className='subnav_links' onClick={this.props.history.goBack}><h3>Back</h3></Link>
        </div>
        <div className="box">
          <h1>{this.props.match.params.class}</h1>
          <h2>ClassList:</h2>
          {names}

        </div>
      </div>
    )
  }
}