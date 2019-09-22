---
title: TextWrangler PHPTidy filter
author: Sam
type: post
date: 2012-10-22T13:59:06+00:00
url: /textwrangler_phptidy_filter/
keywords:
  - phptidy, textwrangler, php tidy, filter, text editor, php indent
tags:
  - projects
  - development
  - download
  - php
  - phptidy
  - textwrangler

---
<p style="text-align: justify;">
  I love <a href="http://www.barebones.com/products/textwrangler/">TextWrangler</a>. Performance of TextWrangler is just incredible compared to the alternatives. Just try to open a few hundred megabytes long XML and do a search and replace. Others will give you the spinning beach-ball for minutes. Its only real weakness is long lines. I miss few key features, though. I&#8217;m not a big fan of BBedit, those extra features are not for me, I actually found them very distracting.
</p>

<p style="text-align: justify;">
  Of course, TextWrangler is just a text editor, not an IDE, so cannot give you code completion, nor jump to declaration. But it&#8217;s extendible with text filters. Now here, where the magic comes!
</p>

<p style="text-align: justify;">
  <a href="http://wizguild.com/wp-content/uploads/2012/10/PHPTidy.png"><img class="aligncenter size-full wp-image-144" title="PHPTidy" alt="" src="http://wizguild.com/wp-content/uploads/2012/10/PHPTidy.png" width="575" height="218" srcset="https://wizguild.com/wp-content/uploads/2012/10/PHPTidy.png 575w, https://wizguild.com/wp-content/uploads/2012/10/PHPTidy-300x113.png 300w" sizes="(max-width: 575px) 100vw, 575px" /></a>As I work with others&#8217; sometimes poorly formatted php codes I need to reformat codes from time to time. Using NetBeans just to copy-paste-reformat-copy-paste is overkill. <a href="https://github.com/cmrcx/phptidy">PHPTidy</a> is a nice tool for reformatting code, but I had to overcome few misfeatures:
</p>

  * it works with files (reading from file instead of standard input)
  * there is a non-optional argument &#8220;command&#8221;, as phptidy has lots of features
  * it does not break lines after semicolons

&#8230;so I had to tweak the code a little. I hope you will find it useful.

<p style="text-align: justify;">
  Just extract the .zip file and put the .php file into your user&#8217;s <span style="color: #000080;">Library/Application Support/TextWrangler/Text Filters</span> folder. If you can&#8217;t find Library folder (you have Lion or newer system so it&#8217;s hidden) go to your home folder (shift-command-h) then choose Go => Go to Folder&#8230; (shift-command-g), type Library and hit enter (or press the Go button). I tend to pull the folder into the Favourites bar after going there once.
</p>

Oh, yes, your download link:

[PHPTidy text filter for TextWrangler][1]

For XMLTidy I use this shell script:

<pre>#!/bin/sh
 xmllint --c14n - | XMLLINT_INDENT=$'\t' xmllint --encode UTF-8 --format -</pre>


 [1]: http://wizguild.com/wp-content/uploads/2012/10/PHPTidy.php_.zip