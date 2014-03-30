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
  unset($js["sites/all/themes/bootstrap/js/bootstrap.js"]);
}
