---
title: Cache warmup based on sitemap
author: Sam
type: post
date: 2013-10-18T09:26:42+00:00
url: /cache-warmup-based-on-sitemap/
keywords:
  - cache warmup, sitemap, ruby
description:
  - Warming up cache based on sitemap.xml
tags:
  - cache
  - magento
  - ruby
  - warmup

---
I work with multiple sites without cache warmup technology. So I created one.
  
Don&#8217;t be mislead, it&#8217;s simple.

Basic usage:
  
`<br />
$ ./warmup.rb www.someurl.tld<br />
` 

It will

  * download http://www.someurl.tld/sitemap.xml
  * parse that sitemap for urls
  * run through that list of urls, downloading every HTML to warmup the cache

For further information and the code check up the [Github repository][1]


 [1]: https://github.com/ShoobyBan/CacheWarmUp