 $(function() {
   $
     .getJSON(
       'https://gail.uga.edu/WebApi/Query/6808291e-e67c-44c4-a15a-a6408b236c1b',
       function(data) {
         var schools = {
           record: []
         };
         nonSchoolsArr = ['',
           'Unrestricted',
           'Athletic Ticket Priority', 'GA 4-H', 'Botanical Gardens'
         ];
         //schools.record.push(['amount','name','count']);
         for (var i = 0; i < data.Rows.length; i++) {
           var item = data.Rows[i];
           //console.log(item);
           if (jQuery.inArray(
               item['Values'][1],
               nonSchoolsArr) == -1) {
             schools.record
               .push([
                 item['Values'][1],
                 parseInt(item['Values'][2])
               ]);
           }
         }

         sortedschools = schools['record']
           .sort(function(a, b) {
             //return a.attributes.OBJECTID - b.attributes.OBJECTID;
             //console.log(a[1]);
             if (a[1] == b[1])
               return 0;
             if (a[1] < b[1])
               return 1;
             if (a[1] > b[1])
               return -1;
           });
         //console.log(data.Rows[0]['Values']);
         //console.log(sortedschools);
         $('#schools').highcharts({

           chart: {
             type: 'bar',
             marginLeft: 100,
             inverted: true,
             backgroundColor: 'rgb(0,0,0)',
             spacingLeft: 0
           },

           title: {
             text: 'Donations per School',
             style: {
                  color: '#fff',
                  font: 'bold "Trade Gothic Pro", "Oswald", sans-serif'
              }
           },

           xAxis: {
             type: 'category',
             min: 0,
             max: 8,
             scrollbar: {
               enabled: true
             },
             tickLength: 0,
             style: {
                  color: '#fff',
                  font: 'bold "Merriweather Sans", sans-serif'
              }
           },

           yAxis: {
             title: {
               text: "Donors",
             },
             style: {
                  color: '#fff',
                  font: 'bold "Merriweather Sans", sans-serif'
              }
           },

           tooltip: {
             crosshairs: true,
             shared: true,
           },

           legend: {
             enabled: true
           },

           series: [{
             name: 'Donors',
             data: sortedschools,
             color: '#BA0C2F'

           }]

         });
       });

 });
