---
title: Making custom AFP shares
author: Sam
type: post
date: 2004-09-21T17:10:00+00:00
url: /making-custom-afp-shares/
tags:
  - blog

---
I hate to make temporary users and set passwords. I have made a small shell
  
script to help me making custom AFP shares. How to use it (from Terminal):

$ mkafpshare.sh sharename /path/of/directory/to/share

You will have to type in an administrator password (script uses sudo), then
  
turn off and on Personal File Sharing in System Preferences/Sharing.

When you are connecting to your mac from another mac, choose guest, and
  
voilà, new share 🙂

Feel free to use it, but do not send me samba and ftp share making scripts,
  
you will find it easy to do 🙂

