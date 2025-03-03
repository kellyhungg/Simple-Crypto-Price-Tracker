---
id: api-integration-details
title: API Integration Details
---

# API Integration Details

This project uses the [CoinGecko API](https://docs.coingecko.com/v3.0.1/reference/coins-markets) to fetch live cryptocurrency prices. The integration is handled as follows:

- **Endpoint:** `/coins/markets`
- **Parameters:**
  - `vs_currency`: The fiat currency for price display (e.g., `usd`).
  - `ids`: A comma-separated list of cryptocurrency IDs (e.g., `bitcoin,ethereum,ripple,bitcoin-cash,litecoin`).
  - `order`: Sorting order (e.g., `market_cap_desc`).
  - `per_page`: Number of records per page (set to 5).

- **Data Fetching:**
  - The data is fetched using `axios` within an asynchronous function.
  - The API request is wrapped in a try-catch block to manage errors effectively.
  - React Query handles caching, background updates, and provides a `refetch()` function for manual updates.
