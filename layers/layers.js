var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_TOPOGRAPHICAL_1 = new ol.format.GeoJSON();
var features_TOPOGRAPHICAL_1 = format_TOPOGRAPHICAL_1.readFeatures(json_TOPOGRAPHICAL_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOPOGRAPHICAL_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPOGRAPHICAL_1.addFeatures(features_TOPOGRAPHICAL_1);
var lyr_TOPOGRAPHICAL_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOPOGRAPHICAL_1, 
                style: style_TOPOGRAPHICAL_1,
                popuplayertitle: 'TOPOGRAPHICAL',
                interactive: true,
    title: 'TOPOGRAPHICAL<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_0.png" /> BOUNDARY<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_1.png" /> BRUSHLINE<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_2.png" /> BUILDING<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_3.png" /> CONCRETE<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_4.png" /> ELECTRICALBOX<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_5.png" /> FENCE<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_6.png" /> FLAGPOLE<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_7.png" /> GATE<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_8.png" /> INLET<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_9.png" /> LARGE_SIGN<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_10.png" /> LIGHT_POLE<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_11.png" /> MANHOLE<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_12.png" /> MOBILETOWER<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_13.png" /> PALM_TREE<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_14.png" /> PIPELLINE<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_15.png" /> playing ground<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_16.png" /> POST<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_17.png" /> ROAD<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_18.png" /> ROAD SMALL_SIGN<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_19.png" /> SHED<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_20.png" /> SIDEWAIK<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_21.png" /> TEMPLE<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_22.png" /> TRANSFORMER<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_23.png" /> TREE POINT<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_24.png" /> TREELINE<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_25.png" /> UTILITY_POLE<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_26.png" /> VENTORVAULT<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_27.png" /> WALL<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_28.png" /> WATERBODY<br />\
    <img src="styles/legend/TOPOGRAPHICAL_1_29.png" /> <br />' });
var format_DTM_2 = new ol.format.GeoJSON();
var features_DTM_2 = format_DTM_2.readFeatures(json_DTM_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DTM_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DTM_2.addFeatures(features_DTM_2);
var lyr_DTM_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DTM_2, 
                style: style_DTM_2,
                popuplayertitle: 'DTM',
                interactive: true,
                title: '<img src="styles/legend/DTM_2.png" /> DTM'
            });
var format_CONTOUR_3 = new ol.format.GeoJSON();
var features_CONTOUR_3 = format_CONTOUR_3.readFeatures(json_CONTOUR_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOUR_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOUR_3.addFeatures(features_CONTOUR_3);
var lyr_CONTOUR_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOUR_3, 
                style: style_CONTOUR_3,
                popuplayertitle: 'CONTOUR',
                interactive: true,
    title: 'CONTOUR<br />\
    <img src="styles/legend/CONTOUR_3_0.png" /> MAJOR_CONTOUR<br />\
    <img src="styles/legend/CONTOUR_3_1.png" /> MINOR_CONTOUR<br />\
    <img src="styles/legend/CONTOUR_3_2.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_TOPOGRAPHICAL_1.setVisible(true);lyr_DTM_2.setVisible(true);lyr_CONTOUR_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_TOPOGRAPHICAL_1,lyr_DTM_2,lyr_CONTOUR_3];
lyr_TOPOGRAPHICAL_1.set('fieldAliases', {'GM_LAYER': 'GM_LAYER', 'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'DGN_LEVEL': 'DGN_LEVEL', 'ELEVATION': 'ELEVATION', });
lyr_DTM_2.set('fieldAliases', {'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'DGN_LEVEL': 'DGN_LEVEL', 'ELEVATION': 'ELEVATION', });
lyr_CONTOUR_3.set('fieldAliases', {'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'ELEVATION': 'ELEVATION', });
lyr_TOPOGRAPHICAL_1.set('fieldImages', {'GM_LAYER': 'TextEdit', 'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'DGN_LEVEL': 'Range', 'ELEVATION': 'TextEdit', });
lyr_DTM_2.set('fieldImages', {'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'DGN_LEVEL': 'Range', 'ELEVATION': 'TextEdit', });
lyr_CONTOUR_3.set('fieldImages', {'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'ELEVATION': 'TextEdit', });
lyr_TOPOGRAPHICAL_1.set('fieldLabels', {'GM_LAYER': 'inline label - always visible', 'LAYER': 'inline label - always visible', 'GM_TYPE': 'inline label - always visible', 'DGN_LEVEL': 'inline label - always visible', 'ELEVATION': 'inline label - always visible', });
lyr_DTM_2.set('fieldLabels', {'LAYER': 'inline label - always visible', 'GM_TYPE': 'inline label - always visible', 'DGN_LEVEL': 'inline label - always visible', 'ELEVATION': 'inline label - always visible', });
lyr_CONTOUR_3.set('fieldLabels', {'LAYER': 'inline label - always visible', 'GM_TYPE': 'inline label - always visible', 'ELEVATION': 'inline label - always visible', });
lyr_CONTOUR_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});