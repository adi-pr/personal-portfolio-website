import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({ links }) => {
    return (
        <ul className='flex flex-col py-4 gap-2 items-center'>
            {links.map((item, index) => (
                <li key={index}>
                    <NavLink href={item.href} title={item.title} />
                </li>
            ))}
        </ul>
    )
}

export default MenuOverlay