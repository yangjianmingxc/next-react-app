/*
 * @Brief:
 * @Description:
 * @Author: yangjianming
 * @Date: 2023-10-30 13:45:31
 */
'use client'
import { useEffect } from 'react'

export default function Home() {
    useEffect(() => {
        console.log('object :>> ')
    }, [])
    return <div>Home page</div>
}
