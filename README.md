drupal-starter-theme
====================

Drupal starter theme to work better, faster with drupal

Requiere :
- boostrap 3 drupal theme
- npm installed
- bower installed
- grunt installed

How to install
====================

Clone the repository into site/ [ YOU FOLDER / OR all ]/themes

Then run bower install

Activate the theme

How to use
====================

Configure grunt before using it. Edit package.json file and change your host url

```
    "localConfig": {
        "host": "http://[ DOMAIN ]/",
        "pathToTheme": "[ PATH TO THEME ]"
    }
````
then run grunt command

Features
====================
You can now :
- Edit code in chrome browser directly (if you configure it to find you less file)
- Create a custom install of bootstrap theme using "less/bootstrap/variables.less" by changing variables values
- Create a custom js install of bootstrap by removing unused file into drupalStarterTheme.info (under theme scripts comment)
