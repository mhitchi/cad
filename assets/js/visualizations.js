google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
  var data = google.visualization.arrayToDataTable([
    ['Area', 'Donations',]
  ]);
  //ajax call
  //push results to data arr
  $.getJSON(
    'https://gail.uga.edu/WebApi/Query/6808291e-e67c-44c4-a15a-a6408b236c1b',
    function(data) {
      //make var schools an obj
      var schools = {
        record: []
      };
      //loop through data
      console.log(data)
    }
  )


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