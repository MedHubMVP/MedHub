/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.maps')
      .controller('LeafletPageCtrl', LeafletPageCtrl);

  /** @ngInject */
  function LeafletPageCtrl($timeout) {
	  var greenIcon = new L.Icon({
	    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
	    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	    iconSize: [25, 41],
	    iconAnchor: [12, 41],
	    popupAnchor: [1, -34],
	    shadowSize: [41, 41]
	  });

	  var redIcon = new L.Icon({
	    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
	    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
	    iconSize: [25, 41],
	    iconAnchor: [12, 41],
	    popupAnchor: [1, -34],
	    shadowSize: [41, 41]
	  });
	  var map;
    function initialize() {
      L.Icon.Default.imagePath = 'assets/img/theme/vendor/leaflet/dist/images';
      map = L.map(document.getElementById('leaflet-map')).setView([-23.599022,-46.717239], 11);
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);



	  // Initialize Firebase
	    var config = {
	      apiKey: "AIzaSyBmFPVlL3koC_PvD11mD_y7y0PmQZvm54s",
	      authDomain: "medhub-3a1e3.firebaseapp.com",
	      databaseURL: "https://medhub-3a1e3.firebaseio.com",
	      storageBucket: "medhub-3a1e3.appspot.com",
	      messagingSenderId: "542735452063"
	    };
	    firebase.initializeApp(config);

		var estoqueRef = firebase.database().ref('estoqueAtualPorEAN/7896016806469');
	     estoqueRef.on('child_added', function(snapshot) {
			 var item = snapshot.val();

			 L.marker([item.hospital.lat , item.hospital.long], {icon: greenIcon}).addTo(map)
	             .bindPopup(item.hospital.nome + '<br />Disponível: ' + item.quantidade)
	             .openPopup();

		   console.log();
	     });
    }

	function addRedPin(item) {
		L.marker([item.hospital.lat , item.hospital.long], {icon: redIcon}).addTo(map)
			.bindPopup(item.hospital.nome + '<br />Solicitando: ' + item.quantidade)
			.openPopup();
	}

	$timeout(function(){
      initialize();
    }, 100);

	$timeout(function(){
		var item = {
				hospital : {
					nome: 'Albert Sabin',
					lat: -23.525705,
					long: -46.7135696,
				},
				quantidade: 150
			};
	  addRedPin(item);
  }, 5000);

  }

})();
