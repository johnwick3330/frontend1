import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { TeacherDashboard } from './components/TeacherDashboard';
import { StudentDashboard } from './components/StudentDashboard';

interface User {
  username: string;
  role: 'teacher' | 'student';
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (username: string, role: 'teacher' | 'student') => {
    setUser({ username, role });
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (user.role === 'teacher') {
    return <TeacherDashboard username={user.username} onLogout={handleLogout} />;
  }

  return <StudentDashboard username={user.username} onLogout={handleLogout} />;
}