(function ($) {
  Drupal.behaviors.unescoLeaflet = {
    attach: function (context, settings) {
		$(document).ready(function(){

			if ($('#unesco_leaflet-disclaimer').length) {
				$modal = $('<div id="unesco_leaflet-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="unescoLeafletLabel" aria-hidden="true"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button> <h4 class="modal-title" id="exampleModalLabel">Disclaimer</h4> </div> <div class="modal-body"> </div> <div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> </div> </div> </div> </div> </div>');
				$modal
					.appendTo('body')
					.on('show.bs.modal', function (event) {
					  var modal = $(this)
					   // Button that triggered the modal
					   modal.find('.modal-body').load('/?q=ajax-node/get/'+$('#unesco_leaflet-disclaimer').data('href'), function() {});	
					});
			};	

		});    	
    }
  };


})(jQuery);