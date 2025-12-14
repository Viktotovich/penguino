/*Can be extended to wait for the word to finish. Algo will be something like:
 * 1 - Break everything into an array
 * 2 - If you hit a space, you're good to cut
 * 3 - If you hit a char, keep going up to 7 chars more
 * 4 - After 7 (or 8, arbitrary really), append a dash and the 3 dots
 * 5 - Connect all and return as string
 *
 * Or just come up with something better. As I was writing this, I've realized
 * you can just use " " spaces are a tell for words. Explore that (it's more
 * efficient)
 * */
export default function shortenBody(body: string, maxLength = 100) {
  //fail-safe, if maxLength is longer than body
  if (body.length <= maxLength) return body;

  //Append the ... here, [READ MORE] is better added at component level
  return body.slice(0, maxLength) + "...";
}
