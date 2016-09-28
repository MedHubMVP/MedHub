(function () {
    'use strict';

    angular
        .module('BlurAdmin.pages.search')
        .controller('searchCtrl', searchCtrl);

    function searchCtrl($timeout) {
        var vm = this;

        // mock
        vm.searchResult = [];

        function initMedicamentos() {
			// Initialize Firebase
	  	    var config = {
	  	      apiKey: "AIzaSyBmFPVlL3koC_PvD11mD_y7y0PmQZvm54s",
	  	      authDomain: "medhub-3a1e3.firebaseapp.com",
	  	      databaseURL: "https://medhub-3a1e3.firebaseio.com",
	  	      storageBucket: "medhub-3a1e3.appspot.com",
	  	      messagingSenderId: "542735452063"
	  	    };
	  	    firebase.initializeApp(config);

	  		var estoqueRef = firebase.database().ref('medicamentos');
	  	     estoqueRef.on('child_added', function(snapshot) {
	  			 var item = snapshot.val();
				 vm.searchResult.push(item);
	  	     });
        }

		initMedicamentos();
		console.log(vm.searchResult.length);
    }
} ());
