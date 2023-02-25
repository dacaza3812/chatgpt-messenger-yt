'use client'
import {signIn} from "next-auth/react"
import Image from "next/image"

function Login() {
  return (
    <div className="bg-[#393a3d] h-screen flex flex-col items-center justify-center text-center text-white">
        <Image
        src="https://1000logos.net/wp-content/uploads/2023/02/ChatGPT-Logo.png"
        width={300}
        height={300}
        alt="logo"
        />
        <button onClick={() => signIn("google")}
        className="text-white font-bold text-3xl animate-pulse"
        >
            Sign In para usar ChatGPT
        </button>
    </div>
  )
}

export default Login