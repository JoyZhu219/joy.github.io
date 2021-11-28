//console.log(dayjs());

//Day.js is a minimalist JavaScript library that parses, validates, manipulates, and displays dates and times for modern browsers with a largely Moment.js-compatible API.
//Web: https://day.js.org/en/

const events=document.querySelectorAll('.event');
//console.log(events)//

events.forEach(event => {
  //console.log(event)//
  const date = dayjs(event.dataset.date).format('MMM, ddd D. h:mm:ss A');
  const dateElement = event.querySelector('.date');
  dateElement.innerText = date;
})
