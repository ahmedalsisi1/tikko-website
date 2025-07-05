
'use client';

import { useState } from 'react';

export default function ClaimTikko() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [claimed, setClaimed] = useState(false);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletConnected(true);
      } catch (error) {
        console.error("Wallet connection failed", error);
      }
    } else {
      alert("Please install MetaMask");
    }
  };

  const claimTokens = () => {
    if (!walletConnected) {
      alert("Connect wallet first.");
      return;
    }
    // عملية رمزية – حقيقية لاحقًا على العقد
    setClaimed(true);
  };

  return (
    <main style={{
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      height: '100vh', backgroundColor: '#000', color: '#FFD700',
      fontFamily: 'Arial'
    }}>
      <h1 style={{ fontSize: '3rem' }}>Claim Your Tikko</h1>
      <p style={{ fontSize: '1.2rem' }}>Early supporters receive 25 TKO as a gift</p>

      {!walletConnected ? (
        <button onClick={connectWallet} style={buttonStyle}>Connect Wallet</button>
      ) : !claimed ? (
        <button onClick={claimTokens} style={buttonStyle}>Claim 25 TKO</button>
      ) : (
        <p style={{ marginTop: '20px', color: '#0f0' }}>✅ You claimed your Tikko!</p>
      )}
    </main>
  );
}

const buttonStyle = {
  marginTop: '20px',
  padding: '12px 24px',
  fontSize: '1rem',
  backgroundColor: '#FFD700',
  color: '#000',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer'
};
