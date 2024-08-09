import { useEffect, useState } from "react"


function Content3() {
    const [count, setCount] = useState(1)
    const [avatar, setAvatar] = useState()

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handlePreViewAvatar = (e) => {
        const file = e.target.file[0]
        // console.log(file);
        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }

    useEffect(() => {

        console.log('Mounted or Re-render lan` ${count}')

        return () => {
            console.log('Cleanup lan` ${count}')
        }
    }, [count])



    return (
        <div>
            {/* <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Click me!
            </button> */}
            <input
                type="file"
                onChange={handlePreViewAvatar}
            >
                {avatar && (
                    <img src="" alt="" width="80%"></img>
                )}
            </input>
        </div>
    )
}

export default Content3