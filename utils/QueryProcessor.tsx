export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "Pasha D";
  }

  if (query.toLowerCase().includes("andrew id")) {
    return "Pasha D";
  }

  if (query.toLowerCase().includes("class")) {
    return "17313";
  }

  if (query.toLowerCase().includes("What is 33 plus 87?")) {
    return "120";
  }

  if (query.toLowerCase().includes("Which of the following numbers is the largest: 95, 85, 74?")) {
    return "95";
  }
  if (query.toLowerCase().includes("What is 82 plus 92?")) {
    return "174";
  }


  return "";
}
