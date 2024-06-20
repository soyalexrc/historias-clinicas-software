'use client';
import Lottie from "lottie-react";
import loginAnimation from '@/lib/lottie/login-animation.json';

export default function LoginAnimation() {
    return (
        <div className='max-w-[300px]'>
            <Lottie animationData={loginAnimation}/>
        </div>
    )
}
