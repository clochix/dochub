# DocHub - speedy docs
======================

[![Build Status](https://travis-ci.org/neiesc/dochub.png?branch=master)](https://travis-ci.org/neiesc/dochub)
[![Dependency Status](https://gemnasium.com/neiesc/dochub.png)](https://gemnasium.com/neiesc/dochub)
<br />[DocHub](http://neiesc.github.io/dochub/) on GitHub Pages

## Running locally

* Download de [docfiles](https://github.com/neiesc/dochub/tree/gh-pages) `*.json` and paste in `static/data`
* Run the server:

        npm install -g nodemon
        npm install # downloads dependencies for web server
        npm start
* Open `http://localhost:5000/` in your browser.

## Scraper

The `static/data/` directory contains our scrape of the sites we get content from. Right now we don't update this very often. If you want the most up-to-date content, you can run the scrapers:

    cd scraper
    npm install # downloads dependencies for scrapers
    node you-scrape.js

## Notes

How to use the `r.js` optimizer:

    node node_modules/requirejs/bin/r.js -o static/js/app.build.js

Make sure the node server is serving the correct static folder
(whether you want `/static` or `/static-build`).

## License

Licensed under the [GNU Affero General Public License](https://github.com/neiesc/dochub/blob/master/LICENSE).
