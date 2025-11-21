export default function EnvTest() {
  return (
    <div>
      <h1>Env Test</h1>
      <p>{process.env.NEXT_PUBLIC_ENV}</p>
      {typeof window !== 'undefined' && process.env.NEXT_PUBLIC_ENV === 'production' ? true : false}
    </div>
  );
}