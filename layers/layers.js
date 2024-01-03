var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Uluguru_1 = new ol.format.GeoJSON();
var features_Uluguru_1 = format_Uluguru_1.readFeatures(json_Uluguru_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uluguru_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uluguru_1.addFeatures(features_Uluguru_1);
var lyr_Uluguru_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Uluguru_1, 
                style: style_Uluguru_1,
                interactive: true,
                title: '<img src="styles/legend/Uluguru_1.png" /> Uluguru'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Uluguru_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Uluguru_1];
lyr_Uluguru_1.set('fieldAliases', {'leisure': 'leisure', 'name': 'name', 'natural': 'natural', });
lyr_Uluguru_1.set('fieldImages', {'leisure': 'TextEdit', 'name': 'TextEdit', 'natural': 'TextEdit', });
lyr_Uluguru_1.set('fieldLabels', {'leisure': 'no label', 'name': 'no label', 'natural': 'no label', });
lyr_Uluguru_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});