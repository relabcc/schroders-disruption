import React, { useRef, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

import isIE from '../../components/utils/isIE'
import { parseViewbox } from '../../components/SVG'

const IEnhance = ({ children, isMobile }) => {
  const container = useRef()
  useEffect(() => {
    const svgEles = container.current.querySelectorAll('svg')
    Array.prototype.forEach.call(svgEles, (svgEle) => {
      const r = parseViewbox(svgEle.getAttribute('viewBox'))

      const ro = new ResizeObserver((entries) => {
        const { width } = entries[0].contentRect
        svgEle.style.width = `${width}px`
        svgEle.style.height = `${width * r}px`
      });
      ro.unobserve(container.current)
      ro.observe(container.current)
    });
  }, [isMobile])
  return (
    <div ref={container}>
      {children}
    </div>
  );
};

export default (SubComp) => isIE ? props => <IEnhance isMobile={props.isMobile}><SubComp {...props} /></IEnhance> : SubComp;
