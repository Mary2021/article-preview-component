# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./design/desktop-preview.jpg)

### Links

- Solution URL: [https://github.com/Mary2021/article-preview-component](https://github.com/Mary2021/article-preview-component)
- Live Site URL: [https://mary2021.github.io/article-preview-component/](https://mary2021.github.io/article-preview-component/)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I learned adding and removing classes with JavaScript:

```js
function hide() {
    const container = document.getElementById('authorContainer')
    container.classList.add("hidden") 
    const shareContainer = document.getElementById('shareContainer')
    shareContainer.classList.remove("hidden")
}
```

### Useful resources

- [How to Manipulate the DOM in JavaScript – Most Commonly Used Techniques](https://www.freecodecamp.org/news/javascript-document-object-model-explained/)


## Author

- Website - [Mary P](https://github.com/Mary2021)
