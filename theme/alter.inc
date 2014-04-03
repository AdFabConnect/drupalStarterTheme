<?php
/**
 * @file
 * alter.inc
 *
 * Contains various implementations of hook_*_alter().
 */

/**
 * Implements hook_js_alter() to remove default bootstrap.js
 */
function drupalStarterTheme_js_alter(&$js) {
	// unset default jquery drupal
	unset($js["misc/jquery.js"]);
	// unset default bootstrap
	unset($js["sites/all/themes/bootstrap/js/bootstrap.js"]);
	
	drupal_add_js(url(NULL, array('absolute' => TRUE)) . drupal_get_path('theme', 'drupalStarterTheme') . '/boostrap-styleguide/bower_components/jquery/dist/jquery.min.js', array(
		'group' => JS_LIBRARY,
		'weight' => -20,
		'every_page' => TRUE,
		'cache' => TRUE,
		'scope' => 'header',
	));
}
