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
  const response = NextResponse.json(shops);
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET');
  response.headers.set('Access-Control-Allow-Headers', '*');
  return response;
}