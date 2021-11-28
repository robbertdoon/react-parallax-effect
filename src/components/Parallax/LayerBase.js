import './parallax.scss';

const LayerBase = (props) => {
  return (
    <div className={['layer'] + ' ' + ['layer-base']}>{props.children}</div>
  );
};

export default LayerBase;
