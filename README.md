jQuery.pTooltip
===============

Simple jQuery plugin to create tooltips that stay open when on hover. That
suppose your tooltip opens when you hover over some element (say '#e'). The
tooltip will stay open for a short duration after the mouse leaves '#e'. If at
this point the user is hovering over the tooltip (or '#e'), then the tooltip
will remain open. The tooltip closes if the mouse leaves the toolitip.

This enables the user to interact with the content in the tooltip in an
intuitive way. Everything is styled with the jQuery UI theme.

Usage
-----

HTML fragment (assumes jquery, jqueryui, and this plugin are loaded):

    <b title='ptooltip-1'>This</b> element shows a tooltip.
    So does <span title='ptooltip-2'>this</span> one.

    <div id='ptooltip-1'>
	This tool tip will stay open if you hover over it.
    </div>
    <div id='ptooltip-2'>
	This is another "persistent" tool tip.
	It can have <a href='#'>links</a> that the user can interact with.
	Or some more fancy content.
    </div>

    <script>
	$('[title|=ptooltip]').pTooltip();
    </script>

Note: The *title* attribute has the *id* of the element containing the tooltip.

Demo
----

http://jsfiddle.net/BgDxs/1/


Notes
-----

Ideally it would be nice if the jQuery UI tooltip widget had an option that allowed this functionality.
However, I didn't have the time to wade through their build process to submit a patch.
