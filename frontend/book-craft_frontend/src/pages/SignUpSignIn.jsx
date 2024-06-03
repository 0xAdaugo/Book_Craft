import Form from "../components/Form";

let isRegistered = true;

const signUp = () => {
    let submit = 0;
    console.log(`signed up ${submit}`)
    submit += 1;
}

const signIn = () => {
    let submit = 0
    console.log(`logged in ${submit}`)
    submit += 1;
}

const SignUpSignIn = () => {
    return <div className='mx-auto max-w-7xl grid md:grid-cols-2'>
    {isRegistered ? <h1 className="font-bold text-3xl text-center pt-10">Sign In</h1> : <h1 className="font-bold text-3xl text-center pt-10">Sign Up</h1>}
    <Form 
        labelName="Username:" 
        inputType="text" 
        inputId="username" 
        inputName="username" 
        inputPlaceholder="Enter your username"
    />
    <Form 
        labelName="Email:" 
        inputType="email"
        inputId="user-email" 
        inputName="email" 
        inputPlaceholder="Enter your email"
    />
    <Form 
        labelName="Password:" 
        inputType="password" 
        inputId="user-password" 
        inputName="password" 
        inputPlaceholder="Enter your password"
    />
    {!isRegistered && <Form 
        labelName="Confirm Password:" 
        inputType="password" 
        inputId="user-password" 
        inputName="password" 
        inputPlaceholder="Confirm your password"
    />}

    <button
    onClick={isRegistered ? signIn : signUp}
    className='w-52 bg-[#00ACD0] rounded-md font-medium my-6 mx-auto text-black p-4 border-2 border-[#852500] hover:bg-[#C0f0f7]'>Get Started</button>
            </div>
}

export default SignUpSignIn;