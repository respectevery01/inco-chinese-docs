import React from 'react';
import clsx from 'clsx';
import { useHistory } from 'react-router-dom'; // 导入React Router v5的useHistory
import styles from './CardOption.module.css';

export default function CardOption({ 
  title, 
  description, 
  children, 
  link,        // 新增：跳转链接
  external = false  // 新增：是否为外部链接，默认false
}) {
  const history = useHistory();

  const handleClick = () => {
    if (!link) return; // 如果没有链接则不执行操作
    
    if (external) {
      // 外部链接在新窗口打开
      window.open(link, '_blank', 'noopener noreferrer');
    } else {
      // 内部链接使用路由跳转
      history.push(link);
    }
  };

  return (
    <div
      className={clsx(
        styles.card,
        'hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1',
        // 增加点击反馈样式：悬停时上移1px
      )}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && handleClick()} // 支持键盘Enter键点击
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {children}
      {/* 外部链接显示图标 */}
      {external && link && (
        <span className={styles.externalIcon}>↗</span>
      )}
    </div>
  );
}
