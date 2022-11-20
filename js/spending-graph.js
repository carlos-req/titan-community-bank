var main = document.getElementById('charts');
var reset = document.getElementById('reset');

var spendingData = [
  {category : "Food and Dining", spending : 2005.00, color : "red"},
  {category : "Auto and Transport",spending : 1471.31, color : "blue"},
  {category : "Shopping", spending : 892.86, color : "purple"},
  {category : "Bills and Utilities", spending : 531.60, color : "orange"},
  {category : "Mortgage", spending : 1646.00, color : "green"},
  {category : "Entertainment", spending : 179.52, color : "yellow"}
];

const loadChart = data =>{
  //create container for chart
  var barChart = document.createElement("div");
  
  barChart.style.position = "relative";
  
  // setting up the height for the barChart Cotainer
  var height = 0;
  for(var i = 0; i < data.length; i ++){
    height = Math.max(height, data[i].value);
  };
  barChart.style.height = ((height/10 )+ 10) + "px";
  
  var barPosition = -195;
  
  var barWidth = 35;
  
  for (i = 0; i < data.length; i ++) {
    //Column Setup
    var columnItem = data[i];
    var bar = document.createElement("div");
    bar.id = `${[i]}` + 'chart';
    bar.style.position = "absolute";
    bar.style.left = barPosition + "px";
    bar.style.width = barWidth + "px";
    bar.style.backgroundColor = columnItem.color;
    bar.style.height = (columnItem.spending/ 10) + "px";
    bar.style.borderStyle ="ridge";
    bar.style.borderColor = columnItem.color;
    bar.style.bottom ="0px";
    var text = document.createElement("p");
    text.style.position = "absolute";
    text.style.left = "0px";
    text.style.width = barWidth + "px";
    text.style.bottom ="210px";
    text.innerHTML = `${columnItem.category}`;
    text.style.color = columnItem.color;
    bar.appendChild(text);
    barChart.appendChild(bar);
    barPosition += (barWidth * 2);
    reset.addEventListener("click", ()=>{
      
    })
  };
  return barChart;
};

var chart = loadChart(spendingData);
main.appendChild(chart);
var chart0 = document.getElementById('0chart');
var chart1 = document.getElementById('1chart');
var chart2 = document.getElementById('2chart');
var chart3 = document.getElementById('3chart');
var chart4 = document.getElementById('4chart');
var chart5 = document.getElementById('5chart');

reset.addEventListener("click", ()=>{
  setInterval(()=>{
        chart1.style.height = 0 +'px';
        chart2.style.height = 0 +'px';
        chart3.style.height = 0 +'px';
        chart4.style.height = 0 +'px';
        chart5.style.height = 0 +'px';
     },100);
   });