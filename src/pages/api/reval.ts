import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res
      .status(405)
      .json({ message: `Method ${req.method} Not Allowed` });
  }
  if (req.headers.authorization === `Bearer ${process.env.API_BEARER_TOKEN}`) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const { tokenId, revalidateNft, revalidateCollection } = req.body;

  try {
    // Conditional revalidation for the collection page
    if (revalidateCollection) {
      await res.revalidate("/collection");
    }

    // Conditional revalidation for a specific NFT page
    if (revalidateNft && tokenId) {
      await res.revalidate(`/collection/${tokenId}`);
    }

    return res.json({ message: "Revalidation process completed" });
  } catch (error) {
    // If there was an error during revalidation
    return res.status(500).json({ message: "Error during revalidation" });
  }
}
