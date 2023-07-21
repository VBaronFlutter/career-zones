import React from 'react';
import styles from './Arrow.scss';
import classnames from 'classnames';

interface ArrowProps {
  children: React.ReactNode;
  type?: 'default' | 'back';
  disabled?: boolean;
}
/**
 *  Example of use
    <Link href="/back">
        <Arrow type="back">Back</Arrow>
      </Link>
 */
const Arrow: React.FC<ArrowProps> = ({ children, type = 'default', disabled }) => {
  return (
    <>
      <style jsx>{styles}</style>
      <span
        className={classnames('arrow', {
          ['arrow--default']: type === 'default',
          ['arrow--back']: type === 'back',
          ['arrow--disabled']: disabled
        })}
      >
        <span className="arrow__text">{children}</span>
      </span>
    </>
  );
};

export default Arrow;
