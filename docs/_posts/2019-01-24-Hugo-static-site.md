---
title: "Hugo Static Site"
date: 2019-01-24T07:53:33Z
author: Sam Ban
type: post
url: /hugo-static-site/
tags:
  - blog
  - golang
  - Projects
---

I had WordPress for a myriad of years – it feels like. As my daily work involves moving clients away to other, less feature rich but more integrated solutions it became more and more pressing to check options for myself.

[Hugo][1] is written in [Go][2], a language that I chose to implement several big projects. Accidentally, Hugo became an inspiration and source for documentation when I started to look for good articles about [Go's templating language][3] that we use extensively. Turned out that Hugo, – relying on the same template parser – have [extensive documentation][4] that I could copy-paste then rewrite (read plagiarize) parts from.

As I already knew the template handling part, it became obvious – actually it was much more nuanced – that I should try Hugo for my blog as well. I was reading an article that was saying something about generating static content and had something about blogs... it clicked. I did a quick search about static site generators and Hugo came up (again).

After another quick search for `WordPress to Hugo` I knew I have [options][5]. Funny how the same people come up again and again, [Cyrill Schumacher][6] is also an active [Magento][7] community member to say the least. Anyway. After exporting the blog content I had a quick glance, making sure I will not lose too much data, everything looked ok.

Appearance is not really important for me but I have certain ideas about how a website should look like. Scrolling through the [Hugo themes][8], my first bet was on [Hugo Creative Portfolio Theme][9] but turned out that it was the worst possible starting point. Copied the theme into `themes/`, my exported content into `content/`, run `hugo server -D` (this is how you live-preview your site before generating the static content) and I ended up with an empty site.

Being curious and stubborn help a lot, checked the files again, found out that post URLs work, `/posts/` as well, so it must be something around the index page. Well, index page had no template. Must be something about how you are supposed to set up the site, I thought, so I created a `content/posts/_index.md` with this content:

```
---
url: "/"
---
```

To my surprise the site started to behave well. Few tweaks here and there, and I decided to generate the static content. Running `hugo` did that, created a `public/` folder with my files, `index.html` and many others. My next rush of adrenaline and serotonin was wasted. The `index.html` turned out to be empty, so Hugo didn't like my above hack. Trying to find some other way in the documentation was a futile attempt, I'm not really good at reading through documentation for clues – impatience? Of course no one else had this problem before!

After probably 30 minutes of embarrassing search - reading docs - reading template files - modifying template files I arrived to a point that I felt I'll need help. As Hugo is in go, [Gophers Slack][10] was my next logical step. Quickly joined `#hugo` and did a feeble attempt to explain my worries.
Waiting for my answer made me realise that I "stood up and walked away", created space for new ideas, my favourite way of solving problems. The new idea was to check other templates, how their `index.html` template look like. Gotcha!

Downloaded [Hugo Primer][11], removed my hack, checked the site, everything worked off the shelves, as it was written. Lovely! Embarrassing "Never mind, it was the template" to the Slack channel before anybody could pick up the problem. Of course Hugo Primer was not really my style, but now I was on the right track. [Beg][12] was my final choice, after removing few unnecessary parts from the html theme files I was quite happy with my attempt.

Adding menu items were a bit easier, Hugo documentation is good, in minutes I had all the right pages in the menu, by editing the content files and adding `menu: main` to their header.

Generated site looked fab, quick `scp` to the server, making backup of the WordPress folder (safety first), extracting the contents, et voila! Shiny new lightning fast blog!

[1]: https://gohugo.io
[2]: https://golang.org 
[3]: https://golang.org/pkg/text/template/
[4]: https://gohugo.io/templates/lists/
[5]: https://github.com/SchumacherFM/wordpress-to-hugo-exporter
[6]: https://github.com/SchumacherFM
[7]: https://magento.com/
[8]: https://themes.gohugo.io/
[9]: https://github.com/kishaningithub/hugo-creative-portfolio-theme
[10]: https://gophers.slack.com/
[11]: https://themes.gohugo.io/hugo-primer/ 
[12]: https://github.com/dim0627/hugo_theme_beg