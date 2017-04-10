import React from 'react'
import {render} from 'react-dom'
import './stylesheets/ui.scss'
import {SkiDayCount} from './components/SkiDayCount'

window.React = React

render(
	<SkiDayCount backcountry={false}/>,
	document.getElementById('react-container')
)

// render (
// 	<SkiDayList days={
// 			[
// 				{
// 					resort: "Squaw Valley",
// 					date: new Date("1/2/2016"),
// 					powder: true,
// 					backcountry: false
// 				},
// 				{
// 					resort: "Arizona Snowbowl",
// 					date: new Date("1/17/2017"),
// 					powder: false,
// 					backcountry: false
// 				},
// 				{
// 					resort: "Elk Ridge Ski Area",
// 					date: new Date("12/29/2016"),
// 					powder: false,
// 					backcountry: true
// 				},
// 			]
// 		}/>,
// 	document.getElementById('react-container')
// )
