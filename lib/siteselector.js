define(function () {
  'use strict';

  return function () {
    var self = this;

    self.render = function render(el) {
      var sel = document.createElement('select');
      sel.id = 'siteChange';
      sel.classList.add('site-change');

      var domainNames = config.domainNames;
      if (domainNames.length > 1) {
        var allNodesOpt = document.createElement('option');
        allNodesOpt.innerHTML = config.allCommunities.name;
        allNodesOpt.value = config.allCommunities.url;
        if (window.location.pathname === config.allCommunities.url) {
          allNodesOpt.selected = true;
        }

        sel.appendChild(allNodesOpt);

        domainNames.forEach(function (domain) {
          if (typeof domain.url !== 'undefined') {
            var opt = document.createElement('option');
            opt.innerHTML = domain.name;
            opt.value = domain.url;
            if (window.location.pathname === domain.url) {
              opt.selected = true;
            }

            sel.appendChild(opt);
          }
        });

        var div = document.createElement('div');
        div.id = 'siteChanger';
        div.classList.add('sites');
        el.appendChild(div);

        var label = document.createElement('label');
        label.htmlFor = 'siteChange';
        div.appendChild(label);

        var yourCommunity = document.createTextNode(_.t('sidebar.yourCommunity'));
        label.appendChild(yourCommunity);

        div.appendChild(sel);

        sel.onchange = function () {
          var x = document.getElementById('siteChange').value;
          window.location = x;
        };
      }
    };

    return self;
  };
});
