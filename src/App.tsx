import './App.css';
import AppRoutes from './routes/AppRoutes';
import Login from './components/Login';

const App = (): React.JSX.Element => {
  return (
    <>
      <AppRoutes />
      <main className="w-full h-screen flex items-center justify-center">
        <Login />
      </main>
    </>
  );
};

export default App;
