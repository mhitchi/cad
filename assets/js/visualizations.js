google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
  var data = google.visualization.arrayToDataTable([
    ['Area', 'Donations',],
    ['New York City, NY', 8175000],
    ['Los Angeles, CA', 3792000],
    ['Chicago, IL', 2695000],
    ['Houston, TX', 2099000],
    ['Philadelphia, PA', 1526000]
  ]);

  var options = {
    title: '',
    chartArea: {width: '50%'},
    hAxis: {
      title: 'Amount Raised',
      minValue: 0
    },
    vAxis: {
      title: 'Campus Area'
    }
  };

  var chart = new google.visualization.BarChart(document.getElementById('schoolsChart'));

  chart.draw(data, options);
}