"use client"
import React, { useState } from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'

//Use a public API like CoinGecko to fetch live prices
const fetchCryptoPrices = async () => {
    try{
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
            params: {
            vs_currency: 'usd',
            ids: 'bitcoin,ethereum,ripple,bitcoin-cash,litecoin',
            order: 'market_cap_desc',
            per_page: 5,
            },
        })
        return response.data
    } catch (error) {
        if(error.response){
            console.error("API responded with error:", error.response.data)
            throw new Error(`API Error: ${error.response.data.error || 'Unexpected error occurred.'}`)
        }
        else if(error.request){
            console.error("API did not respond:", error.request)
            throw new Error('Network error: No response from server.')
        }
        else{
            console.error("Error setting up request:", error.message)
            throw new Error('Request setup error: Unable to fetch data.')
        }
    }
}

export default function CryptoDashboard() {
  const [search, setSearch] = useState('') //State to store search query
  const { data, isLoading, isError, refetch } = useQuery('cryptoPrices', fetchCryptoPrices, {
    onSuccess: () => {
        console.log("Data successfully refetched");
    },
  })

  if (isLoading) { //Display a loading indicator while fetching data.
    return (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )
  }

  if (isError) {
    return (
        <div style={{ padding: '20px', color: 'red' }}>
        <p>Error fetching data: {error.message}</p>
        <button onClick={() => refetch()} style={{ padding: '8px 12px', marginLeft: '10px' }}>
          Retry
        </button>
      </div>
    )
  }

  const filteredData = data.filter((crypto) =>
    crypto.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search cryptocurrency..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '8px', width: '200px' }}
        />
        <button onClick={() => refetch()} style={{ padding: '8px 12px', marginLeft: '10px' }}>
          Refresh
        </button>
      </div>
      <ul>
        {filteredData.map((crypto) => (
          <li key={crypto.id} style={{ marginBottom: '20px', listStyle: 'none' }}>
            <h2>
              {crypto.name} ({crypto.symbol.toUpperCase()})
            </h2>
            <p>Price: ${crypto.current_price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
