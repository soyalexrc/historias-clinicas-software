'use client';
import Lottie from "lottie-react";
import loginAnimation from '@/lib/lottie/login-animation.json';

export default function LoginAnimation() {
    return (
        <div className='w-[200px] h-[200px]'>
            <Lottie animationData={loginAnimation}  />
        </div>
    )
}
