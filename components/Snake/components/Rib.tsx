import React from 'react';
import styles from './Rib.scss';
import classnames from 'classnames';

interface RibProps {
  children?: React.ReactNode;
  label: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'reverse';
  size?: 'small' | 'medium' | 'large';
  connect?: boolean;
}

const Rib: React.FC<RibProps> = ({ label, size, children, disabled, type, connect, onClick }) => {
  return (
    <>
      <style jsx>{styles}</style>
      <div
        className={classnames('rib', {
          ['rib--disabled']: disabled,
          [`rib--${type}`]: type,
          [`rib--size-${size}`]: !!size,
          [`rib--clickable`]: !!onClick,
          [`rib--connector`]: connect
        })}
        onClick={onClick}
      >
        <div className="rib__content">
          <div className="rib__content-circle">
            <div className="rib__content-circle-top" />
            <div className="rib__content-circle-bottom" />
            <div className="rib__content-circle-inner" />
          </div>
          <div className="rib__content-text">{label}</div>
          <div className="rib__content-connector"></div>
        </div>
        <div className="rib__footer">{children}</div>
      </div>
    </>
  );
};

export default Rib;
