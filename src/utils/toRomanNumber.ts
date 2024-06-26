export function toRomanNumber(input: number): string {
	const romanSymbols: Array<[number, string]> = [
		[1000, 'M'],
		[900, 'CM'],
		[500, 'D'],
		[400, 'CD'],
		[100, 'C'],
		[90, 'XC'],
		[50, 'L'],
		[40, 'XL'],
		[10, 'X'],
		[9, 'IX'],
		[5, 'V'],
		[4, 'IV'],
		[1, 'I'],
	]

	let result: string = ''

	for (const pair of romanSymbols) {
		const [value, symbol] = pair

		while (input >= value) {
			result += symbol
			input -= value
		}
	}
	return result
}
