const redactMongoUrl = (value) => {
  if (!value) return "<missing>";

  try {
    const parsed = new URL(value);
    if (parsed.username) parsed.username = "<user>";
    if (parsed.password) parsed.password = "<pass>";
    return parsed.toString();
  } catch (error) {
    return "<present, invalid URL>";
  }
};

const forcedMongoUrl =
  process.env.SHOPPINGBOTTOM_MONGO_URL || process.env.NODECHEF_MONGO_URL;

if (forcedMongoUrl) {
  process.env.MONGO_URL = forcedMongoUrl;

  if (process.env.SHOPPINGBOTTOM_KEEP_OPLOG_URL !== "1") {
    delete process.env.MONGO_OPLOG_URL;
  }
} else if (
  !process.env.MONGO_URL &&
  process.env.DATABASE_URL &&
  process.env.DATABASE_URL.startsWith("mongodb")
) {
  process.env.MONGO_URL = process.env.DATABASE_URL;
}

console.log("[mongo-config] MONGO_URL", redactMongoUrl(process.env.MONGO_URL));
console.log("[mongo-config] MONGO_OPLOG_URL", redactMongoUrl(process.env.MONGO_OPLOG_URL));
