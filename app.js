function countdown_time ( start_time , end_time ) {

  var dt = new Date()

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  let time = monthNames[ dt.getMonth() ] + " " + dt.getDate() + " " + dt.getFullYear()
  // Set the date we're counting down to
  var end_date = new Date(time + ", " + end_time)

  var countDownDate = end_date.getTime()
  // Get today's date and time
  var start_hour = new Date(time + ", " + start_time).getHours()
  var end_hour = end_date.getHours()

  if ( end_hour < start_hour ) {

     return {
      'days' : 0,
      'hours' : 0,
      'minutes' : 0,
      'seconds' : 0,
      'timeout' : false
    }

  }

  var now = new Date().getTime()
  // Find the distance between now and the count down date
  var distance = countDownDate - now
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((distance % (1000 * 60)) / 1000)

  return {
    'days' : parseInt(days) <= 0 ? 0 : days,
    'hours' : parseInt(hours) <= 0 ? 0 : hours,
    'minutes' : parseInt(minutes) <= 0 ? 0 : minutes,
    'seconds' : parseInt(seconds) <= 0 ? 0 : seconds,
    'timeout' : distance < 0
  }
}
