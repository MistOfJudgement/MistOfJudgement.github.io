<!-- This is for planning purposes and will be deleted later -->
# The Personal Project Page

A website to show off all the projects I try my hand at

TypeScript, HTML, CSS 

## Problem & Purpose

I started making this site as one of my "weekly projects" during my summer of 20XX, although the consistency didn't last too long. Most of my creations are things I make for the intrinsic joy of programming and i really only share it with the friends that would understand the effort put in. A personal website can serve as a public space I can leave my projects to share more broadly. I can also use it as essentially a blog for each of the projects. 

## Technical Decisions

With the product goal being a project showcase, I also had a couple of technical goals that reflect some of my web development ideals. 

1. Progressive Enhancement

I would not call myself a front-end dev or designed simply because I don't care about how things look that much. The content should be able to stand alone. Fairly inspired by http://motherfuckingwebsite.com/ but there was also an idea that with a simple html, I could offer different stylesheets that can be swapped in. In short, everything should look good without CSS, and you can see that with the button at the bottom. JavaScript comes after CSS and I wanted to design around not always having scripts enabled.

2. Lightweight

Pages should load fast. This goal ties into progressive enhancement because raw html is like pure content. This project doesn't any existing frameworks like react so the only JavaScript being pulled in is code that actually does something. However, avoid frameworks entirely would probably lead to some duplication here and there, especially when I translate the site so it's not like I'm building every page from scratch.

3. Static Site Gen

The main effort of the project is my bespoke framework to generate the html pages from data files. Syntactically it feels similar to React but I can treat it as a pure templating engine. Having all the components defined in typescript means I also get typesafety with each page. 

In addition to the above, I also tried turning on all eslint rules. This was going to be my pet project so I knew I can take the time to deal with it. Doing this is mainly an experiment on how much if linting helps me or if im pushing against it more often, although i switched it off due to fighting it a bit too much. I did leave on strict and typedchecked rules.


## Architecture

Each component that I included is typed as a Blueprint, equivalent to a react functional component except that it just returns a string. 
```typescript
const Component: Blueprint<ComponentProps> = (props) => {
    return `Content`
}
```

Nesting components turns into calling the component function in a template string.
```typescript
const Component: Blueprint<ComponentProps> = (props) => {
    return `Content
                ${NestedComponent()}`
}
```

There are also helpers for lists of components.


Each page is simply a string which I throw into a formatter before saving to a build directory. Formatting is for my sake when debugging. I end up commiting the build directory so that I don't have to do too much effort figuring out the github action which might seem a bit funny considering the other efforts being made.


## Conclusion

Despite being a website I made, I don't think this fully or accurately reflects my web development experience due to the unconventional restrictions taken. However, having a page to be able to show others is incredibly useful and having a page for each project makes me happy to be able to explain all the little quirks that I encountered. 