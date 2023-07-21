import React from 'react';
import styles from './Octagon.scss';
import classnames from 'classnames';

interface OctagonProps {
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

const Octagon: React.FC<OctagonProps> = ({ children, disabled, onClick }) => {
  return (
    <>
      <style jsx>{styles}</style>
      <div
        className={classnames('octagon', {
          ['octagon--clickable']: !!onClick,
          ['octagon--disabled']: disabled
        })}
      >
        <div className="octagon__box">
          <p className="octagon__box__text">{children}</p>
        </div>
      </div>
    </>
  );
};

export default Octagon;
