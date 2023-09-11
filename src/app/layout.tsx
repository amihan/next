'use client'
import Header from '@/components/Header'
import './globals.scss'


import Footer from '@/components/Footer'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import store from '@/store'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    }
  }
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <div className="container">
              <Header />
              <main className='main'>
                {children}
              </main>
              < Footer />
            </div>
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  )
}
