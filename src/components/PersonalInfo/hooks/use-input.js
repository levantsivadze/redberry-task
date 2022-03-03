import { useState } from 'react'

function useInput(validateInput, storageKey) {
	const [inputValue, setInputValue] = useState('')
	const [isTouched, setIsTouched] = useState(false)

	const inputIsValid = validateInput(inputValue)
	const hasError = !inputIsValid && isTouched

	// save input to localStorage while assigning it to inputValue
	const inputChangeHandler = (e) => {
		setInputValue(e.target.value)
		localStorage.setItem(storageKey, e.target.value)
	}

	// get last input from localStorage and set it as a new one
	const getStorageHandler = () => {
		if (localStorage.getItem(storageKey) !== null) {
			setInputValue(localStorage.getItem(storageKey))
		}
	}

	const inputBlurHandler = (e) => {
		setIsTouched(true)
	}

	const reset = () => {
		setInputValue('')
		setIsTouched(false)
	}

	return {
		value: inputValue,
		isValid: inputIsValid,
		error: hasError,
		reset,
		getStorageHandler,
		inputChangeHandler,
		inputBlurHandler
	}
}

export default useInput
