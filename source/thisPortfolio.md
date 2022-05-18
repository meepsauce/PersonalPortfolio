title=This Portfolio
description=JS is not actually that bad 
date=5/2022
category=Gifted
status=Finished
%
# This Portfolio is a Project
### Written in NodeJS, this portfolio/blog is statically generated

This website was initally a assignment for Gifted Directed Study but I decided it was about time I made a online archive for all my projects. It would be convienent to do so, and would free space on my hard drive.

I hated using tools like Google Sites/Wix and after spending a lot of time on a web application that uses Next.js and React I decided I should try my hand at creating my own site from scratch.

**Potential Problem**: 
I have a lot of projects, and I wanted a special page for each project...

Writing HTML/JSX sucks, and while I could componentize (new word?) my code so that it is as effcient as possible, it would still suck. However, writing Markdown sucks less so I logically decided to write everything in Markdown then have a generator which converts that into "clean", pretty HTML.

Very conviently, one of my little projects from a couple years back was a Markdown -> HTML convertor and so I found the code, cringed and shoved it into a basic filesystem and web server using the classic express package.

It is really not that elaborate... the most complicted thing is how I supply minimal meta information for each project so the homepage can sort and orginize each one in a somewhat logical way

You can find the `code` **here**, its not pretty nor elegant but works well.
