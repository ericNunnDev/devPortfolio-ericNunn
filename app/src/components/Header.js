import React from 'react';

const Header = () => {
    return (
        <header>
            <div className='menu-btn'>
                <div className='btn-line'></div>
                <div className='btn-line'></div>
                <div className='btn-line'></div>
            </div>

            <nav className='menu'>
                <div className='menu-branding'>
                    <div className='portrait' />
                </div>
                <ul className='menu-nav'>
                    <li className='nav-item'><a className='nav-link'>Home</a></li>
                    <li className='nav-item'><a className='nav-link'>About Me</a></li>
                    <li className='nav-item'><a className='nav-link'>Projects</a></li>
                    <li className='nav-item'><a className='nav-link'>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
