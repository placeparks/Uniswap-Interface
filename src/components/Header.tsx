import React from 'react';
import { chainId, useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import Button from './Button';
import styles from './Header.module.css';

const Header = () => {
  const { address } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
    chainId: chainId.goerli,
  });
  const { disconnect } = useDisconnect();

  return (
    <header className={styles.header}>
      {address ? (
        <>
          <p style={{marginRight:'1rem'}}>Connected to: {address.slice(0,9)}...</p>
          <Button onClick={disconnect}>Disconnect</Button>
        </>
      ) : (
        <Button onClick={connect}>Connect wallet</Button>
      )}
    </header>
  );
};

export default Header;
