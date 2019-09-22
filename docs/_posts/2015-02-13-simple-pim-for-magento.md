---
title: Simple Product Information Management system for Magento
author: Sam
type: post
date: 2015-02-13T07:31:56+00:00
url: /simple-pim-for-magento/
tags:
  - magento
  - PIM
  - projects

---
Product Information Management systems help you to manage product information centrally. In a sense Magento is a PIM.

Magento doesn&#8217;t allow you to have versioned product data. In most cases this is not a problem, because you want to sell based on the latest information and you have a reliable content management team. But what if this is not the case, you have computer illiterate shop assistants or old people trying to manage the site? Or you have a shop owner without Magento experience, or you want to give access to only one store view (or website) on a multi-store Magento installation?

In these cases, a customized product management system (PIM) might be the easiest solution. Most PIM systems are highly customizable, but not really easy to integrate. Having to deal with problems described above I couldn&#8217;t find off-the-shelf product that would solve my problems.

What I am working on is a small independent system:

  * version controlled product data
  * editing a filtered set of product attributes
  * editing store specific data on the same form, for translation for example
  * users are independent from Magento
  * ability to do &#8220;dirty&#8221; things like setting attribute set or product type (simple,configurable) with the grim consequences, of course

Current status of the project:

  * Authentication, simple access control
  * synchronization with Magento upon product listing with value checking – slow but safer than relying on updated_at
  * editing products, with hardcoded per store entries for main attributes (name,short_description,description)
  * editing dynamic set of attributes, synchronised from product attribute set information
  * setting attribute set any time – old attribute data gets dirty in this case
  * saving will overwrite Magento product, editing product in Magento will create a new version in PIM

Plans before the first public release:

  * discovery and configuration of stores, store specific data instead of hardcoded values, like in attributes
  * handle product creation
  * handle deletion in Magento, add way to delete products in Magento while keeping versions in PIM
  * Replace hardcoded attribute ids with dynamic ones</a> 
      * Figure out a project name</ul> 
    