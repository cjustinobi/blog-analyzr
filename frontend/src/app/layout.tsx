'use client'

import { Provider } from 'react-redux'
import { Inter } from 'next/font/google'
import { init } from '@web3-onboard/react'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import injectedModule from '@web3-onboard/injected-wallets'
import { Toaster } from 'react-hot-toast'

import Header from '@/components/shared/Header'
import configFile from '@/config/cartesi.json'
import store from '@/store'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const config: any = configFile

const injected: any = injectedModule()
init({
  wallets: [injected],
  chains: Object.entries(config).map(([k, v]: [string, any], i) => ({
    id: k,
    token: v.token,
    label: v.label,
    rpcUrl: v.rpcUrl,
  })),
  appMetadata: {
    name: 'Blog Analyzr',
    icon: '<svg><svg/>',
    description: 'Facilitating quality posts',
    recommendedInjectedWallets: [
      { name: 'MetaMask', url: 'https://metamask.io' },
    ],
  },
})

//Setup GraphQL Apollo client
const serverUrl = 'http://localhost:8080'

const URL_QUERY_GRAPHQL = `${serverUrl}/graphql`

const client = new ApolloClient({
  uri: URL_QUERY_GRAPHQL,
  cache: new InMemoryCache(),
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode | React.ReactNode[]
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main className="overflow-x-hidden text-app-text-color px-20">
          <Provider store={store}>
            <ApolloProvider client={client}>
              <Header />
              {children}
              <Toaster />
            </ApolloProvider>
          </Provider>
        </main>
      </body>
    </html>
  )
}
