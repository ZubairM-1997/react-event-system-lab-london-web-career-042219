// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {


	inputPassword = () => console.log("Entering password...")


	render() {

		return (
			<div className="keypad" >
				<input type="password" onKeyUp={this.inputPassword}/>
			</div>
		);

	}

}

export default Keypad