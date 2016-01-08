var width = 91,
    height = 190;

// setup svg
var svg = d3.select("#graph")
    .append("svg")
    .attr({"width": width,
	   "height": height})

var radiate = function (x, y, r, k) {
    d3.range(k).forEach(function (d) {
        svg.append('circle')
            .attr({cx: x,
                   cy: y,
                   r: 0})
            .style('opacity', '1')
            .transition()
            .duration(1000)
            .delay(d*50)
            .attr('r', r / (k - d + 1))
            .style('opacity', '0.00001')
            .remove();
    });
};

var rExp = function(lambda) {
    return -Math.log(1 - Math.random()) * lambda;
}

var radiateRandom = function() {
    var x = Math.random() * width;
    var y = Math.random() * height;
    var r = rExp(10);
    var k = Math.floor(Math.random() * 4) + 1;
    radiate(x, y, r, k)
}

d3.timer(radiateRandom)