// *************
 Highcharts
   .getJSON(
     'https://gail.uga.edu/WebApi/Query/b6e11c1e-3b28-4d7a-a503-590fd33eaaf1',
     function(data) {

       /**
        * Data parsed from http://www.bls.gov/lau/#tables
        *
        * 1. Go to http://www.bls.gov/lau/laucntycur14.txt (or similar, updated
        *    datasets)
        * 2. In the Chrome Developer tools console, run this code:
        *    copy(JSON.stringify(document.body.innerHTML.split('\n').filter(function (s) { return s.indexOf('<PUT DATE HERE IN FORMAT e.g. Feb-14>') !== -1; }).map(function (row) { row = row.split('|'); return { code: 'us-' + row[3].trim().slice(-2).toLowerCase() + '-' + row[2].trim(), name: row[3].trim(), value: parseFloat(row[8]) }; })))
        * 3. The data is now on your clipboard, paste it below
        * 4. Verify that the length of the data is reasonable, about 3300
        *    counties.
        */

       var countiesMap = Highcharts
         .geojson(Highcharts.maps['countries/us/us-ga-all']),
         // Extract the line paths from the GeoJSON
         lines = Highcharts
         .geojson(
           Highcharts.maps['countries/us/us-ga-all'],
           'mapline'),
         // Filter out the state borders and separator lines, we want these
         // in separate series
         borderLines = Highcharts
         .grep(
           lines,
           function(l) {
             return l.properties['hc-group'] === '__border_lines__';
           }),
         separatorLines = Highcharts
         .grep(
           lines,
           function(l) {
             return l.properties['hc-group'] === '__separator_lines__';
           });

       // Add state acronym for tooltip
       Highcharts.each(countiesMap, function(
         mapPoint) {
         mapPoint.name = mapPoint.name +
           ', ' +
           mapPoint.properties['hc-key']
           .substr(3, 2);
       });

       document.getElementById('countycontainer').innerHTML = 'Rendering map...';
       console.log(data);

       var counties = [];

       //chapters.record.push(['amount','name','count']);
       for (var i = 0; i < data.Rows.length; i++) {
         var item = data.Rows[i];
         //console.log(item);
         county = {
           name: item['Values'][1],
           value: parseInt(item['Values'][2])
         };
         counties.push(county);
       }
       console.log(counties);
       // Create the map
       setTimeout(
         function() { // Otherwise innerHTML doesn't update
           Highcharts
             .mapChart(
               'countycontainer', {
                 chart: {
                   borderWidth: 0,
                   marginRight: 20
                   // for the legend
                 },

                 title: {
                   text: 'Donors per County',
                   style: {
                        color: '#fff',
                        font: 'bold "Trade Gothic Pro", "Oswald", sans-serif'
                    }
                 },
                 subtitle: {
                   text: '* statistics updated after gifts are processed by gift accounting',
                   style: {
                        color: '#fff',
                        font: 'bold "Merriweather Sans", sans-serif'
                    }
                 },
                //   responsive: {
                //     rules: [{
                //         chartOptions: {
                //             legend: {
                //                 enabled: false
                //             }
                //         },
                //         condition: {
                //             maxWidth: 500
                //         }
                //     }]
                // },

                 legend: {
                   itemStyle: {
                     color: '#fff',
                      font: 'bold "Merriweather Sans", sans-serif'
                   },
                   x: 0,
                    y: 100,
                   layout: 'vertical',
                   align: 'right',
                   verticalAlign: 'center',
                   floating: true,
                   backgroundColor: ( // theme
                       Highcharts.defaultOptions &&
                       Highcharts.defaultOptions.legend && Highcharts.defaultOptions.legend.backgroundColor) ||
                     'rgba(0, 0, 0, 0.85)'
                 },

                 mapNavigation: {
                   enabled: false
                 },

                 chart: {
                    backgroundColor: {
                        linearGradient: [0, 0, 500, 500],
                        stops: [
                            [0, 'rgb(10, 10, 10)'],
                            [1, 'rgb(0, 0, 0)']
                        ]
                    },
                },

                 colorAxis: {
                   min: 0,
                   dataClasses: [{
                     from: 1,
                     to: 5,
                     color: '#efe5db'
                   }, {
                     from: 6,
                     to: 10,
                     color: '#cdc5bc'
                   }, {
                     from: 11,
                     to: 50,
                     color: '#b6afa7'
                   }, , {
                     from: 51,
                     to: 100,
                     color: '#85807a'
                   }, {
                     from: 101,
                     to: 200,
                     color: '#ba0c2f'


                   }, {
                     from: 201,
                     color: '#ef333b'


                   }],
                   /*
                   stops: [

                     [.0002, '#c9c9c9'],
                     [.02, '#808080'],
                     [.04, '#757575'],
                     [
                       .5,
                       '#BA0C2F'
                     ]
                   ],
                   */
                   labels: {
                     format: '{value}'
                   }
                 },

                 plotOptions: {
                   mapline: {
                     showInLegend: false,
                     enableMouseTracking: false
                   }
                 },

                 series: [{
                     mapData: countiesMap,
                     data: counties,
                     joinBy: [
                       'name',
                       'name'
                     ],
                     name: 'Donors',
                     tooltip: {
                       valueSuffix: ' Donors'
                     },
                     borderWidth: 0.5,
                     states: {
                       hover: {
                         color: 'black'
                       }
                     },
                     shadow: false
                   },
                   {
                     type: 'mapline',
                     name: 'State borders',
                     data: borderLines,
                     color: 'white',
                     shadow: false
                   },
                   {
                     type: 'mapline',
                     name: 'Separator',
                     data: separatorLines,
                     color: 'gray',
                     shadow: false
                   }
                 ]
               });
         }, 0);
     });

 $(function() {
   $
     .getJSON(
       'https://gail.uga.edu/WebApi/Query/08e30fad-eb3b-4306-ba42-07343450298e',
       function(data) {
         var chapters = {
           record: []
         };
         nonChaptersArr = ['',
           'Cobb County, GA',
           'South Georgia', 'Forsyth, GA'
         ];
         //chapters.record.push(['amount','name','count']);
         for (var i = 0; i < data.Rows.length; i++) {
           var item = data.Rows[i];
           //console.log(item);
           if (jQuery.inArray(
               item['Values'][1],
               nonChaptersArr) == -1) {
             chapters.record
               .push([
                 item['Values'][1],
                 parseInt(item['Values'][2])
               ]);
           }
         }

         sortedchapters = chapters['record']
           .sort(function(a, b) {
             //return a.attributes.OBJECTID - b.attributes.OBJECTID;
             //console.log(a[1]);
             if (a[1] == b[1])
               return 0;
             if (a[1] < b[1])
               return 1;
             if (a[1] > b[1])
               return -1;
           });
         //console.log(data.Rows[0]['Values']);
         //console.log(sortedchapters);
         $('#chapters').highcharts({

           chart: {
             type: 'bar',
             marginLeft: 100,
             inverted: true,
             backgroundColor: 'rgb(0,0,0)',
             spacingLeft: 0
           },

           title: {
             text: 'Donations per Chapter',
             style: {
                  color: '#fff',
                  font: 'bold "Trade Gothic Pro", "Oswald", sans-serif'
              }
           },

           xAxis: {
             type: 'category',
             min: 0,
             max: 8,
             scrollbar: {
               enabled: true
             },
             tickLength: 0,
             color: '#fff'
           },

           yAxis: {
             title: {
               text: "Count",
               color: '#fff'
             }
           },

           tooltip: {
             crosshairs: true,
             shared: true,
           },

           legend: {
             enabled: true
           },

           series: [{
             name: 'count',
             data: sortedchapters,
             color: '#BA0C2F'

           }]

         });
       });

   google.load('visualization', '1', {
      'packages': ['geochart']
    });

    google.setOnLoadCallback(drawVisualization);

    function drawVisualization(states) {
      $.getJSON('https://gail.uga.edu/WebApi/Query/a4407f69-0f7f-410f-b7ba-aa615ec53134', function(json) {

        var states = [];
        states.push(['State', 'Number of Donors']);
        for (var i = 0; i < json.Rows.length; i++) {
          var item = json.Rows[i];
          //console.log(item);
          state = [item['Values'][1], parseInt(item['Values'][2])];

          states.push(state);
        }



        console.log(states);
        var data = google.visualization.arrayToDataTable(states);

        var opts = {
          region: 'US',

          resolution: 'provinces',

          colors: ['#BA0C2F'],

          backgroundColor: { fill:'transparent' }
        };
        var geochart = new google.visualization.GeoChart(document
          .getElementById('USMAP'));
        geochart.draw(data, opts);
      })
    };

 });
