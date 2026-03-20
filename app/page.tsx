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
  const [lastUpdated, setLastUpdated] = useState("");

    useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch("/api/market", {
        cache: "no-store",
      });

      if (!res.ok) {
        console.error("API failed");
        return;
      }

      const json = await res.json();
      setData(json);
    } catch (err) {
      console.error("Error fetching:", err);
    }
  };

  fetchData();

  // ✅ API refresh every 5 sec
  const apiInterval = setInterval(fetchData, 5000);

  // ✅ REAL TIME CLOCK every 1 sec
  const timeInterval = setInterval(() => {
    setLastUpdated(new Date().toLocaleTimeString());
  }, 1000);

  return () => {
    clearInterval(apiInterval);
    clearInterval(timeInterval);
  };
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
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          marginBottom: "20px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Nifty 50 Live Dashboard
      </h1>

      {!nifty ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* NIFTY CARD */}
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "20px",
              textAlign: "center",
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

            {/* ✅ TIME DISPLAY */}
            <p
              style={{
                fontSize: "12px",
                marginTop: "10px",
                color: "#94a3b8",
              }}
            >
              Updated at: {lastUpdated || "Loading..."}
            </p>
          </div>

          {/* STOCKS LIST */}
          <div
            style={{
              backgroundColor: "#1e293b",
              padding: "20px",
              borderRadius: "10px",
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
                    padding: "10px 0",
                    borderBottom: "1px solid #334155",
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