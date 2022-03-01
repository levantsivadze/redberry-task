import React from 'react'
import classes from './LandingPage.module.css'
import rocketman from './images/rocketman.png'

function LandingPage() {
	return (
		<div className={classes.landingPage}>
			<h1>Welcome Rocketeer !</h1>
			<button className={classes.questionnaireButton}>
				Start Questionnaire
			</button>
			<a className={classes.applicationsButton} href='_blank'>
				Submitted Applications
			</a>
			<img className='rocketman-img' src={rocketman} alt='Rocketman' />
		</div>
	)
}

export default LandingPage
