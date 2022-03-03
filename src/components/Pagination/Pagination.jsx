import React from 'react'
import classes from './Pagination.module.css'
import { useNavigate } from 'react-router-dom'
import pagArrow from './images/Next.svg'
function Pagination(props) {
	const { pageIsActive } = props
	const navigate = useNavigate()

	const isActive = pageIsActive ? `${classes.isActive}` : ''

	return (
		<div className={classes.wrapper}>
			<a href='#' className={classes.pagLeft} onClick={() => navigate(-1)}>
				<img src={pagArrow} alt='Previous Arrow' />
			</a>

			<a href='1' className={`${classes.pagCircle} ${isActive}`}>
				<span></span>
			</a>

			<a href='2' className={classes.pagCircle}>
				<span></span>
			</a>
			<a href='3' className={classes.pagCircle}>
				<span></span>
			</a>
			<a href='4' className={classes.pagCircle}>
				<span></span>
			</a>
			<a href='5' className={classes.pagCircle}>
				<span></span>
			</a>
			<a href='#' className={classes.pagRight} onClick={() => navigate(+1)}>
				<img src={pagArrow} alt='Next Arrow' />
			</a>
		</div>
	)
}

export default Pagination
