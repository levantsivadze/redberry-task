import React from 'react'
import Pagination from '../Pagination/Pagination'
import classes from './PersonalInfo.module.css'

const rightPanelTitle = `Redberry Origins`
const leftPanelTitle = `Hey, Rocketeer, what are your coordinates?`
const rightPanelDescription = `You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇`
function PersonalInfo() {
	return (
		<div className={classes.personalInfo}>
			<div className={classes.leftPanel}>
				<div className={classes.container}>
					<h1>{leftPanelTitle}</h1>
					<div className={classes.inputContainer}>
						<input
							className={classes.textInput}
							type='text'
							name=''
							placeholder='First Name'
							id={classes.inputFirstName}
						/>
						<input
							className={classes.textInput}
							type='text'
							name=''
							placeholder='Last Name'
							id={classes.inputLastName}
						/>
						<input
							className={classes.textInput}
							type='text'
							placeholder='E Mail'
							name=''
							id={classes.inputEmail}
						/>
						<input
							className={classes.textInput}
							type='text'
							name=''
							placeholder='+995 5__ __ __ __'
							id={classes.inputPhoneNumber}
						/>

						<Pagination />
					</div>
				</div>
			</div>

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
