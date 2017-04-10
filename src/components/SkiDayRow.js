import Terrain from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
// TODO: what is the prefered convention for spacing. should each by n/l?
export const SkiDayRow = ({resort, date, powder, backcountry}) => (
  <tr>
    <td>
      {date.getMonth() + 1}/{date.getDate()}/
      {date.getFullYear()}
    </td>
    <td>
      {resort}
    </td>
    <td>
      {(powder) ? <SnowFlake/> : null}
    </td>
    <td>
      {(backcountry) ? <Terrain/> : null}
    </td>
  </tr>
)
