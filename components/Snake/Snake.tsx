import React from 'react';
import styles from './Snake.scss';
import Rib from './components/Rib';

interface SnakeProps {
  children?: React.ReactNode;
}

interface Static {
  Rib: typeof Rib;
}

const Snake: React.FC<SnakeProps> & Static = ({ children }) => {
  return (
    <>
      <style jsx>{styles}</style>
      <div className={'snake'}>
        <div className="snake__content">{children}</div>
      </div>
    </>
  );
};
Snake.Rib = Rib;
export default Snake;
