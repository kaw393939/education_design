import { rm } from "node:fs/promises";

async function cleanNextDirectory() {
  try {
    await rm(".next", {
      recursive: true,
      force: true,
      maxRetries: 20,
      retryDelay: 100,
    });
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === "ENOENT") {
      return;
    }

    throw error;
  }
}

await cleanNextDirectory();