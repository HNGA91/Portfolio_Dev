import { useState, useEffect } from "react";

type WordConfig = {
	word: string;
	duration: number;
};

export const useWordCycle = (words: WordConfig[]) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const currentDuration = words[index].duration;

		const timeoutId = setTimeout(() => {
			setIndex((prev) => (prev + 1) % words.length);
		}, currentDuration);

		return () => clearTimeout(timeoutId);
	}, [index, words]);

	return words[index].word;
};
