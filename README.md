# Shopware 5

[![Build Status](https://travis-ci.org/shopware/shopware.svg?branch=5.1)](https://travis-ci.org/shopware/shopware)

- **License**: Dual license AGPL v3 / Proprietary
- **Github Repository**: <https://github.com/shopware/shopware>
- **Issue Tracker**: <http://jira.shopware.de/jira>

## Overview

![Shopware 5 collage](http://cdn.shopware.de/github/readme_screenshot.png)

Shopware 5 is the next generation of open source e-commerce software made in Germany. Based on bleeding edge technologies like `Symfony 2`, `Doctrine 2` & `Zend Framework` Shopware comes as the perfect platform for your next e-commerce project.
Furthermore Shopware 5 provides an event-driven plugin system and an advanced hook system, giving you the ability to customize every part of the platform.

Visit the forum at <http://forum.shopware.com/>

### Shopware Server Requirements

- PHP 5.4.0 or above
- PHP's `cURL` and `GD` library
- An Apache web server
- Apache's `mod_rewrite` module
- MySQL 5.5.0 or above

### Installation via Git

Follow the instruction below if you want to install Shopware 5 using Git.

1.) Clone the git repository to the desired location using:

    git clone https://github.com/shopware/shopware.git

In case you wish to contribute to Shopware, fork the `5.0` branch rather than cloning it, and create a pull request via Github. For further information please read the section "Get involved" of this document.

2.) Set the correct directory permissions:

    chmod 755 config.php
    chmod -R 755 var
    chmod -R 755 web
    chmod -R 755 files
    chmod -R 755 media
    chmod -R 755 engine/Shopware/Plugins/Community

Depending on your server configuration, it might be necessary to set whole write permissions (777) to the files and folders above.
You can also start testing with lower permissions due to security reasons (644 for example) as long as your php process can write to those files.

3.) An [Ant](http://ant.apache.org/) Buildfile is used to set up the configuration and database connection:

    cd build/
    ant configure
    ant build-unit

4.) Download the test images and extract them:

Go to the checkout directory and download the test images:

	wget -O test_images.zip http://releases.s3.shopware.com/test_images.zip

Unzip the files to the checkout directory:

	unzip test_images.zip

You can now access your shop

Backend Login: demo/demo

The test_images.zip file includes thumbnails for the new responsive theme and the old deprecated template.

If you want to have full featured demo data, you should download the respective demo data plugin in the First Run Wizard or in the Plugin Manager.

# Get involved

Shopware is available under dual license (AGPL v3 and proprietary license). If you want to contribute code (features or bugfixes), you have to create a pull request and include valid license information. You can either contribute your code under New BSD or MIT license.

If you want to contribute to the backend part of Shopware, and your changes affect or are based on ExtJS code, they must be licensed under GPL V3, as per license requirements from Sencha Inc.

If you are not sure which license to use, or want more details about available licensing or the contribution agreements we offer, you can contact us at <contact@shopware.com>.

For more information about contributing to Shopware, please see [CONTRIBUTING.md](CONTRIBUTING.md).


### How to report bugs / request features?

We've always had a sympathetic ear for our community, so please feel free to submit tickets with bug reports or feature requests. In order to have a single issue tracking tool, we've decided to close the GitHub issue panel in favor of our Jira issue tracker, which is directly connected to our development division.

* [Shopware Jira ticket submit form](http://jira.shopware.de/jira)

# Copying / License

Shopware is distributed under a dual license (AGPL v3 and proprietary license). You can find the whole license text in the `license.txt` file.

# Changelog

The changelog and all available commits are located under <https://github.com/shopware/shopware/commits/5.1>.

## Further reading

* [Shopware AG](http://www.shopware.com) - Homepage of shopware AG
* [Shopware Developer Documentation](https://devdocs.shopware.com/)
* [Shopware Wiki](http://wiki.shopware.com) - Shopware Wiki
* [Shopware Forum](http://forum.shopware.com) - Community forum
* [Shopware Marketplace](http://store.shopware.com) - Shopware Store
