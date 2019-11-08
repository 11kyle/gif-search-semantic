import React from 'react';
import GIF from './GIF';
import NoGIFs from './NoGIFs';
import { Image } from 'semantic-ui-react';

const GIFList = props => { 
  
  const results = props.data;
  let gifs;
  if (results.length) {
    gifs = results.map(gif => <GIF url={gif.images.fixed_height.url} key={gif.id} />);    
  } else {
    gifs = <NoGIFs />
  }

  return(
    <Image.Group size="medium">
      {gifs}
    </Image.Group> 
  );
}

export default GIFList;