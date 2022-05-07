import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
    return (
        <header className='w-full border-b border-b-gray-200 shadow-sm'>
            <div className='py-2 flex items-center justify-center'>
                <Link href="/">
                    <a>
                    <Image src={'/images/logo.png'} width={60} height={31} />
                    </a>
                </Link>
            </div>
        </header>
    )
}