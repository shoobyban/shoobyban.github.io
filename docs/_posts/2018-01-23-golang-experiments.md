---
title: Golang experiments, Data Transformation
author: Sam Ban
type: post
date: 2018-01-23T16:56:08+00:00
url: /golang-experiments/
tags:
  - blog
  - Data Transformation
  - golang
  - Projects

---
Wow, two years without (published) post!

I&#8217;ve started to experiment with Go in the meantime. I have to admit I&#8217;m far from being able to write good code in Go, not that I could tell this from any other programming languages, but hey, it&#8217;s something.

As my normal day job involves some backend here and there and we are doing some serious ETL magic, I had to look around for a transformation language.

I suck at googling, took me ~ a month to figure out what to look for&#8230; anyway. By luck, I found Emlyn O&#8217;Regan&#8217;s older project, bOTL. (<https://www.etltools.net/wiki/display/dataintegration/Data+Transformation+Languages> was quite helpful as source)

Unfortunately, nothing in Go, so I quickly ported the javascript version: <https://github.com/shoobyban/botl>

Of course after porting it I realised I should check the author&#8217;s site for more info, tests etc&#8230; and realised that he has a new language, <http://www.sutllang.com>

Sutl (sUTL Universal Transform Language) is a bit harder to port (bigger and I have spent my willpower on botl) and to be honest I don&#8217;t like the syntax changes much.

Maybe later.

