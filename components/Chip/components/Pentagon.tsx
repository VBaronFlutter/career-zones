import React from 'react';
import styles from './Pentagon.scss';
import classnames from 'classnames';

type Place =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-right'
  | 'bottom-left';

interface PentagonProps {
  disabled?: boolean;
  onClick?: () => void;
  place?: Place;
  type?: 'primary' | 'secondary' | 'default';
}

const Pentagon: React.FC<PentagonProps> = ({
  place = 'top',
  disabled,
  type = 'default',
  onClick
}) => {
  return (
    <>
      <style jsx>{styles}</style>
      <div
        className={classnames('pentagon', {
          [`pentagon--${place}`]: place,
          [`pentagon--${type}`]: type,
          [`pentagon--clickable`]: !!onClick,
          // [`pentagon--pulse`]: !!onClick,
          [`pentagon--disabled`]: disabled
        })}
      >
        <div className="pentagon__box"></div>
        <button className="pentagon__box-click" onClick={onClick} disabled={disabled}></button>
      </div>
    </>
  );
};

export default Pentagon;
