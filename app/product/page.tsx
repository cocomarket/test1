import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <h1>Product</h1>
            <Link href="/product/1">상세페이지</Link>
        </div>
    )
}
