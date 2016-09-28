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
    function initialize() {
      L.Icon.Default.imagePath = 'assets/img/theme/vendor/leaflet/dist/images';
      var map = L.map(document.getElementById('leaflet-map')).setView([-23.599022,-46.717239], 13);
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);


      L.marker([-23.599022, -46.717239]).addTo(map)
          .bindPopup('Hospital Albert Einstein')
          .openPopup();

		  // Initialize Firebase
  	    var config = {
  	      apiKey: "AIzaSyBmFPVlL3koC_PvD11mD_y7y0PmQZvm54s",
  	      authDomain: "medhub-3a1e3.firebaseapp.com",
  	      databaseURL: "https://medhub-3a1e3.firebaseio.com",
  	      storageBucket: "medhub-3a1e3.appspot.com",
  	      messagingSenderId: "542735452063"
  	    };
  	    firebase.initializeApp(config);
    }

	$timeout(function(){
      initialize();
    }, 100);

  }

})();
