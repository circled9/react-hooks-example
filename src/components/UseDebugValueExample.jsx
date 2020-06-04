import React, {useDebugValue, useEffect, useState} from 'react';

function useCursorPosition() {
  const [position, setPosition] = useState({x: 0, y: 0});
  useDebugValue(position);

  const onMouseMove = (e) => setPosition({
    x: e.clientX,
    y: e.clientY,
  });
  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, [])
  return position;
}

function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useDebugValue(size);

  const onResize = () => setSize({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return size;
}

export default () => {
  const size = useWindowSize();
  const position = useCursorPosition();

  const h = Math.round(position.x / size.width * 360);
  const s = Math.round(position.y / size.height * 100);

  return (
    <h1 style={{
      color: `hsl(${h}, ${s}%, 50%)`,
      textAlign: 'center,'
    }}>
      UseDebugValue Example
    </h1>
  )
}
