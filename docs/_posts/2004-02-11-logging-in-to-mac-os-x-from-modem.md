---
title: Logging in to Mac OS X from modem
author: Sam
type: post
date: 2004-02-11T14:33:00+00:00
url: /logging-in-to-mac-os-x-from-modem/
tags:
  - blog

---
I got a support call from my old friend, Meszi. He has a customer who wanted
  
to use his Mac server from a modem connection. After a sort search I found
  
mgetty has been ported to Mac OS X. The link is here:

http://www.leo.org/~doering/mgetty/

I had to change Makefile a bit (there is no fax and modem user or group), I
  
bet nobody will be enough.
  
On panther I had to remove an &#8220;extern int sys_nerr;&#8221; from the logfile.c,
  
too.

After make install I had to make the terminal entries in /etc/inittab, but
  
after this I had no time to test it&#8230;

