import { useAuth } from "../hooks/useAuth";

function Login() {
  const { login } = useAuth();

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;