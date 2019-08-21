import React, { useEffect } from 'react';

import api from '../../services/api';

export default function Home({match}) {
  const { link } = match.params;

  useEffect(() => {
    async function getLink() {
      console.log('init')

      try {
        const response = await api.get(`/${link}`)

        const { redirect_url } = response.data;
        
        if(redirect_url){
          window.location.href = redirect_url;
        }
      } catch (error) {
        
      }
      
      window.location.href = 'https://app.sene.li';

    }

    getLink();
  }, [link]);

  return (
    <div />
  );
}
