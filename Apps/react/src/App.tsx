import React from 'react';
import { HButton } from 'ui';
import { add } from 'utils';

// 直接在文件中定义 Button 组件，避免导入问题
const InlineButton = ({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) => (
  <button 
    onClick={onClick}
    style={{
      padding: '10px 20px',
      backgroundColor: '#3b82f6',
      color: 'white',
      border: 'none',
      borderRadius: '6px',
      cursor: 'pointer',
      margin: '5px'
    }}
  >
    {children}
  </button>
);

function App() {
  const result = add(1, 2);
  const handleClick = () => {
    alert('按钮被点击了！');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1 style={{ color: '#333', marginBottom: '30px' }}>
        最简单的 React 应用
        {result}
      </h1>
         
      <div style={{ marginBottom: '20px' }}>
        <h3>内联 Button 组件：</h3>
        <InlineButton onClick={handleClick}>
          内联按钮
        </InlineButton>
        <HButton onClick={handleClick}>
          HButton 组件
        </HButton>
      </div>
    </div>
  );
}

export default App; 