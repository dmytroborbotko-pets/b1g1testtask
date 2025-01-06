import { NextResponse } from "next/server";

export const dynamic = 'force-static';

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

export async function GET() {
  return NextResponse.json(shops, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    },
  });
}

export async function OPTIONS() {
  return NextResponse.json({}, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    },
  });
}