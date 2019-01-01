import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ScoreButton extends React.Component {
	constructor(props) {
		super(props)
	}
	valueWithSign() {
		if(this.props.value > 0) {
			return "+" + this.props.value
		} else {
			return this.props.value
		}
	}

	render() {
		return (
			<button> { this.valueWithSign() } </button>
		)
	}
}

class PlayerEntry extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<div className = "player-entry">
				<div className = "player-button-box">
					<h2 contenteditable="true">{this.props.playerName}</h2>
					<ul className = "score-list">
						<ScoreButton value = "1" />
						<ScoreButton value = "2" />
						<ScoreButton value = "3" />
						<ScoreButton value = "4" />
						<ScoreButton value = "5" />
						<ScoreButton value = "6" />
					</ul>
					<ul className = "score-list">
						<ScoreButton value = "-1" />
						<ScoreButton value = "-2" />
						<ScoreButton value = "-3" />
					</ul>
				</div>
				<div className = "player-score-box">
					<h3 className = "player-score">10</h3>
				</div>
			</div>
		);
	}
}

class MutererGame extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
      		rounds: 1
      	};
	}

	render() {
		return (
			<div>
				<div>
		  			<PlayerEntry playerName = "Thomas" />
		  			<PlayerEntry playerName = "Kim" />
		  			<PlayerEntry playerName = "Player3" />
		  			<PlayerEntry playerName = "Player4" />
		  		</div>
		  		<div className ="summary-section">
		  			<h3>Round {this.state.rounds} </h3>
		  			<button>End round</button>
		  			<button>Reset</button>
		  		</div>
		  	</div>
  		);
	}
}

// ========================================

ReactDOM.render(
	(
  		<MutererGame />
  	),
  	document.getElementById('root')
);
