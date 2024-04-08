


// events   
var options = {
  series: [28],
  chart: {
  height: 200,
  type: 'radialBar',
},

plotOptions: {
  radialBar: {
    hollow: {
      size: '50%',
    },
    track: {
      background: '#ff0000'
    },
  },
},
labels: ['62%'],
};

var chart = new ApexCharts(document.querySelector("#chartf"), options);
chart.render();
// food
var options = {
  series: [70],
  chart: {
  height: 200,
  type: 'radialBar',
},
plotOptions: {
  radialBar: {
    hollow: {
      size: '50%',
    }
  },
},
labels: ['38%'],
};

var chart = new ApexCharts(document.querySelector("#charte"), options);
chart.render();








// school
var options = {
  series: [{
  name: 'Total Income',
  data: [31, 40, 28, 51, 42, 109, 100, ]
}, {
  name: 'Total Expenses',
  data: [11, 32, 45, 32, 34, 52, 41, ]
}, 
],
  chart: {
  type: 'bar',
  height: '75%',
},
plotOptions: {
  bar: {
    horizontal: false,
    columnWidth: '55%',
    endingShape: 'rounded'
  },
},
grid:{
  show:false,
},
theme: {
  mode: 'dark', 
  palette: 'palette1', 
  monochrome: {
      enabled: false,
      
      color: '#1E33F2',
      shadeTo: 'dark',
      shadeIntensity: 1
  },
},
dataLabels: {
  enabled: false
},
stroke: {
  show: true,
  width: 2,
  colors: ['transparent']
},
xaxis: {
  categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', ],
},
yaxis: {
  title: {
    text: '$ (thousands)'
  }
},

fill: {
  opacity: 1
  
},
tooltip: {
  y: {
    formatter: function (val) {
      return "$ " + val + " thousands"
    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();



// school performance



      
var options = {
  series: [{
  name: 'series1',
  data: [20, 40, 30, 51, 42, 60, 50, ]
}],
  chart: {
  height: '90%',
  type: 'area',
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'smooth',
},
grid:{
  show:false,
},
xaxis: {
 
  categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', ],
  labels: {
    style: {
      colors: '#fff'
    },
  },
 
},
yaxis: {
  labels: {
    style: {
      colors: '#fff'
    },
  },
},
tooltip: {
  x: {
    format: 'name'
  },
},
};
var chart = new ApexCharts(document.querySelector("#chartd"), options);
chart.render();