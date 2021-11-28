import './parallax.scss';

const LayerBack = (props) => {
  return (
    <div className={['layer'] + ' ' + ['layer-back']}>{props.children}</div>
  );
};

export default LayerBack;
