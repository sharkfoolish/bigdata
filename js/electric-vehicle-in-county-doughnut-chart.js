let map = L.map('mapid');
map.setView(new L.LatLng(23.974115497410764, 120.97994624910778), 7);
let osmUrl='https://wmts.nlsc.gov.tw/wmts/EMAP/default/GoogleMapsCompatible/{z}/{y}/{x}';
let osm = new L.TileLayer(osmUrl, {minZoom: 6, maxZoom: 16});
map.addLayer(osm);
county = [
    "宜蘭縣", "花蓮縣", "金門縣", "南投縣", "屏東縣", "苗栗縣",
    "桃園市", "高雄市", "基隆市", "連江縣", "雲林縣", "新北市",
    "新竹市", "新竹縣", "嘉義縣", "嘉義市", "彰化縣", "臺中市",
    "臺北市", "臺東縣", "臺南市", "澎湖縣"
];
numbers = [
    7903, 8320, 3035, 8487, 19455, 6351,
    89106, 85998, 4799, 164, 13002, 97316,
    12716, 12950, 6023, 6908, 21018, 86932,
    74985, 4575, 56649, 3531
];
let sum_of_numbers = sum(numbers);
fetch('../data/county-boundary-coordinates.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (result) {
        for (let i = 0; i < 24; i++) {
            let data = result.features[i].geometry.coordinates[0];
            for (let value of data) {
                swapLatitudeAndLongitude(value);
            }
            let polygon = L.polygon(data, {
                color: 'rgb(121,38,38)',
                fillColor: 'rgb(121,38,38)',
                fillOpacity: numbers[i] * 0.000005
            }).addTo(map);
            let percentage = Math.round(numbers[i] / sum_of_numbers * 100)
            polygon.bindPopup(county[i] + ":" + percentage + "%");
        }
    });

function swapLatitudeAndLongitude(value) {
    [value[0], value[1]] = [value[1], value[0]]
}

function sum(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

