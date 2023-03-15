import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
	return (
		<div class="background">
			<div class="title">
				<div class="titleh1">
					<h1>It's time to play</h1>
				</div>
				<Link to="/home">
					<button class="title" type="submit">
						ENTER
					</button>
				</Link>
			</div>
		</div>
	);
}
