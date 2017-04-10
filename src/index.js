import React from 'react'
import { render } from 'react-dom'
import './stylesheets/ui.scss'
import { SkiDayList } from './components/SkiDayList'

window.React = React

render (
	<SkiDayList days={
			[
			
			]
		}/>,
	document.getElementById('react-container')
)
