import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (
    req.method === "POST" &&
    req.headers.authorization === `Bearer ${process.env.API_BEARER_TOKEN}`
  ) {
    const tokenId = req.query.tokenId as string;
    try {
      // Trigger a revalidation of the NFT detail page
      await res.revalidate(`/collection/${tokenId}`);
      return res.status(200).json({ revalidated: true });
    } catch (err) {
      // Handle potential errors
      return res.status(500).send("Error revalidating");
    }
  }
  // Handle unauthorized access
  res.status(401).json({ message: "Unauthorized" });
}
