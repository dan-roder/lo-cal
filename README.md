# This is the entire code repository for both the Wordpress site and Angular Frontend application that runs the [Lo-Cal Kitchen website](https://www.lo-calkitchen.com)

## IMPORTANT NOTE

The most important line of code is **Line 6 of ./frontend/src/app/utils/constants.ts**. This line contains this code:
```javascript
public siteId : number = 2;
```

This siteId determines which API endpoint is used for the point of sale.
- SiteId 1 = Test API/Point of Sale
- SiteId 2 = Live API/Point of Sale system for the actual restaurant  

**The master branch should ALWAYS be SiteId 2**

## Steps to set up the Wordpress site

I use [lando](https://docs.lando.dev/) to set up the site locally. A .lando.yml file already exists when you pull the repository.

1. Clone repository from Pantheon project [Lo-Cal](https://dashboard.pantheon.io/sites/8645f154-c3a6-4a8c-b026-286e0cb3166d#dev/code)

2. CD into the Lo-Cal directory

3. Run the following commands and provide the answers to the questions as below

```bash
$ lando pull
$ Pull code from: none
$ Pull database from: Choose (dev, test, or live)
$ Pull files from: Choose (dev, test, or live)
$ lando start
```

Lando will provide you with the local URLs for the environment. If for some reason the URLs provided for the local environment aren't the same as what's in the **wp-config-local.php** file you will need to modify this local config to match those URLs

## To run the Angular Application locally

1. CD into the **frontend** directory

2. Run the following commands:

```bash
$ npm install
$ ng serve
```

**Note**: Occasionally the auto-reload will continue to compile and reload non-stop. To fix this, type Ctrl + C to stop the Angular app and run:  
```bash
$ ng build --env=prod --deploy-url="/wp-content/themes/local/dist/"
```

This builds the Angular app into the Wordpress theme. After this you can re-run `ng serve`

## Deploying Angular changes to Dev/Test/Live

Simply changing Angular component files and pushing them to this respository does not make them run within the Wordpress site. To deploy code changes you must build the application into the Wordpress theme directory. To do this run the following command:  

```bash
$ ng build --env=prod --deploy-url="/wp-content/themes/local/dist/"
```

Commit and push the resulting files to dev, test, then live.