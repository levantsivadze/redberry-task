import React from 'react'
import { useState, useEffect } from 'react'
import Pagination from '../Pagination/Pagination'
import classes from './PersonalInfo.module.css'
import useInput from './hooks/use-input'

const rightPanelTitle = `Redberry Origins`
const leftPanelTitle = `Hey, Rocketeer, what are your coordinates?`
const rightPanelDescription = `You watch “What? Where? When?” Yeah. Our founders used to play it. That’s where they got a question about a famous American author and screenwriter Ray Bradbury. Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment, a name for a yet to be born company was inspired - Redberry 😇`

const emailRegex =
	/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const phoneRegex = /\+995\s5[0-9_ ]{8}/

function PersonalInfo() {
	const [pageIsActive, setPageIsActive] = useState(false)

	const {
		value: firstName,
		isValid: firstNameIsValid,
		error: firstNameHasError,
		reset: resetFirstName,
		getStorageHandler: getFirstNameStorage,
		inputChangeHandler: firstNameChangeHandler,
		inputBlurHandler: firstNameBlurHandler
	} = useInput((input) => input.trim() !== '' && input.length > 2, 'firstName')

	const {
		value: lastName,
		isValid: lastNameIsValid,
		error: lastNameHasError,
		reset: resetLastName,
		getStorageHandler: getLastNameStorage,
		inputChangeHandler: lastNameChangeHandler,
		inputBlurHandler: lastNameBlurHandler
	} = useInput((input) => input.trim() !== '' && input.length > 2, 'lastName')

	const {
		value: email,
		isValid: emailIsValid,
		error: emailHasError,
		reset: resetEmail,
		getStorageHandler: getEmailStorage,
		inputChangeHandler: emailChangeHandler,
		inputBlurHandler: emailBlurHandler
	} = useInput((input) => input.trim('').match(emailRegex), 'email')

	const {
		value: phoneNumber,
		isValid: phoneNumberIsValid,
		error: phoneNumberHasError,
		reset: resetPhoneNumber,
		getStorageHandler: getPhoneNumberStorage,
		inputChangeHandler: phoneNumberChangeHandler,
		inputBlurHandler: phoneNumberBlurHandler
	} = useInput(
		(input) => input.match(phoneRegex) || input.trim() === '',
		'phoneNumber'
	)

	const getStorageData = () => {
		getFirstNameStorage()
		getLastNameStorage()
		getEmailStorage()
		getPhoneNumberStorage()
	}
	let formIsValid = false
	if (
		firstNameIsValid &&
		lastNameIsValid &&
		emailIsValid &&
		phoneNumberIsValid
	) {
		formIsValid = true
	}

	const formSubmitHandler = (e) => {
		e.preventDefault()

		firstNameBlurHandler(true)

		if (
			!firstNameIsValid ||
			!lastNameIsValid ||
			!emailIsValid ||
			!phoneNumberIsValid
		) {
			return
		}
	}

	useEffect(() => {
		setPageIsActive(true)
		getStorageData()
	}, [])

	const firstNameClasses = firstNameHasError
		? `${classes.textInput} ${classes.invalid}`
		: `${classes.textInput}`

	const lastNameClasses = lastNameHasError
		? `${classes.textInput} ${classes.invalid}`
		: `${classes.textInput}`

	const emailClasses = emailHasError
		? `${classes.textInput} ${classes.invalid}`
		: `${classes.textInput}`

	const phoneNumberClasses = phoneNumberHasError
		? `${classes.textInput} ${classes.invalid}`
		: `${classes.textInput}`

	return (
		<div className={classes.personalInfo}>
			<div className={classes.leftPanel}>
				<div className={classes.container}>
					<h1>{leftPanelTitle}</h1>
					<form onSubmit={formSubmitHandler} className={classes.inputContainer}>
						<input
							className={firstNameClasses}
							type='text'
							id='firsName'
							placeholder='First Name'
							onBlur={firstNameBlurHandler}
							onChange={firstNameChangeHandler}
							value={firstName}
						/>
						{firstNameHasError && (
							<label className={classes['error-text']}>
								* First name is required & should include 3 or more characters
							</label>
						)}
						<input
							className={lastNameClasses}
							type='text'
							id='lastName'
							placeholder='Last Name'
							onBlur={lastNameBlurHandler}
							onChange={lastNameChangeHandler}
							value={lastName}
							required
						/>
						{lastNameHasError && (
							<label className={classes['error-text']}>
								* Last name should include 3 or more characters
							</label>
						)}
						<input
							className={emailClasses}
							type='text'
							placeholder='E Mail'
							id='email'
							onChange={emailChangeHandler}
							onBlur={emailBlurHandler}
							value={email}
							required
						/>
						{emailHasError && (
							<label className={classes['error-text']}>
								* Please enter a valid email
							</label>
						)}
						<input
							className={phoneNumberClasses}
							type='text'
							placeholder='+995 5__ __ __ __'
							onChange={phoneNumberChangeHandler}
							onBlur={phoneNumberBlurHandler}
							value={phoneNumber}
						/>

						{phoneNumberHasError && (
							<label className={classes['error-text']}>
								* Please enter a phone number with a format of +995 5********
							</label>
						)}

						<div className={classes.pagination}>
							<Pagination pageIsActive={pageIsActive} />
						</div>
					</form>
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
