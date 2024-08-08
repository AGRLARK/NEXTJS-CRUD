import React from 'react'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import { HiPencilAlt } from "react-icons/hi"

const TopicList = () => {
    return (
        <>
            <div className="flex p-4 border border-slate-400 my-3 justify-between gap-5 items-start">
                <div>
                    <h2 className="font-bold text-2xl">Topic List</h2>
                    <div>Topic Description</div>
                </div>

                <div className="flex gap-2">
                    <RemoveBtn />
                    <Link href={"/editTopic/123"}>
                        <HiPencilAlt size={24} />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default TopicList