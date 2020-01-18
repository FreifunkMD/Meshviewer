module.exports = function () {
  return {
    // Variables are NODE_ID and NODE_NAME (only a-z0-9\- other chars are replaced with _)
    "nodeInfos": [

    ],
    // Array of data provider are supported
    'dataPath': [
     '/data/',
    ],
    'siteName': 'Freifunk Magdeburg - Babel',
    "maxAge": 21,
    "nodeZoom": 19,
    'mapLayers': [
      {
        // Der Docker-Container "Meshviewer-Server" wird hier als Tiles-Proxy verwendet.
        // Dafür ist dann "url": "/tiles-cache/{z}/{x}/{y}.png" zu benutzen.
        // Meshviewer-Server verwendet Tiles-Server von OpenStreetMap.org .
        // Bezüglich "OSM Tile usage policy" siehe https://wiki.openstreetmap.org/wiki/DE:Tile_usage_policy
        "name": "OpenStreetMap",
      "url": "/tiles-cache/{z}/{x}/{y}.png",
//        "url": "https://tile.openstreetmap.de/{z}/{x}/{y}.png",
        "config": {
          "type": "osm",
          "maxZoom": 19,
          "attribution": "Map data (c) <a href\"http://openstreetmap.org\">OpenStreetMap</a> contributor"
        }
      }
    ],
    // Set a visible frame
    'fixedCenter': [
      // Northwest
      [
        52.300495981,
        11.383183146
      ],
      [
        51.997920394,
        11.946889326
      ]
    ],
//    'allCommunities': {
//      'name': 'Gesamtkarte',
//      'url': '/'
//    },
//    'domainNames': [
//      {
//        'domain': 'ffmd',
//        'name': 'Magdeburg',
//      }
//     ],
    'domainNames': [
      {
        'domain': 'ffmd',
        'name': 'Magdeburg',
      },

//      { "site": "legacybat_11s", "name": "Legacy BATMAN (Single Domain)" },
//      { "domain": "dom2", "name": "Single Domain" },
    ],
    'linkList': [
      {
        'title': 'Magdeburger-Webseite',
        'href': 'https://md.freifunk.net/',
        'target': '_blank'
      },
    ]
  };
};
