/*
 * @Brief:
 * @Description:
 * @Author: yangjianming
 * @Date: 2023-10-31 14:31:22
 */

'use client'
import { useEffect } from 'react'

export default function Page() {
    useEffect(() => {
        console.log('object :>> ')
    }, [])
    return <div>Login page</div>
}
