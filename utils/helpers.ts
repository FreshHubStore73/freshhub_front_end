export function addSpaces(text: string): string {
    return [...text]
        .reduce((acc: string[], cur, i) => {
            [2, 5, 8].some((e) => e === i) ? acc.push(' ', cur) : acc.push(cur);
            return acc;
        }, [])
        .join('');
}
