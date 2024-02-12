const input = document.getElementById('number') as HTMLInputElement;
const result = document.getElementById('output') as HTMLSpanElement;
const button = document.getElementById('convert-btn') as HTMLButtonElement;

// input placeholder and caret animation
input.addEventListener('focus', function () {
	input.placeholder = '';
	input.style.caretColor = 'black';
});

input.addEventListener('blur', function () {
	input.placeholder = 'Ingresa un número';
	input.style.caretColor = 'transparent';
});

function toRomanNumber(input: number): string {
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
	];

	let result: string = '';

	for (const pair of romanSymbols) {
		const [value, symbol] = pair;

		while (input >= value) {
			result += symbol;
			input -= value;
		}
	}
	return result;
}

// * Trigger function on click.
const convertNumber = (): void => {
	const number = parseInt(input.value);
	if (isNaN(number)) {
		result.textContent = 'Enter a valid number';
	} else if (number < 1 || number > 3999) {
		result.textContent = 'Number must be between 1 and 3999';
	} else {
		result.textContent = toRomanNumber(number);
	}
};

button.addEventListener('click', convertNumber);

// * Trigger function on enter.
input.addEventListener('keyup', (event) => {
	if (event.key === 'Enter') {
		convertNumber();
	}
});
