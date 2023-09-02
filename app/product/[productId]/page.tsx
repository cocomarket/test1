'use client'

import Link from "next/link"

export default function ProductDetail({
    params,
    // searchParams,
}: {
    params: { productId: string }
    //searchParams: { [key: string]: string | string[] | undefined }
}) {
    return <>
        <h1>Product detail</h1>
        <h2>{params.productId}</h2>
        <hr />
        <Link href="/">Home 으로</Link>
    </>
}
