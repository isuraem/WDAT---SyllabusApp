"use client"
// import { useState } from 'react';
// import './styles.css';
// import TextInput from '@/components/textInput';
// import { DummyUsers } from "../../constants/dummyUsers";

// export default function LoginPage() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log('Submitted:', { username, password });
//   };

//   return (
//     <div className="container1">
//       <form onSubmit={handleSubmit} className="form">
//         <h2 className='LoginText'>Login</h2>
//         <div className="inputGroup">
//             <TextInput 
//             id="username"
//             label="Username:"
//             value={username}
//             onChange={setUsername}
//             />

//             <TextInput 
//             id="password"
//             label="password:"
//             value={username}
//             onChange={setPassword}
//             />

//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }
import { useState } from 'react';
import './styles.css';
import TextInput from '@/components/textInput';
import { DummyUsers } from "../../constants/dummyUsers";
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if username and password match any entry in DummyUsers
    const userExists = DummyUsers.some(user => user.name === username && user.password === password);

    if (userExists) {
      console.log('Login Successful:', { username, password });
      localStorage.setItem('userLoggedIn', 'true');  // Set login status in local storage
      router.back();
    } else {
      console.log('Login Failed: Invalid credentials');
      localStorage.removeItem('userLoggedIn');  // Ensure userLoggedIn is cleared if login fails
    }
  };

  return (
    <div className="container1">
      <form onSubmit={handleSubmit} className="form">
        <div className='loginTextDiv'>
          <h2 className='LoginText'>Login</h2>
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
        </div>
        <button type="submit">Login</button>
        <div className="flex justify-center mt-2">
          <Link href="/register" className="text-blue-500 hover:text-blue-700 underline">
            Register here
          </Link>
        </div>
      </form>
    </div>
  );
}
