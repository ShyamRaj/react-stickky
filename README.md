# React-Stickky

[![Build Status](https://travis-ci.org/ShyamRaj/react-stickky.svg?branch=master)](https://travis-ci.org/ShyamRaj/react-stickky)

> A simple React sticky component


### [Live Demo](http://embed.plnkr.co/XvIwT0cAhEFxRL3clq7D/)


### Description
 Wrap any code within and pass css styles

 ```
 <Sticky>
    <h1>Now I'm sticky</h1>
 </Sticky>
 ```
 and it will be sticky

 ### To make it sticky at the Top of the page
 ```
 .stickyStyle {
   backgroundColor: '#FFF',
   top: '0'
 }

 <Sticky className="stickyStyle">
 	This is a React component!
 </Sticky>

 ```

 ### To make it sticky at the Bottom of the page
 ```
 .stickyStyle {
   backgroundColor: '#FFF',
   bottom: '0'
 }

 <Sticky className="stickyStyle">
 	This is a React component!
 </Sticky>

 ```

 ### Using other optional properties
 ```
 <Sticky
      className={style}
      scrollIndex="100"
      stickyWidth="100%"
      isSticky={props.isChecked}
 >
 </Sticky>
 ```

 ### Propterties are optional
 - **className** - Any CSS styles needed to pass down to child components
 - **scrollIndex** - @scrollIndex y=100 the stickyness will apply to the wrapped component
 - **isSticky** - A function that takes true or false to toggle stickyness
 - **stickyWidth** - Takes width if passed or defaults to 100%
