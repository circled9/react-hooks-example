import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';

const None = () => {
  return (
    <div style={{
      backgroundColor: "#2e7d32",
      color: "#ffffff",
      fontSize: '64px',
    }}>
    </div>
  )
}

const Effect = () => {
  const ref = useRef(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.textContent = `useEffect`
    }
  }, [])

  return (
    <div ref={ref} style={{
      backgroundColor: "#c62828",
      color: "#ffffff",
      fontSize: '64px',
    }}>
    </div>
  )
}

const LayoutEffect = () => {
  const ref = useRef(null)
  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.textContent = `useLayoutEffect`
    }
  }, [])

  return (
    <div ref={ref} style={{
      backgroundColor: "#1565c0",
      color: "#ffffff",
      fontSize: '64px',
    }}>
    </div>
  )
}

export default () => {
  const [type, setType] = useState('none')
  return (
    <>
      <div>
        <button onClick={() => setType('none')}>none</button>
        <button onClick={() => setType('useEffect')}>useEffect</button>
        <button onClick={() => setType('useLayoutEffect')}>useLayoutEffect</button>
      </div>
      <div>
        {type === 'none' && <None />}
        {type === 'useEffect' && <Effect />}
        {type === 'useLayoutEffect' && <LayoutEffect />}
      </div>
    </>
  )
}
