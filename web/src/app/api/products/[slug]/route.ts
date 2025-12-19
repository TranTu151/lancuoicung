import { NextRequest, NextResponse } from "next/server";
import { PRODUCTS } from "@/mock/products";

export async function GET(req: NextRequest) {
  // Lấy slug từ URL
  const slug = req.nextUrl.pathname.split("/").pop();

  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
  return NextResponse.json(product);
}
