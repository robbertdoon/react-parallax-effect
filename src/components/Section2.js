import './section2.scss';

import LayerGroup from './Parallax/LayerGroup';
import LayerDeep from './Parallax/LayerDeep';
import LayerBack from './Parallax/LayerBack';
import LayerBase from './Parallax/LayerBase';
import LayerTop from './Parallax/LayerTop';

const Section2 = () => {
  return (
    <LayerGroup>
      <div className='backdrop'>
        <LayerBack>
          This layer is behind the base but in front of the deepest layer.
        </LayerBack>
      </div>
      <LayerBase>This is the base layer.</LayerBase>
      <LayerTop>This layer is on top of the base layer.</LayerTop>
    </LayerGroup>
  );
};

export default Section2;
