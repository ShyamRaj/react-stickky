# React-Stickky

> A simple React sticky component

### Description
 Wrap any code within `<StickyHeader></StickyHeader>` and it will be sticky

 ```
 <StickyHeader
      className={style}
      scrollIndex="100"
      isSticky={props.isChecked}
 >
 </StickyHeader>
 ```

 ### Options
 - **className** - Any CSS styles needed to pass down to child components
 - **scrollIndex** - @scrollIndex y=100 the stickyness will apply to the wrapped component
 - **isSticky** - A function that takes true or false to toggle stickyness
