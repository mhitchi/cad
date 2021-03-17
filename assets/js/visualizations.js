google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {
  var startData = [['Area', 'Donations']]
  var data = google.visualization.arrayToDataTable(startData);
  //ajax call
  //push results to data arr
  $.getJSON(
    'https://gail.uga.edu/WebApi/Query/6808291e-e67c-44c4-a15a-a6408b236c1b',
    function(jsonData) {
      //make var schools an obj
      var schools = {
        record: []
      };
      //loop through data
      for (var i = 0; i < jsonData.Rows.length; i++) {
        var item = jsonData.Rows[i];
        schools.record.push([item['Values'][1],
        parseInt(item['Values'][0])]);
        //not pushing
        // console.log(jsonData.Rows[i].Values)
        //console.log(schools.record)
      }
      // for(school in schools.record) {
      //   startData.push(school);
      // };
      schools.record.forEach(school => {
        startData.push(school)
      })
      console.log(startData)
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