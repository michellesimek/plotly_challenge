// check to ensure data is uploading correctly
// function handleData(data) {
//     console.log(data.names)
// };

// function handleError(data) {
//     console.log("opps, mistake!", bad)
// };

// d3.json("/data/samples.json").then(handleData).catch(handleError);
// -------------------------------------------------------------------------------------------------------
// Step 1: Plotly
// initialize the page with default data
function init() {
    // read in samples.json
    d3.json("/data/samples.json").then((data) => {
    // assign variable for names data
    let elements = data.names;
    // loop through each num and append each num to the dropdown menu
    elements.forEach(function(elt) {
        let dropdownMenu = d3.selectAll("#selDataset")
            .append("option")
            .text(elt)
            .property("value", elt);
        // console.log elt to ensure data is pulling correctly
        console.log(elt);
        })
    })
};

// Call updateMetaData() when a change takes place to the DOM
d3.selectAll("#selDataset").on("change", updateMetaData);

// function to update data depending on selection from dropdown
function updateMetaData() {
    // read in samples.json
    d3.json("/data/samples.json").then((data) => {
    
    // create variable for dropdown
    let dropdownMenu = d3.select("#selDataset");
    // create variable for selection in dropdown Menu
    let dataSelection = dropdownMenu.property("value");
    // create variable for metadata from dataset
    let metaData = data.metadata;
    // console.log dataSelection to see what was selected 
    console.log(dataSelection);
    // console.log(metaData);
    
    // filter data
    let filteredData = metaData.filter(data => data.id == dataSelection);
    console.log(filteredData);

    // using filteredData, find the demographic componenets
    let numID = filteredData.map(element => element.id);
    let ethnicity = filteredData.map(element => element.ethnicity);
    let gender = filteredData.map(element => element.gender);
    let age = filteredData.map(element => element.age);
    let location = filteredData.map(element => element.location);
    let bbtype = filteredData.map(element => element.bbtype);
    let wfreq = filteredData.map(element => element.wfreq);
    console.log(numID);
    console.log(ethnicity);
    console.log(gender);
    console.log(age);
    console.log(location);
    console.log(bbtype);
    console.log(wfreq);

    // call buildplots function to update
    buildTable(numID, ethnicity, gender, age, location, bbtype, wfreq);
    buildBarChart(numID, ethnicity, gender, age, location, bbtype, wfreq);
    buildBubbleChart(numID, ethnicity, gender, age, location, bbtype, wfreq);
    })
};

// function to build horizontal bar chart and bubble chart 
function buildBarChart(numID, ethnicity, gender, age, location, bbtype, wfreq) {
    d3.json("/data/samples.json").then((data) => {
    let samples = data.samples;
    // console.log(samples);

    // filter data
    let filteredSample = samples.filter(sample => sample.id == numID);
    // console.log(filteredSample);

    let slicedData = filteredSample.slice(0,10);
    console.log(slicedData);

    // Trace1 for ID data
    let trace1 = {
        x: slicedData.map(data => data.sample_values),
        y: slicedData.map(data => data.otu_ids),
        // text: slicedData.map(data => data.out_labels),
        name: "OTU",
        // chart type
        type: "bar",
        // make it horizontal
        orientation: "h"
    };

    let traces = [trace1];

    var layout = {
        title: "Top 10 Bacteria Cultures Found",
        margin: {
          l: 50,
          r: 50,
          t: 50,
          b: 50
        }
    };

    Plotly.newPlot("bar", traces, layout);

    })
};

// // function to build horizontal bar chart and bubble chart 
// function buildplots() {
//     d3.json("/data/samples.json").then((data) => {
//     let samples = data.samples;
//     console.log(samples);
//     })
// };

// function to update Demographic info table
function buildTable(numID, ethnicity, gender, age, location, bbtype, wfreq) {
    // clear/overwrite previous data
    let textBody = d3.select("#sample-metadata")
    
    // clear/overwrite previous data
    textBody.html("");

    // d3.json("/data/samples.json").then((data) => {
    textBody
        .append("tr").text(`ID: ${numID}`)
        .append("tr").text(`ETHNICITY: ${ethnicity}`)
        .append("tr").text(`GENDER: ${gender}`)
        .append("tr").text(`AGE: ${age}`)
        .append("tr").text(`LOCATION: ${location}`)
        .append("tr").text(`BBTYPE: ${bbtype}`)
        .append("tr").text(`WFREQ: ${wfreq}`);
    };

function buildBubbleChart(numID, ethnicity, gender, age, location, bbtype, wfreq) {
    d3.json("/data/samples.json").then((data) => {
    let samples = data.samples;

    var trace1 = {
        x: [1, 2, 3, 4],
        y: [10, 11, 12, 13],
        mode: 'markers',
        marker: {
          size: [40, 60, 80, 100]
        }
      };
    
    
    let bubble = d3.select("#bubble")

    // clear/overwrite previous data
    bubble.html("");

    bubble
})};

// load page with default data
init();