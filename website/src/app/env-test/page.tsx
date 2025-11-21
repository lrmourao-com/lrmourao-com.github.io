export default function EnvTest() {
  return (
    <div>
      <h1>Env Test</h1>
      <p>{process.env.NEXT_PUBLIC_ENV}</p>
    </div>
  );
}