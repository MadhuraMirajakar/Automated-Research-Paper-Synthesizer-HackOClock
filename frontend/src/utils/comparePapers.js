export function compareWithTheme(papers, theme) {
  const result = {
    high: [],
    medium: [],
    different: [],
  };

  // 🔹 Clean and split theme into keywords
  const themeWords = theme
    .toLowerCase()
    .split(" ")
    .map(w => w.trim())
    .filter(w => w.length > 2); // remove small words like "a", "is"

  papers.forEach((paper) => {
    const text = paper.summary.toLowerCase();

    let matchCount = 0;

    themeWords.forEach((word) => {
      if (text.includes(word)) {
        matchCount++;
      }
    });

    // 🔥 RULE-BASED CLASSIFICATION
    if (matchCount >= 2) {
      result.high.push({ ...paper, matchCount });
    } else if (matchCount === 1) {
      result.medium.push({ ...paper, matchCount });
    } else {
      result.different.push({ ...paper, matchCount });
    }
  });

  return result;
}