// app/login/page.js
import { cookies } from 'next/headers'; // server-side
import LoginForm from '@/components/LoginForm'; // using alias
import LoginPageGuard from '@/components/LoginPageGuard';
export const revalidate = 0; // disable ISR / static caching
export default function LoginPage() {
  const cookieStore = cookies();
  const userToken = cookieStore.get('user')?.value;

  return (
    <>
      {/* Client-side guard for back/forward button */}
      <LoginPageGuard userToken={userToken} />

      <div>
          <LoginForm />
      </div>
    </>
  );
}
