# Overview

I created this software to increase my understanding JavaScript and to familiarize myself with the ArcGIS API and its capabilites. The software that I created uses a volcano json file from an [OCHA dataset](https://data.humdata.org/dataset/volcano-population-exposure-index-gvm/resource/7234d067-2d74-449a-9c61-22ae6d98d928) and generates markers to represent every volcano in the world. This data is formatted as a GeoJSON. When a volcano pin or marker is clicked on, a pop-up displays the name of the volcano, the country in which the volcano is located, the risk level, and the volcanic explosivity index number. 

My purpose for writing this software was to better visualize the positioning and details of volcanoes around the world. By editing the marker color in the code, a user can switch between viewing the volcanoes in different colors based on either volcanic explosivity index, risk level, or whether the volcano is active or not. The ArcGIS API generates the map and places the markers to whatever specificates were given in the JavaScrfipt and HTML files.

Here is a demo of my software: [Software Demo Video](http://youtube.link.goes.here)

# Development Environment

* Visual Studio Code
* JavaScript
* HTML
* Git / GitHub
* ArcGIS 4.15

# Useful Websites

* [ArcGIS Documentation](https://developers.arcgis.com/documentation/)
* [GeoJSON Summary Format](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php)

# Future Work

* Add the option for a user to change the views without manually changing the code.
* Allow the user to filter out which volcanoes they want to see by attribute.
* Add a map layer of the fault lines of the world.
