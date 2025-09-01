<template>
  <div class="app">
    <header class="header">
      <h1>Vue 应用示例</h1>
      <p>使用 monorepo 中的 UI 和 Utils 包</p>
    </header>

    <main class="main">
      <section class="section">
        <h2>Utils 包演示</h2>
        <div class="utils-demo">
          <p>1 + 2 = {{ addResult }}</p>
          <p>5 - 3 = {{ subtractResult }}</p>
          <p>4 × 6 = {{ multiplyResult }}</p>
          <p>10 ÷ 2 = {{ divideResult }}</p>
        </div>
      </section>

      <section class="section">
        <h2>UI 包演示</h2>
        <div class="ui-demo">
          <button 
            class="custom-button"
            @click="handleClick"
          >
            点击我 (Vue 原生按钮)
          </button>
          
          <p class="note">
            注意：UI 包中的 React 组件不能直接在 Vue 中使用，<br>
            这里展示的是 Utils 包的使用效果
          </p>
        </div>
      </section>

      <section class="section">
        <h2>Vue 特性演示</h2>
        <div class="vue-demo">
          <p>计数器: {{ count }}</p>
          <button @click="increment" class="btn">+1</button>
          <button @click="decrement" class="btn">-1</button>
          <button @click="reset" class="btn">重置</button>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { add, subtract, multiply, divide } from 'utils'

// 响应式数据
const count = ref(0)
const addResult = ref(0)
const subtractResult = ref(0)
const multiplyResult = ref(0)
const divideResult = ref(0)

// 方法
const increment = () => count.value++
const decrement = () => count.value--
const reset = () => count.value = 0

const handleClick = () => {
  alert('Vue 按钮被点击了！')
}

// 生命周期
onMounted(() => {
  // 使用 utils 包中的函数
  addResult.value = add(1, 2)
  subtractResult.value = subtract(5, 3)
  multiplyResult.value = multiply(4, 6)
  divideResult.value = divide(10, 2)
})
</script>

<style scoped>
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.header {
  text-align: center;
  margin-bottom: 40px;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 10px;
}

.header h1 {
  margin: 0 0 10px 0;
  font-size: 2.5rem;
}

.header p {
  margin: 0;
  font-size: 1.1rem;
  opacity: 0.9;
}

.section {
  margin-bottom: 30px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.section h2 {
  color: #333;
  margin-top: 0;
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.utils-demo p {
  font-size: 1.1rem;
  margin: 10px 0;
  padding: 10px;
  background: #f8f9fa;
  border-radius: 5px;
  font-family: 'Courier New', monospace;
}

.ui-demo {
  text-align: center;
}

.custom-button {
  padding: 12px 24px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.custom-button:hover {
  background: #0056b3;
}

.note {
  margin-top: 20px;
  padding: 15px;
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 5px;
  color: #856404;
  font-size: 0.9rem;
  line-height: 1.4;
}

.vue-demo {
  text-align: center;
}

.vue-demo p {
  font-size: 1.2rem;
  margin-bottom: 20px;
  font-weight: bold;
  color: #333;
}

.btn {
  margin: 0 10px;
  padding: 10px 20px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.btn:hover {
  background: #218838;
}

.btn:last-child {
  background: #dc3545;
}

.btn:last-child:hover {
  background: #c82333;
}
</style> 