import { NextResponse } from "next/server";

export const dynamic = 'force-static';
export const revalidate = false;

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
  return new NextResponse(JSON.stringify(shops), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': 'https://b1g1testtask-gmf34ruhp-dmytroborbotko-pets-projects.vercel.app',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': 'https://b1g1testtask-gmf34ruhp-dmytroborbotko-pets-projects.vercel.app',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  });
}