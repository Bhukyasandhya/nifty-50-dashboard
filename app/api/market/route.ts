import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    nifty: {
      name: "NIFTY 50",
      price: Math.floor(22000 + Math.random() * 500),
    },
    stocks: [
      { symbol: "RELIANCE", price: Math.floor(2900 + Math.random() * 100) },
      { symbol: "TCS", price: Math.floor(4000 + Math.random() * 200) },
      { symbol: "INFY", price: Math.floor(1600 + Math.random() * 100) },
      { symbol: "HDFCBANK", price: Math.floor(1700 + Math.random() * 100) },
      { symbol: "ICICIBANK", price: Math.floor(900 + Math.random() * 100) },
      { symbol: "SBIN", price: Math.floor(700 + Math.random() * 100) },
      { symbol: "ITC", price: Math.floor(400 + Math.random() * 50) },
      { symbol: "LT", price: Math.floor(3500 + Math.random() * 150) },
      { symbol: "AXISBANK", price: Math.floor(1100 + Math.random() * 100) },
      { symbol: "WIPRO", price: Math.floor(500 + Math.random() * 50) },
      { symbol: "HCLTECH", price: Math.floor(1400 + Math.random() * 100) },
      { symbol: "MARUTI", price: Math.floor(10000 + Math.random() * 500) },
      { symbol: "BAJFINANCE", price: Math.floor(7000 + Math.random() * 300) },
      { symbol: "ASIANPAINT", price: Math.floor(3000 + Math.random() * 150) },
      { symbol: "KOTAKBANK", price: Math.floor(1800 + Math.random() * 100) },
    ],
  });
}