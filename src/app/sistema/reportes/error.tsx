'use client' // Error boundaries must be Client Components

import { useEffect } from 'react'
import {useRouter} from "next/navigation";

export default function Error({
                                  error,
                                  reset,
                              }: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    const router = useRouter();
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </button>
            {/*<button*/}
            {/*    onClick={*/}
            {/*        // Attempt to recover by trying to re-render the segment*/}
            {/*        () => router.replace('/sistema/reportes')*/}
            {/*    }*/}
            {/*>*/}
            {/*    Go back*/}
            {/*</button>*/}
        </div>
    )
}
