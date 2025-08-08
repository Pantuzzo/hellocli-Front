'use client'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, checkAuth } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!checkAuth()) {
      router.push('/login')
    }
  }, [checkAuth, router])

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1>Voce nao tem permissao</h1>
      </div>
    )
  }

  return <>{children}</>
}