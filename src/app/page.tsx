'use client'
import { useState } from 'react'
import { toRomanNumber } from '@/utils/toRomanNumber'

export default function App(): JSX.Element {
	const [inputValue, setInputValue] = useState('')
	const [isFocused, setIsFocused] = useState(false)
	const [result, setResult] = useState('')

	const handleChange = ({ target }: { target: HTMLInputElement }): void => {
		setInputValue(target.value)
	}

	const handleFocus = (focused: boolean): void => {
		setIsFocused(focused)
	}

	// * Trigger function on click.
	const convertNumber = (inputValue: string): void => {
		const number = parseInt(inputValue)
		if (isNaN(number)) {
			setResult('Enter a valid number')
		} else if (number < 1 || number > 3999) {
			setResult('Number must be between 1 and 3999')
		} else {
			setResult(toRomanNumber(number))
		}
	}

	const handleClick = (): void => {
		convertNumber(inputValue)
	}

	const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>): void => {
		if (event.key === 'Enter') {
			convertNumber(inputValue)
		}
	}

	return (
		<section className="main-section">
			<h1 className="main-section__title">Roman Numeral Converter</h1>
			<div className="main-section__input-container">
				<span className="main-section__top-key"></span>
				<span className="main-section__bottom-key-1"></span>
				<span className="main-section__bottom-key-2"></span>
				<input
					id="number"
					className="main-section__input"
					type="number"
					placeholder={isFocused ? '' : 'Please input a number'}
					onFocus={() => {
						handleFocus(true)
					}}
					onBlur={() => {
						handleFocus(false)
					}}
					style={{ caretColor: isFocused ? 'black' : 'transparent' }}
					onChange={handleChange}
					value={inputValue}
					onKeyDown={handleEnter}
					required
				/>
			</div>
			<button
				onClick={handleClick}
				id="convert-btn"
				className="main-section__btn-check btn-check"
			>
				<span className="btn-check__top-key"></span>
				<span className="btn-check__text">Check</span>
				<span className="btn-check__bottom-key-1"></span>
				<span className="btn-check__bottom-key-2"></span>
			</button>
			<div id="output" className="main-section__result">
				{result}
			</div>
		</section>
	)
}
