import { useEffect, useState } from "react";


const tabs = ['posts', 'comment', 'albums']
function Content() {

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)
    // useEffect(() => {
    //     // console.log("Mouted")
    //     console.log('Re-render', title)
    // })

    useEffect(() => {
        // fetch('')
        // .then(res => res.json())
        // .then(posts => {
        //     setPosts(posts);
        // })
        console.log("Title changed");
    }, [type])


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setShowGoToTop(true)
                // console.log('set state')
            }
            else {
                setShowGoToTop(false)
            }
        }
        window.addEventListener('scroll', handleScroll)

        return() =>{
            // console.log('Umouting...')
            window.removeEventListener('scroll',handleScroll)

            console.log('removeEventListener')
        }
    }, [])

    console.log('re-render')


    return (
        // <div>
        //     <h1>Hello World</h1>
        // </div>

        <div>

            {tabs.map(tab =>
                <button
                    key={tab}
                    style={(type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333',
                    } : {})}
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            )}

            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            ></input>
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
                {
                    showGoToTop && (
                        <button
                            style={{
                                position: 'fixed',
                                right: 20,
                                bottom: 20,
                            }}
                        >
                            Go to Top
                        </button>
                    )
                }
            </ul>
        </div>
    )
}

export default Content