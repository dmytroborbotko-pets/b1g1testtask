import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = 3600; // revalidate every hour

const shops = [
  {
    id: 1,
    name: "Baden",
    price: 29,
    discountedPrice: 24,
    vouchers: 120,
    savings: 1034,
  },
  {
    id: 2,
    name: "Aarau",
    price: 29,
    discountedPrice: 24,
    vouchers: 120,
    savings: 1034,
  },
  {
    id: 3,
    name: "Zurich",
    price: 29,
    discountedPrice: 24,
    vouchers: 120,
    savings: 1034,
  },
];

export async function GET(request: Request) {
  const origin = request.headers.get('origin');
  const allowedOrigins = ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:8000', 'http://localhost'];
  
  return NextResponse.json(shops, {
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": allowedOrigins.includes(origin || '') ? origin! : allowedOrigins[0],
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Credentials": "true",
    },
  });
}