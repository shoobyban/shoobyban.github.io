---
title: Simple session store in Go
author: Sam Ban
type: post
date: 2018-01-26T23:25:15+00:00
url: /simple-session-store-go/
tags:
  - Data Transformation
  - golang
  - Projects

---
I needed to store values in a key-value store that would persist after restarting the program. I&#8217;m not good at finding things on the internet until I know what exactly to search for.

So instead, I have written a simple package for storing my data session-like way.

<https://github.com/shoobyban/simplesession> is the result.

<pre class="lang:go decode:true ">// Simple counter program using session storage
package main
import (
    "github.com/shoobyban/simplesession"
    "fmt"
)
func main () {
    sess, err := simplesession.Load("sessionstore.data")
    if err == nil {
        z:= (*sess)["test"]
        if z != nil {
            fmt.Println(z.(int))
            sess.Set("test",z.(int)+1)
        } else {
            fmt.Println("Setting to 1, first run")
            sess.Set("test",1)
        }
    } else {
        fmt.Println(err)
    }
}</pre>

I&#8217;m not saying it&#8217;s proper Go approach (I don&#8217;t really know what is proper yet) but does the job, simple to use and I have learnt a lot writing it.

