import React from 'react';
import ReactDOM from 'react-dom/client';
import { HButton } from './index';

function App() {
  const handleClick = () => {
    alert('HButton 被点击了！');
  };

  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <h1 style={{ 
        color: '#333', 
        marginBottom: '40px',
        fontSize: '2.5rem'
      }}>
        UI 组件库演示
      </h1>
      
      <div style={{ 
        backgroundColor: 'white', 
        padding: '30px', 
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h2 style={{ 
          color: '#555', 
          marginBottom: '30px',
          fontSize: '1.8rem'
        }}>
          HButton 组件展示
        </h2>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#666', marginBottom: '15px' }}>基础按钮：</h3>
          <HButton onClick={handleClick}>
            点击我
          </HButton>
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#666', marginBottom: '15px' }}>多个按钮：</h3>
          <HButton onClick={handleClick}>
            按钮 1
          </HButton>
          <HButton onClick={handleClick}>
            按钮 2
          </HButton>
          <HButton onClick={handleClick}>
            按钮 3
          </HButton>
        </div>
        
        <div style={{ 
          marginTop: '40px', 
          padding: '20px', 
          backgroundColor: '#f8f9fa',
          borderRadius: '8px'
        }}>
          <h4 style={{ color: '#666', marginBottom: '10px' }}>组件特性：</h4>
          <ul style={{ 
            textAlign: 'left', 
            color: '#666',
            lineHeight: '1.6'
          }}>
            <li>✅ 响应式点击事件</li>
            <li>✅ 美观的样式设计</li>
            <li>✅ 支持自定义文本内容</li>
            <li>✅ 完全可定制的样式</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// 渲染到 DOM
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} 