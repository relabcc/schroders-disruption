import React, { createElement, useEffect, useState } from 'react'
import { useIntersection } from 'react-use';
import AspectRatio from '../components/AspectRatio';

const LayzLoadInjector = ({ Subcomp, ratio, ...props }) => {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 1
  });
  console.log(intersection)
  const [isVisible, setIsVisible] = useState(intersection && intersection.intersectionRatio >= 1)
  useEffect(() => {
    setIsVisible(alreadyVisible => alreadyVisible || intersection.intersectionRatio >= 1)
  }, [intersection])

  return isVisible ? <Subcomp ratio={ratio} ref={intersectionRef} {...props} /> : <AspectRatio ratio={ratio} ref={intersectionRef}></AspectRatio>
}

const withLazyload = (Subcomp) => props => createElement(LayzLoadInjector, { Subcomp, ...props })

export default withLazyload
