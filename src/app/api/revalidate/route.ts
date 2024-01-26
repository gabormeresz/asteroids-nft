import * as actions from "@/actions";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

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
    // actions.revalidateItem(tokenId);
    console.log(`revalidating from API: /collection/${tokenId.toString()}`);
    // revalidatePath(`/collection/${tokenId.toString()}`);
    revalidateTag(tokenId.toString());
  }

  if (revalidateCollection) {
    // actions.revalidateCollection();
    console.log(`revalidating from API: /collection`);
    // revalidatePath("/collection");
    revalidateTag("collection");
  }

  return Response.json({
    nftRevalidated: revalidateNft && tokenId,
    collectionRevalidated: revalidateCollection
  });
}
