import katex from "katex";
export default function katexify(math:string,displayMode:boolean){
	const options = {
		displayMode: displayMode,
		throwOnError: false
	};
	return katex.renderToString(math, options);
}