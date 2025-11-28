import { Metadata } from "next";
import LoginButton from "@/components/login-button"

export const metadata: Metadata = {
    title: "Masuk",
    
}

const SignInPage = () => {
  return (
    <div className='min-h-screen flex item-center'>
        <div className="bg-white w-100 mx-auto rounded-sm shadow p-8">
            <h1 className='text-4xl font-bold mb-1'>Masuk</h1>
            <p className='font-medium mb-5 text-gray-400'>Masuk menggunakan akun kamu</p>
            <div className="py-4 text-center">
                <LoginButton />
            </div>
        </div>
    </div>
  )
}

export default SignInPage;