# This is the entire code repository for both the Wordpress site and Angular Frontend application that runs the [Lo-Cal Kitchen website](https://www.lo-calkitchen.com)

# WordPress

I use lando to set up the site locally. A .lando.yml file already exists when you pull the repository.

## Steps to set up the Wordpress site

1. Clone repository from Pantheon project [Lo-Cal](https://dashboard.pantheon.io/sites/8645f154-c3a6-4a8c-b026-286e0cb3166d#dev/code)

2. CD into the Lo-Cal directory

3. Run the following commands and provide the answers to the questions as below

`lando pull`  
Pull code from: `none`  
Pull database from: dev, test, or live  
Pull files from: dev, test, or live  

4. Once the database and files have been pulled run `lando start`

## To run the Angular Application locally

1. CD into the **frontend** directory

2. Run the following commands:

`npm install`  
`ng serve`

Note: Occasionally the auto-reload will continue to compile and reload non-stop. To fix this, type Ctrl + C to stop the Angular app and run:  
`ng build --env=prod --deploy-url="/wp-content/themes/local/dist/"`  
This builds the Angular app into the Wordpress theme. After this you can re-run `ng serve`

### 1. Spin-up a site

If you do not yet have a Pantheon account, you can create one for free. Once you've verified your email address, you will be able to add sites from your dashboard. Choose "WordPress" to use this distribution.

### 2. Load up the site

When the spin-up process is complete, you will be redirected to the site's dashboard. Click on the link under the site's name to access the Dev environment.

![alt](http://i.imgur.com/2wjCj9j.png?1, '')

### 3. Run the WordPress installer

How about the WordPress database config screen? No need to worry about database connection information as that is taken care of in the background. The only step that you need to complete is the site information and the installation process will be complete.

We will post more information about how this works but we recommend developers take a look at `wp-config.php` to get an understanding.

![alt](http://i.imgur.com/4EOcqYN.png, '')

If you would like to keep a separate set of configuration for local development, you can use a file called `wp-config-local.php`, which is already in our .gitignore file.

### 4. Enjoy!

![alt](http://i.imgur.com/fzIeQBP.png, '')

