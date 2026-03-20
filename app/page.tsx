"use client";

import { useEffect, useState } from "react";

type NiftyType = {
  name: string;
  price: number;
};

type StockType = {
  symbol: string;
  price: number;
};

type MarketDataType = {
  nifty: NiftyType;
  stocks: StockType[];
};

export default function Home() {
  const [data, setData] = useState<MarketDataType | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${window.location.origin}/api/market`);
        const json = await res.json();
        setData(json);

        // ✅ Update time
        const now = new Date();
        setLastUpdated(now.toLocaleTimeString());
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();

    // ✅ AUTO REFRESH every 5 seconds
    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  const nifty = data?.nifty;
  const stocks = data?.stocks || [];

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        color: "white",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HEADER */}
      <h1
        style={{
          fontSize: "30px",
          marginBottom: "20px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Nifty 50 Live Dashboard
      </h1>

      {!nifty ? (
        <p style={{ textAlign: "center" }}>Loading...</p>
      ) : (
        <>
          {/* NIFTY CARD */}
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "20px",
              borderRadius: "12px",
              marginBottom: "20px",
              textAlign: "center",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            }}
          >
            <h2 style={{ marginBottom: "10px" }}>{nifty.name}</h2>

            <p
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "lightgreen",
              }}
            >
              {nifty.price}
            </p>

            {/* ✅ LAST UPDATED TIME */}
            <p style={{ fontSize: "12px", marginTop: "10px", color: "#94a3b8" }}>
              Updated at: {lastUpdated}
            </p>
          </div>

          {/* STOCKS LIST */}
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 0 10px rgba(0,0,0,0.3)",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>Top Stocks</h3>

            {stocks.length > 0 ? (
              stocks.map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "12px 0",
                    borderBottom:
                      i !== stocks.length - 1
                        ? "1px solid #334155"
                        : "none",
                  }}
                >
                  <span>{s.symbol}</span>

                  {/* ✅ COLOR LOGIC */}
                  <span
                    style={{
                      color: s.price > 2000 ? "lightgreen" : "red",
                      fontWeight: "bold",
                    }}
                  >
                    {s.price}
                  </span>
                </div>
              ))
            ) : (
              <p>No stock data available</p>
            )}
          </div>
        </>
      )}
    </main>
  );
} 