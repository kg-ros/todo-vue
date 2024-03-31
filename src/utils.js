export function generateId(s) {
    const ids = s.tasks.map(({ id }) => id) || []
    const generatedId = Math.floor(Math.random() * Date.now());
    return ids.includes(generatedId) ? generateId(s) : generatedId;
}