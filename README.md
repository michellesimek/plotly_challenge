# Plotly Homework - Belly Button Biodiversity

In this assignment involves building an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Step 1: Plotly
Create a horizontal chart with a dropdown menu to display the top 10 OTUs found in that individual. A bubble chart should also be created to display each sample.

The horizontal bar chart should: 
1. Use sample_values as the values for the bar chart.
2. Use otu_ids as the labels for the bar chart.
3. Use otu_labels as the hovertext for the chart.

The bubble should: 
1. Use otu_ids for the x values.
2. Use sample_values for the y values.
3. Use sample_values for the marker size.
4. Use otu_ids for the marker colors.
5. Use otu_labels for the text values.

The sample metadata (i.e. the individual's demographic information) should be displayed as well. 

The plots should update everytime a new sample is selected from the dropdown.