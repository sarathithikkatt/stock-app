"use client";

import { useEffect, useState } from "react";
import * as button from "@/components/ui/button";

interface Stock {
  id: number;
  name: string;
  ticker: string;
  price: number;
  change: number;
  changePercentage: number;
}

export default function Component() {
  const stocks: Stock[] = [
    {
      id: 1,
      name: "Apple Inc.",
      ticker: "AAPL",
      price: 145.32,
      change: 2.5,
      changePercentage: 1.75,
    },
    {
      id: 2,
      name: "Microsoft Corporation",
      ticker: "MSFT",
      price: 280.15,
      change: -1.2,
      changePercentage: -0.43,
    },
    {
      id: 3,
      name: "Amazon.com, Inc.",
      ticker: "AMZN",
      price: 3215.75,
      change: 5.3,
      changePercentage: 0.17,
    },
    {
      id: 4,
      name: "Tesla, Inc.",
      ticker: "TSLA",
      price: 700.12,
      change: -10.5,
      changePercentage: -1.48,
    },
    {
      id: 5,
      name: "Nvidia Corporation",
      ticker: "NVDA",
      price: 615.43,
      change: 8.2,
      changePercentage: 1.35,
    },
    {
      id: 6,
      name: "Alphabet Inc. (Class C)",
      ticker: "GOOG",
      price: 2450.21,
      change: -3.1,
      changePercentage: -0.13,
    },
    {
      id: 7,
      name: "Johnson & Johnson",
      ticker: "JNJ",
      price: 165.87,
      change: 1.5,
      changePercentage: 0.91,
    },
    {
      id: 8,
      name: "Procter & Gamble Co.",
      ticker: "PG",
      price: 135.24,
      change: -0.8,
      changePercentage: -0.59,
    },
    {
      id: 9,
      name: "Visa Inc. (Class A)",
      ticker: "V",
      price: 220.15,
      change: 2.3,
      changePercentage: 1.06,
    },
    {
      id: 10,
      name: "Walmart Inc.",
      ticker: "WMT",
      price: 145.32,
      change: -1.1,
      changePercentage: -0.75,
    },
    {
      id: 11,
      name: "JPMorgan Chase & Co.",
      ticker: "JPM",
      price: 155.43,
      change: 3.2,
      changePercentage: 2.11,
    },
    {
      id: 12,
      name: "Exxon Mobil Corporation",
      ticker: "XOM",
      price: 58.27,
      change: -0.5,
      changePercentage: -0.85,
    },
    {
      id: 13,
      name: "The Coca-Cola Company",
      ticker: "KO",
      price: 54.12,
      change: 0.8,
      changePercentage: 1.5,
    },
    {
      id: 14,
      name: "Pfizer Inc.",
      ticker: "PFE",
      price: 39.87,
      change: -0.3,
      changePercentage: -0.75,
    },
    {
      id: 15,
      name: "The Walt Disney Company",
      ticker: "DIS",
      price: 185.43,
      change: 1.5,
      changePercentage: 0.81,
    },
    {
      id: 16,
      name: "Mastercard Incorporated (Class A)",
      ticker: "MA",
      price: 365.21,
      change: 4.2,
      changePercentage: 1.16,
    },
    {
      id: 17,
      name: "Verizon Communications Inc.",
      ticker: "VZ",
      price: 55.87,
      change: -0.6,
      changePercentage: -1.06,
    },
    {
      id: 18,
      name: "The Home Depot, Inc.",
      ticker: "HD",
      price: 315.43,
      change: 2.1,
      changePercentage: 0.67,
    },
    {
      id: 19,
      name: "Chevron Corporation",
      ticker: "CVX",
      price: 105.21,
      change: -1.2,
      changePercentage: -1.13,
    },
    {
      id: 20,
      name: "The Boeing Company",
      ticker: "BA",
      price: 215.43,
      change: 3.5,
      changePercentage: 1.65,
    },
  ];
  const [selectedStock, setSelectedStock] = useState<Stock>(stocks[0]);

  const handleStockChange = () => {
    const currentIndex = stocks.findIndex((stock) => stock.id === selectedStock.id);
    const nextIndex = (currentIndex + 1) % stocks.length;
    setSelectedStock(stocks[nextIndex]);
  };

  useEffect(()=>{
    const getStockData = async () => {
      const
    }
  })

  return (
    <div className="bg-background text-card-foreground">
      <main className="container mx-auto py-12 px-4 md:px-6">
        <div className="grid gap-8">
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">My Stock Portfolio</h1>
              <button.Button onClick={handleStockChange}>
                <RefreshCwIcon className="w-5 h-5 mr-2" />
                Switch Stock
              </button.Button>
            </div>
            <div className="grid gap-4">
              <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                <div className="grid gap-1">
                  <div className="text-2xl font-bold">{selectedStock.name}</div>
                  <div className="text-lg font-medium text-muted-foreground">{selectedStock.ticker}</div>
                </div>
                <div
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedStock.change >= 0 ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                  }`}
                >
                  {selectedStock.change >= 0 ? "+" : ""}
                  {selectedStock.change.toFixed(2)} ({selectedStock.changePercentage.toFixed(2)}%)
                </div>
              </div>
              <div className="grid grid-cols-[1fr_auto] items-center gap-4">
                <div className="text-4xl font-bold">${selectedStock.price.toFixed(2)}</div>
                <div className="text-lg font-medium text-muted-foreground">Current Price</div>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Recent Stocks</h2>
            </div>
            <div className="grid gap-4">
              {stocks.slice(0, 20).map((stock) => (
                <div
                  key={stock.id}
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-4 rounded-lg bg-card hover:bg-muted transition-colors"
                >
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      stock.change >= 0 ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                    }`}
                  >
                    {stock.change >= 0 ? "+" : ""}
                    {stock.change.toFixed(2)} ({stock.changePercentage.toFixed(2)}%)
                  </div>
                  <div className="grid gap-1">
                    <div className="text-lg font-medium">{stock.name}</div>
                    <div className="text-sm text-muted-foreground">{stock.ticker}</div>
                  </div>
                  <div className="text-lg font-bold">${stock.price.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function RefreshCwIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  );
}