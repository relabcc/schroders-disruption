import React, { createElement, useEffect, useState } from 'react'
import { useIntersection } from 'react-use';
import AspectRatio from '../components/AspectRatio';

const LayzLoadInjector = ({ Subcomp, ratio, ...props }) => {
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  });
  const [isVisible, setIsVisible] = useState(intersection && intersection.isIntersecting)
  useEffect(() => {
    setIsVisible(alreadyVisible => alreadyVisible || (intersection && intersection.isIntersecting))
  }, [intersection])

  return (
    <AspectRatio ratio={ratio} ref={intersectionRef}>
      {isVisible ? <Subcomp ratio={ratio} {...props} /> : null}
    </AspectRatio>
  )
}

const withLazyload = (Subcomp) => props => createElement(LayzLoadInjector, { Subcomp, ...props })

export default withLazyload
