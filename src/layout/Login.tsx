import { LoginForm } from '@/components/ui/login-form';

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-370px)] py-5 md:py-10">
            <div className="max-w-sm md:max-w-l w-full">
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;