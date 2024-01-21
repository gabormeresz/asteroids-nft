import { Metadata } from "@/types";

export const fetchMetaData = async (tokenURI: string) => {
  let metadata: Metadata | undefined;

  await fetch(tokenURI, {
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((response) => response.text())
    .then((text) => {
      const cleanedData = text
        .replace(/[\u{0080}-\u{FFFF}]/gu, "")
        .replace(/[\x00-\x1F\x7F-\x9F]/g, "");
      const loadedMetadata = JSON.parse(cleanedData);
      console.log(`actively fetching token ${tokenURI}`);
      if (loadedMetadata.name) {
        metadata = loadedMetadata;
      } else {
        throw new Error("Metadata format doesn't match");
      }
    })
    .catch((err) =>
      console.error("Error fetching data from smart contract:", err)
    );
  console.log(`fetched metadata for token ${tokenURI}`);
  return metadata;
};
