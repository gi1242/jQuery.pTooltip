/*
 * Created  : Thu 03 Jan 2013 05:43:15 PM EST
 * Modified : Fri 04 Jan 2013 01:24:45 PM EST
 * Author   : GI <gi1242+js@nospam.com> (replace nospam with gmail)
 *
 * Copyright 2013, GI.
 * Licensed under the MIT licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *
 * Persistent tool tips: Tool tips close after a delay, unless the user is
 * hovering over the tool tip. In this case the tool tip will close when the
 * mouse leaves the tool tip window.
 *
 * As of now this works with jquery-1.8.3 and jquery-ui-1.9.2
 */

(function($) {
    $.fn.pTooltip = function()
    {
	// this: jQuery object with a list of items for which the tool tip is required.
	// title attribute to each object contains the ID to the tool tip element.
	return this.each( function()
	{
	    // this is a DOM element. ID of tooltip element is in the title attribute
	    var t = $(this);
	    var tip = $( '#' + t.attr('title') );

	    // Debug check
	    if( tip.length === 0 )
		throw( 'No element with ID ' + t.attr('title') );

	    // Remove title attribute from element
	    t.removeAttr( 'title' );

	    // Show tooltip on mouse over.
	    t.mouseover( function()
		{
		    // First hide all visible tips
		    $(':visible:data(pTooltip)').hide();

		    tip.show().position(
			{ my: 'center top+15', at: 'center bottom', of: t,
			    collision: 'fit' });
		});

	    // Wait a little, and then call the close function.
	    t.mouseleave( function()
		{
		    setTimeout(
			// var tip from parent is passed to this anonymous function
			function() {
			    if( ! t.add( tip ).is( $(':hover') ) )
				tip.hide();
			},
			500 );
		});
	    

	    // Mark tip as a tooltip
	    tip.data( 'pTooltip', true );

	    // Close the tool tip when the mouse leaves
	    tip.mouseleave( function() { tip.hide(); } );

	    // Style the tip
	    tip.hide().addClass( 'ui-tooltip ui-widget ui-corner-all ui-widget-content' );

	} );
    }
})(jQuery);
