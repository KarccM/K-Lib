import React, { useState, useEffect } from 'react';

export default function Component() {
  const [buttonRef, setButtonRef] = useState();

  useEffect(() => {
    console.log({ buttonRef });
  });

  return <button ref={setButtonRef}>Click Me</button>;
}
