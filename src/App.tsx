
import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Nam');
  const clickChangeName = () => {
    // const countTmp = count + 1; // kiểu dữ liệu dạng số
    // const count2 = count + "aaaa"; // 0aaaaa
    // setCount(countTmp)
    setName('Minh');
  }
  return (
    <>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div> Tôi tên là {name}</div>
      <button onClick={clickChangeName}>
          Thay đổi tên
      </button>
    </>
  )
}

export default App




