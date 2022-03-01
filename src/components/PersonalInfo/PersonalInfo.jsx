import React from 'react'
import classes from './PersonalInfo.module.css'

const rightPanelTitle = `Redberry Origins`
const rightPanelDescription = `You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇`
function PersonalInfo() {
	return (
		<div className={classes.personalInfo}>
			<div className={classes.leftPanel}></div>
			<div className={classes.rightPanel}>
				<div className={classes.flexContainer}>
					<h1>{rightPanelTitle}</h1>
					<p>{rightPanelDescription}</p>
				</div>
			</div>
		</div>
	)
}

export default PersonalInfo
