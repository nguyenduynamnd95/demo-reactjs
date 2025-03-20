import React, { useState } from 'react';
import { Button, DatePicker, Input, Switch } from 'antd';
import dayjs from 'dayjs';
import './HomePage.css';

const HomePage: React.FC = () => {
    const [taskName, setTaskName] = useState('');
    const [deadline, setDeadline] = useState(dayjs().format('YYYY-MM-DD')); 
    const [isImportant, setIsImportant] = useState(false);
    const [errors, setErrors] = useState({ taskName: false, deadline: false });
    
    const handleCreateTask = () => {
        const newErrors = {
            taskName: taskName.trim() === '', //kiểm tra xem nhập task chưa
            deadline: !deadline
        };
    
        setErrors(newErrors);
    
        if (newErrors.taskName || newErrors.deadline) {
            return;
        }
    
        const task = { name: taskName, deadline, important: isImportant };
        console.log('Task:', task);
    };
    

    return (
        <div className="todo-container">
            <div className="header">TODO LIST APP</div>

            <div className="input-row">
                <label htmlFor="taskName">Task Name</label>
                <div className="input-wrapper">
                    <Input
                        id="taskName"
                        value={taskName}
                        onChange={e => setTaskName(e.target.value)}
                        placeholder="Nhập task đi"
                        className={errors.taskName ? 'input-error' : ''}
                    />
                    {errors.taskName && <span className="error-text">Vui lòng nhập tên task!</span>}
                </div>
            </div>

            <div className="input-row">
                <label htmlFor="deadline">Deadline</label>
                <div className="input-wrapper">
                    <DatePicker
                        id="deadline"
                        value={dayjs(deadline)}
                        onChange={(date) => setDeadline(date ? date.format('YYYY-MM-DD') : '')}
                        placeholder="Chọn deadline"
                        className={errors.deadline ? 'input-error' : ''}
                        allowClear={false}
                    />
                    {errors.deadline && <span className="error-text">Vui lòng chọn deadline!</span>}
                </div>
            </div>

            <div className="input-row switch-row">
                <label htmlFor="switch">Quan trọng</label>
                <Switch
                    id="switch"
                    checked={isImportant}
                    onChange={setIsImportant}
                />
            </div>

            <div className="button-row">
                <Button type="primary" className="create-button" onClick={handleCreateTask}>
                    Create Task
                </Button>
            </div>
        </div>
    );
};

export default HomePage;
