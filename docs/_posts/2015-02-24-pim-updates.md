---
title: PIM updates
author: Sam
type: post
date: 2015-02-24T21:52:44+00:00
url: /pim-updates/
tags:
  - magento
  - PIM
  - projects

---
In the past few weeks I have been working on the PIM (Product Management System) for my Magento instance. With the current setup we can work on the products without having to touch Magento admin.
  
Product data is versioned and synchronised both ways on every PIM product list display – this is not optimal but works well, I will probably create a cron job.
  
Attributes and attribute sets are also synchronised, CRUD is ready but I don&#8217;t want to show it on the frontend.
  
Product fields are customisable per user, but attributes are still hard-wired into the models.

