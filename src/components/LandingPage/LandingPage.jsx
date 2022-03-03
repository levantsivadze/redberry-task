import React from 'react'
import { useNavigate } from 'react-router-dom'
import classes from './LandingPage.module.css'
import rocketman from './images/rocketman.png'

function LandingPage() {
	let navigate = useNavigate()

	const questionnaireHandler = () => {
		navigate(`1`)
	}

	return (
		<div className={classes.landingPage}>
			<h1>Welcome Rocketeer !</h1>
			<button
				className={classes.questionnaireButton}
				onClick={questionnaireHandler}>
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
