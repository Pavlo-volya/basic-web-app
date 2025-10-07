export default function QueryProcessor(query: string): string {
  const lowerQuery = query.toLowerCase();

  const additionMatch = query.match(/what is (\d+)\s+plus\s+(\d+)\??/i);
  if (additionMatch) {
    const first = parseInt(additionMatch[1], 10);
    const second = parseInt(additionMatch[2], 10);
    return (first + second).toString();
  }

  const largestMatch = query.match(
    /which of the following numbers is the largest:\s*([\d,\s]+)\??/i
  );
  if (largestMatch) {
    const numbers = largestMatch[1]
      .split(",")
      .map((n) => n.trim())
      .filter((n) => n.length > 0)
      .map((n) => parseInt(n, 10))
      .filter((n) => !Number.isNaN(n));
    if (numbers.length === 0) {
      return "";
    }
    const largest = Math.max(...numbers);
    return largest.toString();
  }

  if (lowerQuery.includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (lowerQuery.includes("name")) {
    return "Pasha D";
  }

  if (lowerQuery.includes("andrew id")) {
    return "Pasha D";
  }

  if (lowerQuery.includes("class")) {
    return "17313";
  }

  return "";
}
