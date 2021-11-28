import './parallax.scss';

const LayerDeep = (props) => {
  return (
    <div className={['layer'] + ' ' + ['layer-deep']}>{props.children}</div>
  );
};

export default LayerDeep;
