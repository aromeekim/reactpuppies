import SignUpForm from '../../Components/SignUpForm/SignUpForm';
import LogInForm from '../../Components/LogInForm/LogInForm';

export default function AuthPage({ setUser }) {
    return (
        <main>
            <h1>AuthPage</h1>
            <SignUpForm setUser = { setUser } />
            <LogInForm setUser = { setUser } />
        </main>
    )
}