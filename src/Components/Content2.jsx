import { useEffect, useState } from "react";

function Content2() {
    const [countdown, setCountdown] = useState(180)



    useEffect(() => {
       const timerId =  setInterval(() => {
            setCountdown(countdown - 1)
            // console.log('Countdown: ', countdown)
            // setCountdown(prevState => prevState - 1)
            console.log('Countdown...')
        }, 1000)

        return () => clearInterval(timerId)
    }, [])

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default Content2