// import React, { useState } from "react";

// const useInterval = setInterval(() => {
// 	const completedWord = `hello, I'm minzyee:)`; // 최종으로 찍힐 문자열이다.
// 	const [landingWord, setLandingWord] = useState(""); // 초기값은 빈 문자열로 셋팅
// 	const [count, setCount] = useState(0); // 문자열 하나씩 늘려주는 카운트

// 	setLandingWord((prev) => {
// 		let result = prev ? prev + completedWord[count] : completedWord[0];
// 		setCount(count + 1);

// 		if (count >= completedWord.length) {
// 			setCount(0);
// 			setLandingWord("");
// 		}
// 		// console.log(result);
// 		return result;
// 	});
// }, 200);

// export default useInterval;
