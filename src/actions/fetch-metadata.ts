"use server";

import axios from "axios";
import { Metadata } from "@/types";

export const fetchMetaData = async (tokenURI: string) => {
  let metadata;

  try {
    const { data } = await axios.get(tokenURI, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    const cleanedData = data
      .replace(/[\u{0080}-\u{FFFF}]/gu, "")
      .replace(/[\x00-\x1F\x7F-\x9F]/g, "");

    const loadedMetadata: Metadata = JSON.parse(cleanedData);
    //  TODO: validate metadata against a schema
    if (loadedMetadata.name) {
      metadata = loadedMetadata;
    } else {
      throw new Error("Metadata format doesn't match");
    }
  } catch (err) {
    console.error("Error fetching data from smart contract:", err);
  }
  return metadata;
};
