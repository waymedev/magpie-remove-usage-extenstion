export function onEvent(event) {
  if (!event || typeof event !== "object") return;

  const hasEmptyChoices =
    Array.isArray(event.choices) && event.choices.length === 0;
  const hasUsage = event.usage !== null && event.usage !== undefined;

  if (hasEmptyChoices && hasUsage) return null;
}
