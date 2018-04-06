import React, { Component } from 'react';
import logo from './images/spaghet.png';

function Header(props){

	return (
		<header className="App-header">
		{console.log('henlo darkness my old fren')}
		<img src={logo} className="App-logo" alt="logo" />
		<h1 className="App-title">{props.title}</h1>
		</header>
	);
}

export default Header;