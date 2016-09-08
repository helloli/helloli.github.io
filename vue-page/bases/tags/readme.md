# Tag input 

A nice, intuitive tag input plugin for jQuery, which degrades gracefully, when Javascript is disabled and is applied to a simple text input – no fancy HTML required. 

This plugin has been created for Zootool: <http://zootool.com> and the Kirby CMS: <http://getkirby.com>

## Demo: 

http://getkirby.com/blog/panel-tags-field/demo

## Features

- full keyboard navigation
- autocompletion
- support for local json data or remote requests
- automatic duplication avoidance 

## Usage

Include jquery, the tag input script and the stylesheet

	<link rel="stylesheet" href="/path/to/css/tags.css" type="text/css" />

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.min.js"></script>
	<script src="/path/to/js/tags.js"></script>

Create the input

	<input type="text" id="tags" name="tags" />

Initialize the plugin

	<script>
		$(function() {
			$('#tags').tagbox({
				url: '/path/to/your/tags/json'
			})
		});
	</script>

## Options

### url: 

Can be either the URL to a server side script, which provides a simple json encoded array of tags – coming from a DB for example. Or it can be a json encode local array, which is perfect if you don't have too many tags and it's ok to add them directly to the same page. 

### lowercase (default = true) 

Convert all tags to lowercase. 

### duplicates (default = false) 

Set this to true if you want to allow duplicate tags.

### separator (default = ',')

Define the separating character

### minLength (default = 1)

Define the minimum allowed length of tags

### maxLength (default = 140)

Define the maximum allowed length of tags

### classname (default = 'tagbox')

Define the css selector for the main tag box element

## Events

### onAdd(tag)

Will be triggered when a new tag is added

### onRemove(tag)

Will be triggered when a tag has been removed

### onDuplicate(tag)

Will be triggered when a user tries to add a duplicate tag

### onInvalid(tag)

Will be triggered when a user tries to add an invalid tag

### onReady()

Will be triggered when all tags have been loaded for autocompletion

## Adding initial tags

You can simple add tags to the input field like this: 

	<input type="text" id="tags" name="tags" value="design, architecture, photography" />

…which will by automatically converted to proper tag elements on load. 

## Todo: 

I believe that the plugin can be written in a more modern jQuery-way. I never dived too deep into plugin development for jQuery. So if you want to give it a look and convert a few things here and there I'd be very happy :)

## License: 

MIT License - <http://www.opensource.org/licenses/mit-license.php>


