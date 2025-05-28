type OutlineClassArguments = {
  isCorrect: boolean | null;
  isSelected: boolean;
  answerSubmitted: boolean;
};

/**
 * Returns the correct outline styles for answer options.
 *
 * @export
 * @param {OutlineClassArguments} {
 *   isCorrect,
 *   isSelected,
 *   answerSubmitted,
 * }
 * @return {string}
 */
export function getOutlineColor({
  isCorrect,
  isSelected,
  answerSubmitted,
}: OutlineClassArguments): string {
  let outlineClass = "";
  if (answerSubmitted) {
    if (isCorrect === false && isSelected) {
      outlineClass = "answer-outline-incorrect";
    } else if (isCorrect === true && isSelected) {
      outlineClass = "answer-outline-correct";
    }
  } else if (isSelected) {
    outlineClass = "answer-outline-selected";
  } else {
    outlineClass = "answer-outline-default";
  }
  return outlineClass;
}
