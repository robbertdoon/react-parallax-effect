import LayerGroup from './Parallax/LayerGroup';
import LayerDeep from './Parallax/LayerDeep';
import LayerBack from './Parallax/LayerBack';
import LayerBase from './Parallax/LayerBase';
import LayerTop from './Parallax/LayerTop';

const Section1 = () => {
  return (
    <LayerGroup>
      <LayerDeep>
        This is the layer furthest in the back
        <br />
        (scale turned on).
      </LayerDeep>
      <LayerBack>
        This layer is behind the base but in front of the deepest layer.
      </LayerBack>
      <LayerBase>This is the base layer.</LayerBase>
      <LayerTop>This layer is on top of the base layer.</LayerTop>
    </LayerGroup>
  );
};

export default Section1;
