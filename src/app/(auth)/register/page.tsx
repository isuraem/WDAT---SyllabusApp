'use client'
import { useState } from 'react';
import './styles.css';
import TextInput from '@/components/textInput';
import { DummyUsers } from "../../constants/dummyUsers";
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== newPassword) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        const userData = {
            name: username,
            password: password
        };

        try {
            const response = await fetch('http://localhost:3000/register/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                console.log('Registration Successful:', userData);
                localStorage.setItem('userLoggedIn', 'true');  // Set login status in local storage
                router.back();
            } else {
                console.log('Registration Failed:', response.statusText);
                localStorage.removeItem('userLoggedIn');  // Ensure userLoggedIn is cleared if registration fails
            }
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };


    return (
        <div className="container1">
            <form onSubmit={handleSubmit} className="form">
                <div className='loginTextDiv'>
                    <h2 className='LoginText'>Register here</h2>
                </div>
                <div className="inputGroup">
                    <TextInput
                        id="username"
                        label="Username:"
                        type="text"
                        value={username}
                        onChange={setUsername}
                    />

                    <TextInput
                        id="password"
                        label="Password:"
                        type="password" // Ensure the password field masks input
                        value={password}
                        onChange={setPassword}
                    />
                    <TextInput
                        id="password"
                        label="Confirm Password:"
                        type="password" // Ensure the password field masks input
                        value={newPassword}
                        onChange={setNewPassword}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
