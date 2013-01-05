/*
 * Created  : Thu 03 Jan 2013 05:43:15 PM EST
 * Modified : Sat 05 Jan 2013 01:45:29 AM EST
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
	    var mouseEntered = false;

	    // Debug check
	    if( tip.length === 0 )
		throw( 'No element with ID ' + t.attr('title') );

	    var closeTip = function( force )
		{
		    // Before closing, make sure the tip was shown by us, and
		    // not reshown by another element (e.g. when multiple
		    // elements have the same tooltip.)
		    if(
			tip.data( 'pTooltip' ) === t.get(0)
			&& (force || !mouseEntered )
		      )
			tip.hide();
		};

	    // Set pTooltip.mouseEntered when the mouse enters.
	    tip.mouseover( function()
		    {
			mouseEntered = true;
		    } );

	    // Close the tool tip when the mouse leaves
	    tip.mouseleave( function() { tip.hide(); } );

	    // Style the tip
	    tip.hide().addClass( 'ui-tooltip ui-widget ui-corner-all ui-widget-content' );

	    /*
	     * Now deal with the element t.
	     */

	    // Remove title attribute from element
	    t.removeAttr( 'title' );

	    // Show tooltip on mouse over.
	    t.mouseover( function()
		{
		    // First hide all (other?) visible tips
		    $(':visible:data(pTooltip)').hide();

		    // Reset mouseEntered.
		    mouseEntered = false;

		    // Store the caller node in tip
		    tip.data( 'pTooltip', t.get(0) );

		    tip.show().position(
			{ my: 'center top+15', at: 'center bottom', of: t,
			    collision: 'fit flip' });
		});

	    // Wait a little, and then call the close function.
	    t.mouseleave( function()
		{
		    setTimeout( function() { closeTip( false); }, 500 );
		});
	    
	} );
    }
})(jQuery);
