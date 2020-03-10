import React from 'react'

function Home() {
    return (
        <div className='home'>
            <h1>Eric Nunn</h1>
            <h2>Full-Stack Software Developer</h2>
            <div className='icons'>
                <a href='https://www.facebook.com/eric.nunn.5'>
                    <i className='fab fa-facebook fa-2x'></i>
                </a>
                <a href='https://linkedin.com/in/eric-nunn-484a92a1/'>
                    <i className='fab fa-linkedin fa-2x'></i>
                </a>
                <a href='https://github.com/lowlyHero'>
                    <i className='fab fa-github-alt fa-2x'></i>
                </a>
                <a href='https://www.pinterest.com/lowlyherotech/'>
                    <i className='fab fa-pinterest-p fa-2x'></i>
                </a>
            </div>
        </div>
    )
}

export default Home
