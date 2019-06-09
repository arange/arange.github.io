---
layout: post
title: Learning Latex
subtitle: Notes
tags: [latex,learn,note,academic]
---

* TOC
{:toc}

# Long URL in bibliography section

{: .box-note}
**Topic:** pdfLaTex / IEEEtran style

## Problem
Recently I find it really annoying having the _**urls in my citation exceeding the page bounds**_.

This is how the **wrong format** looks like:  

![Wrong Format](/img/posts/2019-06-09-learning-latex/wrong-format.png)

_As you can see, the two lines end with black blocks exceed the page bound._


## Environment
```
	Software: overleaf [online]  
	Compiler: pdfLaTex  
	Bibliography Style: IEEEtran  
```

> I've also got a separate **.bib** file to store all my references.

ps: If you are using desktop software to write latex articles, I strongly recommend you to shift to online editors like [overleaf](http://overleaf.com). It saves your time installing all the packages locally and the online compling speed is way faster.

## Solution
Thanks to [Mico's answer on stackexchange](https://tex.stackexchange.com/a/88672), I finally solved this problem after some unsuccessful attempts including [importing the **breakcites** package](https://tex.stackexchange.com/a/2774).

**The solution is so simple** as you just need to add the following line in your latex text:  
```
\usepackage[hyphens]{url}
```

Here we are! Now this is it:  

![Correct Format](/img/posts/2019-06-09-learning-latex/correct-format.png)

Looks just great!

> Btw, I need to look at url hyphenation later. Chances are I'll write another article about how it works.

# Ugly alignment in bibliography section caused by long url

{: .box-note}
**Topic:** alignment

Same [Environment](#environment) as before.

## Problem

Again, this is how the **wrong alignment** looks like:

![Wrong Alignment](/img/posts/2019-06-09-learning-latex/wrong-alignment.png)

_The compiler is really struggling with indenting the url correctly, but somehow it still did it wrong._

## Solution

This [answer from Will Robertson](https://tex.stackexchange.com/a/2780) introduces the magical package **microtype** which perfectly solved the problem. [More details about microtype here](https://ctan.org/pkg/microtype).

Again, add this line to your latex text if you have the same issue:

```
\usepackage{microtype}
```

It should be like this once correctly imported the package:

![Correct Alignment](/img/posts/2019-06-09-learning-latex/correct-alignment.png)
