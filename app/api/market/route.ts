import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    nifty: {
      name: "NIFTY 50",
      price: 22485 + Math.floor(Math.random() * 100),
    },
    stocks: [
      { symbol: "RELIANCE", price: 2900 + Math.floor(Math.random() * 100) },
      { symbol: "TCS", price: 4100 + Math.floor(Math.random() * 100) },
      { symbol: "INFY", price: 1600 + Math.floor(Math.random() * 100) },
      { symbol: "HDFCBANK", price: 1700 + Math.floor(Math.random() * 100) },
      { symbol: "ICICIBANK", price: 950 + Math.floor(Math.random() * 100) },
      { symbol: "SBIN", price: 780 + Math.floor(Math.random() * 100) },
      { symbol: "ITC", price: 430 + Math.floor(Math.random() * 50) },
      { symbol: "LT", price: 3500 + Math.floor(Math.random() * 200) },
      { symbol: "AXISBANK", price: 1100 + Math.floor(Math.random() * 100) },
      { symbol: "WIPRO", price: 500 + Math.floor(Math.random() * 100) },
      { symbol: "HCLTECH", price: 1400 + Math.floor(Math.random() * 100) },
      { symbol: "MARUTI", price: 10000 + Math.floor(Math.random() * 200) },
      { symbol: "TATASTEEL", price: 140 + Math.floor(Math.random() * 20) },
      { symbol: "ONGC", price: 270 + Math.floor(Math.random() * 20) },
      { symbol: "BAJFINANCE", price: 7000 + Math.floor(Math.random() * 200) },
    ],
  });
}