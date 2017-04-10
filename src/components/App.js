import { createClass } from 'react'
import { SkiDayList } from './SkiDayList'
import { SkiDayCount } from './SkiDayCount'

export const App = createClass({
getInitialState() {
  return {
    allSkiDays: [
				{
					resort: "Squaw Valley",
					date: new Date("1/2/2016"),
					powder: true,
					backcountry: false
				},
				{
					resort: "Arizona Snowbowl",
					date: new Date("1/17/2017"),
					powder: false,
					backcountry: false
				},
				{
					resort: "Elk Ridge Ski Area",
					date: new Date("12/29/2016"),
					powder: false,
					backcountry: true
				}
    ]
  }
},
countDays(filter) {
  return this.state.allSkiDays.filter(function(day) {
      if(filter) {
        return day[filter]
      } else {
          return day
      }
  }).length
},

  render() {
    return (
      <div className="app">
        <SkiDayList days={this.state.allSkiDays}/>
        <SkiDayCount total={this.countDays()}
                     powder={this.countDays("powder")}
                     backcountry={this.countDays("backcountry")}
          />
      </div>
    );
  }

});
