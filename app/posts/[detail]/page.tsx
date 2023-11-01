/*
 * @Brief:
 * @Description:
 * @Author: yangjianming
 * @Date: 2023-11-01 10:15:14
 */

'use client'
import { useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

export default function Page({ params }: { params: { detail: string } }) {
    const [data, setData] = useState<any[]>([])
    const router = useRouter()
    const pathname = usePathname()
    const fetchData = () => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(res => {
                console.log(res)
                setData(res.posts)
            })
    }
    useEffect(() => {
        fetchData()
        console.log('router :>> ', router)
        console.log('object :>> ', params)
        console.log('pathname :>> ', pathname);
    }, [])
    return (
        <div>
            {data.map(item => (
                <p key={item.id}>{item.title}</p>
            ))}
        </div>
    )
}
