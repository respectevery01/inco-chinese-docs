// src/components/HomepageFeatures.js
import React from 'react';
import FeatureCard from '../FeatureCard';
import { LockIcon, CodeIcon, ShieldIcon } from '../Incos';
import styles from './styles.module.css';


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.cardContainer}>
          <FeatureCard
            icon={<LockIcon />}
            title="私有应用场景"
            description="在支付、DeFi、治理、游戏等领域构建新型隐私去中心化应用。"
          />
          <FeatureCard
            icon={<CodeIcon />}
            title="开发者友好"
            description="通过我们易于使用的 SDK，用 Solidity 编写机密智能合约。"
          />
          <FeatureCard
            icon={<ShieldIcon />}
            title="可扩展且安全"
            description="构建具有企业级安全性和隐私保护的可扩展应用程序。"
          />
        </div>
      </div>
    </section>
  );
}