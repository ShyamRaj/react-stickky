import React, { useEffect, useRef, useState} from "react";
import debounce from "debounce";
import PropTypes from "prop-types";

const Sticky = ({ className, scrollIndex, stickyWidth, children }) => {
    const stickyRef = useRef(null);
    const [scrollLock, setScrollLock] = useState(false);
    const [width, setWidth] = useState();


    useEffect(() => {
        const calculateWidth = () => {
            const elementWidth = stickyRef.current.getBoundingClientRect().width;

            if (elementWidth !== width) {
                debounce(setWidth(elementWidth ? elementWidth : '100%'), 10);
            }
        }

        const calculateAndGetScrollIndex = () => {
            const elementTop = stickyRef.current.getBoundingClientRect().top;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const calculatedScrollIndex = scrollIndex ? scrollIndex : elementTop + scrollTop;

            return scrollIndex ? scrollIndex : calculatedScrollIndex;
        }

        const handleScroll = () => {
            const scrollBuffer = 10;
            const sIndex = calculateAndGetScrollIndex();

            if (window.pageYOffset + scrollBuffer > sIndex) {
                debounce(setScrollLock(true), 10);
            } else if (window.pageYOffset - scrollBuffer < sIndex) {
                debounce(setScrollLock(false), 10);
            }
        }

        calculateWidth();

        // initiate the event handler
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', calculateWidth);

        // this will clean up the event every time the component is re-rendered
        return () => {
            setScrollLock(false);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', calculateWidth);
        }
    }, [scrollIndex]);

    const styles = {
        top: 0
    }

    return <div ref={stickyRef}>
      <span
          style={{
              width: stickyWidth  && scrollLock ? stickyWidth : width,
              zIndex: 100000,
              position: scrollLock ? "fixed" : "relative"
          }}
          className={scrollLock ? className : null}
      >
        {children}
      </span>
    </div>
}

Sticky.propTypes = {
    className: PropTypes.any,
    scrollIndex: PropTypes.number,
    stickyWidth: PropTypes.string,
    children: PropTypes.any
};

export default Sticky;
