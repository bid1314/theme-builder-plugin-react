import React from 'react'
import './globals.css'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      {children}
    </div>
  )
}
