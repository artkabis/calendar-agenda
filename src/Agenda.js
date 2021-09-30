import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import event from './dist/events';
import EventWrapper from './EventWrapper';

import 'react-big-calendar/lib/css/react-big-calendar.css';

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

moment.locale('fr');
BigCalendar.momentLocalizer(moment);

const formatHours = (h) => {
  const detectH = String(h).split(':')[0];
  const detectM = String(h).split(':')[1];
  return new Date(2021, 9, 29, detectH, detectM, 0);
};

const formatEndHour = (n) => {
  var num = n;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  rhours = rhours < 10 ? '0' + rhours : rhours;
  var minutes = (hours - rhours) * 60;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var rminutes = Math.round(minutes);
  rminutes = rminutes < 10 ? '0' + rminutes : rminutes;
  console.log('event-' + i, rhours + ':' + rminutes + ':00');
  return rhours + ':' + rminutes + ':00';
};

function replaceEvents($events) {
  return Object.fromEntries(
    Object.entries($events).map(([key, val]) => {
      var r = key === 'start' ? [key, formatHours(val)] : [key, val];
      return r;
    })
  );
}
let nbEvents = event.length;
console.log(nbEvents);
let newEvents = [];

for (var i = 0; i < nbEvents; i++) {
  newEvents[i] = replaceEvents(event[i]);

  console.log(newEvents[i].duration);
  newEvents[i]['durationFormat'] = new Date(
    2021,
    9,
    29,

    formatEndHour(newEvents[i].duration).split(':')[0],
    formatEndHour(newEvents[i].duration).split(':')[1],
    0
  );

  console.log('duration format  : ', newEvents[i]['durationFormat']);
  newEvents[i].end = moment(newEvents[i].start).add(
    moment.duration(
      formatEndHour(newEvents[i].duration).split(':')[0] +
        ':' +
        formatEndHour(newEvents[i].duration).split(':')[1] +
        ':00'
    )
  )._d;
  console.log('end-' + i, '  ', newEvents[i].end);
}
console.log(newEvents);
export default () => (
  <BigCalendar
    components={{
      eventWrapper: EventWrapper,
      // event: Event
    }}
    defaultDate={new Date(2021, 9, 29)}
    defaultView="day"
    events={newEvents}
    views={['week', 'day']}
    format={'DD/MM/YYYY HH:mm'}
  />
);
