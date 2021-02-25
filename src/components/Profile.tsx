import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesConntext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/Alexandresl.png" alt="Avatar do usuário Alexandresl" />
      <div>
        <strong>Alexandre Lima</strong>
        <p>
          <img src="icons/level.svg" alt="Seta verde apontando para cima" />
          Level {level}
        </p>
      </div>
    </div>
  );
}