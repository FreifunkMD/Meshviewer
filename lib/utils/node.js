define(['snabbdom', 'helper', 'moment'], function (V, helper, moment) {
  'use strict';
  V = V.default;

  var self = {};

  function showBar(v, width, warning) {
    return V.h('span',
      { props: { className: 'bar' + (warning ? ' warning' : '') } },
      [
        V.h('span',
          {
            style: { width: (width * 100) + '%' }
          }),
        V.h('label', v)
      ]
    );
  }

  function showAirtimeBar(band, v, rx, tx, wait) {
    return V.h('span',
      { props: { className: 'bar airtime' + band, title: 'RX:' + Math.round(rx * 100) + '%, TX:' + Math.round(tx * 100) + '%, Wait:' + Math.round(wait * 100) + '%' } },
      [
        V.h('span',
          {
            style: { width: (rx * 100) + '%'}
          }),
        V.h('span',
          {
            style: { width: (tx * 100) + '%', background: 'rgba(233, 85, 32, 1)'}
          }),
        V.h('span',
          {
            style: { width: (wait * 100) + '%', background: 'rgba(32, 85, 128, 1)'}
          }),
        V.h('label', v)
      ]
    );
  }

  self.showStatus = function showStatus(d) {
    return V.h('td',
      { props: { className: d.is_online ? 'online' : 'offline' } },
      _.t((d.is_online ? 'node.lastOnline' : 'node.lastOffline'), {
        time: d.lastseen.fromNow(),
        date: d.lastseen.format('DD.MM.YYYY, H:mm:ss')
      }));
  };

  self.showGeoURI = function showGeoURI(d) {
    if (!helper.hasLocation(d)) {
      return undefined;
    }

    return V.h('td',
      V.h('a',
        { props: { href: 'geo:' + d.location.latitude + ',' + d.location.longitude } },
        Number(d.location.latitude.toFixed(6)) + ', ' + Number(d.location.longitude.toFixed(6))
      )
    );
  };

  self.showGateway = function showGateway(d) {
    return d.is_gateway ? _.t('yes') : undefined;
  };

  self.showFirmware = function showFirmware(d) {
    return [
      helper.dictGet(d, ['firmware', 'release']),
      helper.dictGet(d, ['firmware', 'base'])
    ].filter(function (n) {
      return n !== null;
    }).join(' / ') || undefined;
  };

  self.showUptime = function showUptime(d) {
    return moment.utc(d.uptime).local().fromNow(true);
  };

  self.showFirstSeen = function showFirstSeen(d) {
    return d.firstseen.fromNow(true);
  };

  self.showLoad = function showLoad(d) {
    return showBar(d.loadavg.toFixed(2), d.loadavg / (d.nproc || 1), d.loadavg >= d.nproc);
  };

  self.showRAM = function showRAM(d) {
    return showBar(Math.round(d.memory_usage * 100) + ' %', d.memory_usage, d.memory_usage >= 0.8);
  };

  self.showAirtime2 = function showAirtime2(d) {
    var rt = helper.dictGet(d, ['wireless', 'airtime2']);
    if (!rt) {
      return undefined;
    }

    return showAirtimeBar('2', Math.round((1 - rt.free) * 100) + '%', rt.rx, rt.tx, rt.wait);
  };

  self.showAirtime5 = function showAirtime5(d) {
    var rt = helper.dictGet(d, ['wireless', 'airtime5']);
    if (!rt) {
      return undefined;
    }

    return showAirtimeBar('5', Math.round((1 - rt.free) * 100) + '%', rt.rx, rt.tx, rt.wait);
  };

  self.showDomain = function showDomain(d) {
    var rt = d.domain;
    if (config.domainNames) {
      config.domainNames.some(function (t) {
        if (rt === t.domain) {
          rt = t.name;
          return true;
        }
      });
    }
    return rt;
  };

  self.showClients = function showClients(d) {
    if (!d.is_online) {
      return undefined;
    }

    var clients = [
      V.h('span', [
        d.clients > 0 ? d.clients : _.t('none'),
        V.h('br'),
        V.h('i', { props: { className: 'ion-people', title: _.t('node.clients') } })
      ]),
      V.h('span',
        { props: { className: 'legend-24ghz' } },
        [
          d.clients_wifi24,
          V.h('br'),
          V.h('span', { props: { className: 'symbol', title: '2,4 GHz' } })
        ]),
      V.h('span',
        { props: { className: 'legend-5ghz' } },
        [
          d.clients_wifi5,
          V.h('br'),
          V.h('span', { props: { className: 'symbol', title: '5 GHz' } })
        ]),
      V.h('span',
        { props: { className: 'legend-others' } },
        [
          d.clients_other,
          V.h('br'),
          V.h('span', { props: { className: 'symbol', title: _.t('others') } })
        ])
    ];

    return V.h('td', { props: { className: 'clients' } }, clients);
  };

  self.showIPs = function showIPs(d) {
    var string = [];
    var ips = d.addresses;
    ips.sort();
    ips.forEach(function (ip, i) {
      if (i > 0) {
        string.push(V.h('br'));
      }

      if (ip.indexOf('fe80:') !== 0) {
        string.push(V.h('a', { props: { href: 'http://[' + ip + ']/', target: '_blank' } }, ip));
      } else {
        string.push(ip);
      }
    });
    return V.h('td', string);
  };

  self.showAutoupdate = function showAutoupdate(d) {
    return d.autoupdater.enabled ? _.t('node.activated', { branch: d.autoupdater.branch }) : _.t('node.deactivated');
  };

  return self;
});
