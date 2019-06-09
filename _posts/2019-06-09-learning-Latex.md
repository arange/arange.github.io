---
layout: post
title: Learning Latex
subtitle: Notes
tags: [latex,learn,note,academic]
---

# Long URL in bibliography section
## Problem
Recently I find it really annoying having the urls in my citation exceeding the page bounds. This happens particularly when I'm using the bibliography style of "**IEEEtran**".  
Here are my **settings** before solving the problem:
```md
Software: [overleaf](http://overleaf.com) [online]  
Compiler: pdfLaTex  
Bibliographystyle: IEEEtran  
```

This is what it looks like:  

![Wrong Format](https://arange.github.io/img/posts/2019-06-09-learning-latex/wrong-format.png)

_As you can see, the two lines end with black blocks exceed the page bound._

## Solution
The solution is so simple as you just need to add the following line in your latex text:  
```md
\usepackage[hyphens]{url}
```






