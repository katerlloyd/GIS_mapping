
require([
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/layers/GraphicsLayer"	
  ], function(Map, MapView, Graphic, GraphicsLayer) {

        var map = new Map({
            basemap: "topo-vector"
        });

        var view = new MapView({
            container: "viewDiv",  
            map: map,
            center: [-111.7896876, 43.8260227],
            zoom: 3
        });

        var graphicsLayer = new GraphicsLayer();
        map.add(graphicsLayer);        
        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);

                for (feature of data.features) {    

                    var point = {
                        type: "point",
                        longitude: feature.geometry.coordinates[0],
                        latitude: feature.geometry.coordinates[1]
                    };

                    var active_color;
                    var active = feature.properties.H_active;
                    if (active == 1) {
                        active_color = [235, 0, 0];
                    }
                    else if (active == 0) {
                        active_color = [166, 236, 0];
                    } else {
                        active_color = [0, 0, 0];
                    }

                    var risk_color;
                    var risk = feature.properties.risk;
                    if (risk == 3) {
                        risk_color = [235, 0, 0];
                    }
                    else if (risk == 2) {
                        risk_color = [255, 165, 0];
                    }
                    else if (risk == 1) {
                        risk_color = [245, 225, 0];
                    }
                    else {
                        risk_color = [166, 236, 0];
                    }

                    var vei_color;
                    var vei = feature.properties.VEI_Holoce;
                    if (vei >= 6) {
                        vei_color = [160, 0, 0];
                    }
                    else if (vei == 5) {
                        vei_color = [235, 0, 0];
                    }
                    else if (vei == 4) {
                        vei_color = [255,101,0];
                    }
                    else if (vei == 3) {
                        vei_color = [255, 165, 0];
                    }
                    else if (vei >= 1) {
                        vei_color = [245, 225, 0];
                    }
                    // else if (vei == 1) {
                    //     vei_color = [166, 236, 0];
                    // }
                    else {
                        vei_color = [166, 236, 0];
                    }
                    
                    var simpleMarkerSymbol = {
                        type: "simple-marker",
                        style: "triangle",
                        color: vei_color,  
                        outline: {
                        color: [255, 255, 255],
                        width: 1
                        }
                    };

                    var pointGraphic = new Graphic({
                        geometry: point,
                        symbol: simpleMarkerSymbol,
                        attributes: feature.properties
                    });

                    pointGraphic.popupTemplate = {
                        "title" : "Volcano",
                        "content" : "<b>Name</b>: {V_Name}<br><b>Country</b>: {Country}<br><b>Volcanic Explosivity Index</b>: {VEI_Holoce}<br>"
                    }
            
                    graphicsLayer.add(pointGraphic);
                }
            }
        };

        xmlhttp.open("GET", "volcano.json", true);
        xmlhttp.send();
});