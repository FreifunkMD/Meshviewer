module.exports = function () {
  return {
    // Variables are NODE_ID and NODE_NAME (only a-z0-9\- other chars are replaced with _)
    'nodeInfos': [
      {
        'name': 'Clientstatistik',
        'href': 'https://map.freifunk-3laendereck.net/grafana/d/000000090/freifunk-sudschwarzwald-ost-einzelansicht?var-Knotenid={NODE_ID}&theme=light',
        'image': 'https://map.freifunk-3laendereck.net/grafana/render/d-solo/000000090/freifunk-sudschwarzwald-ost-einzelansicht?refresh=5m&orgId=1&panelId=3&var-Knotenid={NODE_ID}&width=528&height=290&theme=light',
        'title': 'Clientstatistik für {NODE_ID} - weiteren Statistiken'
      }
    ],
    'globalInfos': [
      {
        'name': 'Tagesstatistik',
        'href': 'https://map.freifunk-3laendereck.net/grafana/d/000000089/freifunk-sudschwarzwald-ost-history?theme=light',
        'image': 'https://map.freifunk-3laendereck.net/grafana/render/d-solo/000000089/freifunk-sudschwarzwald-ost-history?refresh=5m&orgId=1&panelId=1&width=528&height=290&theme=light',
        'title': 'Bild mit Tagesstatistik'
      },
      {
        'name': 'Wochenstatistik',
        'href': 'https://map.freifunk-3laendereck.net/grafana/d/000000089/freifunk-sudschwarzwald-ost-history?theme=light',
        'image': 'https://map.freifunk-3laendereck.net/grafana/render/d-solo/000000089/freifunk-sudschwarzwald-ost-history?refresh=5m&orgId=1&panelId=2&width=528&height=290&theme=light',
        'title': 'Bild mit Wochenstatistik'
      }
    ],
    // Array of data provider are supported
    'dataPath': [
      'https://map.freifunk-3laendereck.net/map-data/sswo/'
    ],
    'siteName': 'Freifunk Südschwarzwald-Ost',
    'mapLayers': [
      {
        'name': 'Carto light',
        'url': 'https://map.freifunk-3laendereck.net/cartolite/{z}/{x}/{y}.png',
        'config': {
          'type': 'osm',
          'attribution': '&copy; OpenStreetMap contributors, &copy; CartoDB',
          'maxZoom': 19
        }
      },
      {
        'name': 'Carto dark',
        'url': 'https://map.freifunk-3laendereck.net/cartodark/{z}/{x}/{y}.png',
        'config': {
          'type': 'osm',
          'attribution': '&copy; OpenStreetMap contributors, &copy; CartoDB',
          'maxZoom': 19
        }
      },
      {
        'name': 'Openstreetmap',
        'url': 'https://map.freifunk-3laendereck.net/tiles/{z}/{x}/{y}.png',
        'config': {
          'type': 'osm',
          'attribution': 'Tiles CC-BY-SA OpenStreetMap',
          'maxZoom': 19
        }
      },
      {
        'name': 'Esri.WorldImagery',
        'url': '//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        'config': {
          'maxZoom': 20,
          'attribution': 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
         }
      },
      {
        'name': 'OpenTopoMap',
        'url': 'https://map.freifunk-3laendereck.net/opentopo/{z}/{x}/{y}.png',
        'config': {
          'attribution': 'Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)',
          'maxZoom': 17
        }
      }
    ],
    // Set a visible frame
    'fixedCenter': [
      // Northwest
      [
        47.7487,
        8.1576
      ],
      // Southeast
      [
        47.6829,
        8.3399
      ]
    ],
    'allCommunities': {
      'name': 'Gesamtkarte',
      'url': '/'
    },
    'domainNames': [
      {
        'domain': 'saek',
        'name': 'Bad Säckingen',
        'url': '/saek/'
      },
      {
        'domain': 'bh',
        'name': 'Breisgau-Hochschwarzwald',
        'url': '/bh/'
      },
      {
        'domain':'3land',
        'name': 'Dreiland',
        'url': '/ff3l-3land/'
      },
      {
        'domain':'ff3l-3land',
        'name': 'Dreiland'
      },
      {
        'domain': 'ffem',
        'name': 'Emmendingen',
        'url': '/ffem/'
      },
      {
        'domain': 'fffr',
   	    'name': 'Freiburg',
   	    'url': '/fffr/'
      },
      {
        'domain': 'default',
        'name': 'Freifunk Dreiländereck (Diaspora)',
        'url': '/ff3l/'
      },
      {
        'domain': 'ff3l',
        'name': 'Freifunk Dreiländereck (Diaspora)'
      },
      {
        'domain': 'hoho',
        'name': 'Hochrhein-Hotzenwald'
      },
      {
        'domain': 'ff3l-hoho',
        'name': 'Hochrhein-Hotzenwald'
      },
      {
        'domain': 'hotz',
        'name': 'Hotzenwald',
        'url': '/hotz/'
      },
      {
        'domain':'loe',
        'name': 'Lörrach-Oberrhein',
        'url': '/ff3l-loe/'
      },
      {
        'domain': 'nalb',
        'name': 'Neckar-Alb',
        'url': '/ff3l-nalb/'
      },
      {
        'domain': 'ffng',
        'name': 'Nordschwarzwald-Gäu',
        'url': '/ffng/'
      },
      {
        'site': 'ff3l-ng',
        'domain': 'ff3l-ng',
        'name': 'Nordschwarzwald-Gäu'
      },
      {
        'domain': 'ref',
        'name': 'Refugees',
        'url': '/ff3l-ref/'
      },
      {
        'domain': 'rhf',
        'name': 'Rheinfelden',
        'url': '/rhf/'
      },
      {
        'domain': 'swb',
        'name': 'Schwarzwald-Baar',
        'url': '/ff3l-swb/'
      },
      {
        'domain': 'wald',
        'name': 'Südschwarzwald'
      },
	    {
        'domain': 'ff3l-wald',
        'name': 'Südschwarzwald'
      },
	    {
        'domain': 'sswo',
        'name': 'Südschwarzwald-Ost',
        'url': '/sswo/'
      },
      {
        'domain': 'ssww',
        'name': 'Südschwarzwald-West',
        'url': '/ssww/'
      },
      {
        'domain': 'test',
        'name': 'Testnetz'
      },
   	  {
        'domain': 'fftut',
        'name': 'Tuttlingen',
        'url': '/fftut/'
      },
	        {
        'domain': 'wtk',
        'name': 'Waldshut-Tiengen-Klettgau',
        'url': '/ff3l-wtk/'
      },
      {
        'domain': 'ff3l-wtk',
        'name': 'Waldshut-Tiengen-Klettgau'
      },
      {
        'domain': 'wiese',
        'name': 'Wiesental',
        'url': '/ff3l-wiese/'
      },
      {
        'domain': 'ff3l-wiese',
        'name': 'Wiesental'
      }
    ],
    'linkList': [
      {
        'title': 'Impressum',
        'href': 'https://freifunk-3laendereck.net/impressum-mehr/',
        'target': '_blank'
      },
      {
        'title': 'Datenschutz',
        'href': 'https://freifunk-3laendereck.net/rechtliche-hinweise/',
        'target': '_blank'
      },
      {
        'title': 'Knotenliste',
        'href': 'https://www.knotenliste.de/index.html',
        'target': '_blank'
      }
    ],
    geo: [
      {
        json: function () {
          return require('helper').getJSON('https://map.freifunk-3laendereck.net/geojson/sswo.geojson').then(function (result) {
            return result.features ? result.features : false;
          }, function () {
            return false;
          });
        },
        option: {
          style: {
            color: '#ff7800',
            weight: 5,
            opacity: 0.4,
            fill: false,
//            fillColor: '#6de922',
//            fillOpacity: 0.05,
            interactive: false
          }
        }
      }
    ]
  };
};
