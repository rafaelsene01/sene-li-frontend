import React, { useEffect } from 'react';

export default function PageNotFound() {

  useEffect(() => {
 
    window.location.href = 'https://app.sene.li';

  }, []);
  
  return (
    <div />
  );
}
