export default function shortenBody(body: string, maxLength = 100) {
  //fail-safe, if maxLength is longer than body
  if (body.length <= maxLength) return body;

  //Append the ... here, [READ MORE] is better added at component level
  return body.slice(0, maxLength) + "...";
}
