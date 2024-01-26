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
  if (req.headers.authorization !== `Bearer ${process.env.API_BEARER_TOKEN}`) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // Revalidation for the collection page
    await res.revalidate("/collection");

    return res.json({ message: "Collection revalidation process completed" });
  } catch (error) {
    // If there was an error during revalidation
    return res
      .status(500)
      .json({ message: "Error during revalidation of collection" });
  }
}
