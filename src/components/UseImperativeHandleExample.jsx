import React, {forwardRef, useImperativeHandle, useRef} from "react";

function FancyInput(props, ref) {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}
FancyInput = forwardRef(FancyInput);

const UseImperativeHandleExample = () => {
  const inputEl = useRef(null);
  const onClick = () => inputEl.current.focus();

  return (
    <>
      <button onClick={onClick}>Click</button>
      <FancyInput ref={inputEl} />
    </>
  );
}

export default UseImperativeHandleExample;
