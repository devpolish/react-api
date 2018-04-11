import React, { Component } from 'react';
import styled from 'styled-components';
const MyButton = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: red;
  color: white;
  border: 2px solid white;
  text-align: center;
`
class Button extends Component {
	render() {
		return(
		  <MyButton>{this.props.text}</MyButton>
		);
	}
}

export default Button;
