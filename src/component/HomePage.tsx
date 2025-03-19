import React, { useState } from 'react';  
import { Button, DatePicker, Input, Switch, message } from 'antd';  
import './HomePage.css';  

const HomePage: React.FC = () => {  
    const [taskName, setTaskName] = useState('');  
    const [deadline, setDeadline] = useState(null);   
    const [isImportant, setIsImportant] = useState(false);

    const handleCreateTask = () => {  
        if (!taskName || !deadline) {  
            message.error('nhập tên với dealine');  
            return;  
        }  
        //log ra
        const task = { name: taskName, deadline: deadline, important: isImportant };  
        console.log('Tên task:', task);  
        message.success('task cài đặt thành công');  

    };  

    return (  
        <div className="todo-container">  
            <div className="header">TODO LIST APP</div>  
            <div className="input-row">  
                <label htmlFor="taskName">Task Name</label>  
                <Input  
                    id="taskName"  
                    value={taskName}  
                    onChange={e => setTaskName(e.target.value)}  
                    placeholder="Nhập task đi"  
                />  
            </div>  
            <div className="input-row">  
                <label htmlFor="deadline">Deadline</label>  
                <DatePicker  
                    id="deadline"  
                    onChange={date => setDeadline(date ? date.format('YYYY-MM-DD') : null)}  
                    placeholder="Chọn deadline"  
                />  
            </div>  
            <div className="input-row switch-row">  
                <label htmlFor="switch">Important</label>  
                <Switch  
                    id="switch"  
                    checked={isImportant}  
                    onChange={setIsImportant}  
                />  
            </div>  
            <div className="button-row">  
                <Button type="primary" className="create-button" onClick={handleCreateTask}>Create Task</Button>  
            </div>  
        </div>  
    );  
};  

export default HomePage;  