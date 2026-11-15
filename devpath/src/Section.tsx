import type {  ReactNode } from 'react'
 type childrenProps = {
    title: string,
    children : ReactNode
 }
export default function Section({children , title}:childrenProps) {
  return (
    <section>
        <h1>{title}</h1>
        <div>
            {children}
        </div>
    </section>
  )
}
