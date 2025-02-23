import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
            <Link className="text-white font-bold " href={"/"} >AGRLARK</Link>
            <Link className="bg-white p-3 " href={"/addTopic"} >ADD TOPIC </Link>
        </nav>
    )
}

export default Navbar