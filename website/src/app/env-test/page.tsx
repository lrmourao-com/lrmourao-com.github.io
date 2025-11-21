export default function EnvTest() {
  return (
    <div>
      <h1>Env Test</h1>
      <p>Value: {process.env.NEXT_PUBLIC_ENV}</p>
      <p>Is Set: {process.env.NEXT_PUBLIC_ENV ? "Yes" : "No"}</p>
      <p>Is Production: {process.env.NEXT_PUBLIC_ENV === 'production' ? "Yes" : "No"}</p>
    </div>
  );
}