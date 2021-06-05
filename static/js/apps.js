// Step 1: Plotly
// use the D3 library to read in samples.json
function handleData(data) {
    // console log data to ensure it read in correctly
    console.log(data)
};

function handleError(data) {
    console.log("opps, mistake!", bad)
};

let data = d3.json("/data/samples.json").then(handleData).catch(handleError);

// // call functions when a change takes place
// d3.selectAll("#selDataset").on("change", updatePlotly);

// function updatePlotly() {
    
// }

// // create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// // Sort the data by ID results
// var sortedbyID = data['names'].sort((a, b) => b.names - a.names);

// // Slice the first 10 objects for plotting
// slicedData = sortedbyID.slice(0, 10);

// // Reverse the array to accommodate Plotly's defaults
// reversedData = slicedData.reverse();

// // Trace1 for ID data
// let trace1 = {
//     x: reversedData.map(object => object.sample_values),
//     y: reversedData.map(object => object.otu_ids),
//     text: reversedData.map(object => object.out_labels),
//     // // chart title
//     // name: "OTU",
//     // chart type
//     type: "bar",
//     // make it horizontal
//     orientation: "h"
//   };

// let traces = [trace1];

// let layout = {
//     title: "Top 10 OTUs",
//     margin: {
//       l: 100,
//       r: 100,
//       t: 100,
//       b: 100
//     }
//   };

// // Render the plot to the div tag with id "plot"
// Plotly.newPlot("bar", data, layout);

// create a bubble chart that displays each sample

// Display the sample metadata, i.e., an individual's demographic information.
// function demoInfo() {
//     let id =
//     let demo_ethnicity = 
//     let gender = 
//     let age = 
//     let location = 
//     let bbtype = 
//     let wfreq = 

// }


//     // create a horizontal bar chart with default data
//     // assign variable for samples data
    // let samples = data.samples;
    // console.log(samples);

    // let sortedbyValue = samples.sort((a,b) => b.sample_values - a.sample_values);
    // let slicedData = sortedbyValue.slice(0,10);
    // console.log(slicedData);

    // // Trace1 for ID data
    // let trace1 = {
    //     x: slicedData.map(object => object.sample_values),
    //     y: slicedData.map(object => object.otu_ids),
    //     text: slicedData.map(object => object.out_labels),
    //     name: "OTU",
    //     // chart type
    //     type: "bar",
    //     // make it horizontal
    //     orientation: "h"
    // };

    // let traces = [trace1];

    // var layout = {
    //     title: "Top 10 Bacteria Cultures Found",
    //     margin: {
    //       l: 500,
    //       r: 500,
    //       t: 500,
    //       b: 500
    //     }
    // };

    // Plotly.newPlot("bar", traces, layout);

//     // Create a bubble chart that displays each sample



// function unpack(rows,index) {
//     return rows.map(function(row) {
//         return row[index];
//     })
// }

// function getMetaData() {
//     d3.json("/data/samples.json").then((data) => {
//     let metaData = data.metadata;
//     console.log(metaData);
//     let num = unpack(metaData.id, 5);
//     console.log(num);
//     let ethnicity = unpack(metaData.ethnicity, 1);
//     let gender = unpack(metaData.gender, 2);
//     let age = unpack(metaData.age, 3);
//     let location = unpack(metaData.location, 4);
//     let bbtype = unpack(metaData.bbtype, 5);
//     let wfreq = unpack(metaData.wfreq, 6);
//     buildtable(num, ethnicity, gender, age, location, bbtype, wfreq);
//     })
// };
