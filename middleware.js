export function onEvent(event) {
  if (!event || typeof event !== "object") return;

  const hasEmptyChoices =
    Array.isArray(event.choices) && event.choices.length === 0;

  if (hasEmptyChoices) return null;
}
