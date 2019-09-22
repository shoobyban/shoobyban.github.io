---
title: Guess what!
author: Sam
type: post
date: 2005-07-26T10:37:00+00:00
url: /guess-what/
tags:
  - blog

---
Guess, what will produce this small program.

<pre style='font-family: monaco, courier new, courier;font-size:9px'>#include &lt;stdio.h&gt;
int main() {
 int a = 3;
 printf ("a is: %dn",a);
 printf ("++a + ++a: %dn", ++a + ++a );
 printf ("after this a is: %dn",a);
 int b = 3;
 printf ("b is: %dn",b);
 printf ("b++ + b++: %dn", b++ + b++ );
 printf ("after this b is: %dn",b);
 int c = 3;
 printf ("c is: %dn",c);
 printf ("c++ + ++c: %dn", c++ + ++c );
 printf ("after this c is: %dn",c);
 return 0;
}
</pre>

