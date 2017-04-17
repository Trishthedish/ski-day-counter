import { Component } from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'
import { AddDayForm } from './AddDayForm'
import { Menu } from './Menu'

export class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        allSkiDays:
        [
    				{ resort: "Squaw Valley",
    					date: new Date("1/2/2016"),
    					powder: true,
    					backcountry: false
    				},
    				{ resort: "Arizona Snowbowl",
    					date: new Date("1/17/2017"),
    					powder: false,
    					backcountry: false
    				},
    				{ resort: "Elk Ridge Ski Area",
    					date: new Date("12/29/2016"),
    					powder: false,
    					backcountry: true
    				}
        ]
      }
}
countDays(filter) {
		const { allSkiDays } = this.state
		return allSkiDays.filter(
			(day) => (filter) ? day[filter] : day).length
	}
	render() {
		return (
			<div className="app">
			<Menu />
			{(this.props.location.pathname === "/") ?
			  <SkiDayCount total={this.countDays()}
							 powder={this.countDays(
							 		"powder"
							 	)}
							 backcountry={this.countDays(
							 		"backcountry"
							 	)}/> :
			 (this.props.location.pathname === "/add-day") ?
			 	<AddDayForm /> :
			 	<SkiDayList days={this.state.allSkiDays}
			 				filter={this.props.params.filter}/>
			}

			</div>
		)
	}
}
