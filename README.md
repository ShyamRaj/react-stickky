# React-Stickky

[![Build Status](https://travis-ci.org/ShyamRaj/react-stickky.svg?branch=master)](https://travis-ci.org/ShyamRaj/react-stickky)

> A simple React sticky component

### Description
 Wrap any code within 
 
 ```
 <Sticky>
    <h1>Now I'm sticky</h1>
 </Sticky>
 ``` 
 and it will be sticky

 ```
 <Sticky
      className={style}
      scrollIndex="100"
      stickyWidth="100%"
      isSticky={props.isChecked}
 >
 </Sticky>
 ```

 ### Options are optional
 - **className** - Any CSS styles needed to pass down to child components
 - **scrollIndex** - @scrollIndex y=100 the stickyness will apply to the wrapped component
 - **isSticky** - A function that takes true or false to toggle stickyness
 - **stickyWidth** - Takes width if passed or defaults to 100%
