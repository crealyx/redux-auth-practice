const Login = () => {
  return (
    <div>
      <form>
        <label htmlFor="email">Enter your e-mail</label>
        <input type="email" />
        <label htmlFor="password">Enter your password</label>
        <input type="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
