import './parallax.scss';

const LayerTop = (props) => {
  return (
    <div className={['layer'] + ' ' + ['layer-top']}>{props.children}</div>
  );
};

export default LayerTop;
