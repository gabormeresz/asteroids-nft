import * as actions from "@/actions";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const authorization = headers().get("authorization");
  if (authorization !== `Bearer ${process.env.API_BEARER_TOKEN}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const {
    tokenId,
    revalidateNft,
    revalidateCollection
  }: {
    tokenId: number;
    revalidateNft: boolean;
    revalidateCollection: boolean;
  } = await request.json();

  console.log("tokenId: ", tokenId);
  console.log("revalidateNft: ", revalidateNft);
  console.log("revalidateCollection: ", revalidateCollection);

  if (revalidateNft) {
    actions.revalidateItem(tokenId);
  }

  if (revalidateCollection) {
    actions.revalidateCollection();
  }

  return Response.json({
    nftRevalidated: revalidateNft && tokenId,
    collectionRevalidated: revalidateCollection
  });
}
