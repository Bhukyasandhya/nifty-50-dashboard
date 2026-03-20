import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://query1.finance.yahoo.com/v8/finance/chart/%5ENSEI",
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
        cache: "no-store",
      }
    );

    const data = await res.json();

    const result = data?.chart?.result?.[0];
    const price = result?.meta?.regularMarketPrice;

    return NextResponse.json({
      nifty: {
        name: "NIFTY 50",
        price: price || 0,
      },
      stocks: [
        { symbol: "RELIANCE", price: 2900 },
        { symbol: "TCS", price: 4100 },
        { symbol: "INFY", price: 1600 },
        { symbol: "HDFCBANK", price: 1750 },
        { symbol: "ICICIBANK", price: 1000 },
        { symbol: "SBIN", price: 800 },
        { symbol: "ITC", price: 450 },
        { symbol: "LT", price: 3500 },
        { symbol: "AXISBANK", price: 1100 },
        { symbol: "WIPRO", price: 500 },
        { symbol: "HCLTECH", price: 1400 },
        { symbol: "MARUTI", price: 10000 },
        { symbol: "TATASTEEL", price: 150 },
        { symbol: "ONGC", price: 280 },
        { symbol: "BAJFINANCE", price: 7000 },
      ],
    });
  } catch (error) {
    return NextResponse.json({
      error: "Failed to fetch real market data",
    });
  }
}