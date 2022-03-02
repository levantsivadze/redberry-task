import React from 'react'
import classes from './Pagination.module.css'

import pagArrow from './images/Next.svg'
function Pagination() {
	return (
		<div className={classes.wrapper}>
			<a href='#' className={classes.pagLeft}>
				<img src={pagArrow} alt='' />
			</a>
			<a href='#' className={classes.pagCircle}></a>
			<a href='#' className={classes.pagCircle}></a>
			<a href='#' className={classes.pagCircle}></a>
			<a href='#' className={classes.pagCircle}></a>
			<a href='#' className={classes.pagCircle}></a>
			<a href='#' className={classes.pagRight}>
				<img src={pagArrow} alt='' />
			</a>
		</div>
	)
}

export default Pagination
