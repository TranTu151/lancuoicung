import { NextResponse } from "next/server";
import { PRODUCTS } from "@/mock/products";

// Chỉnh lại định dạng Promise cho params
export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Bắt buộc phải có await ở đây
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
