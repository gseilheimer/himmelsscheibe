var chart = circularHeatChart();

/* Simple chart */
chart.segmentHeight(15)
    .innerRadius(200)
    .numSegments(39)
    .radialLabels(null)
    .segmentLabels(null)
    .range(["white", "brown"])
    //.margin({top: 20, right: 20, bottom: 20, left: 20})
;

/* An array of objects */
var data = [];
for(var i=0; i<360; i++) {
    //data[i] = {value: i, value: "Segment "+i};
    //data[i] = i;
    data[i] = i;
}

console.log(data);

d3.select('#chart')
    .selectAll('svg')
    .data([data])
    .enter()
    .append('svg')
    .call(chart);

/* Add a mouseover event */
d3.selectAll("#chart path").on('mouseover', function() {
	var dataField = d3.select(this).data()[0];
    d3.select("#info").text("Tag: " + dataField);
});
d3.selectAll("#chart svg").on('mouseout', function() {
    d3.select("#info").text('');	
});
