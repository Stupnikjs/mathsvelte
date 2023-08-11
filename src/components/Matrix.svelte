<script lang="ts">
    import Katex from "../katex/katex.svelte";

    export let arr: number[][]
    export let tailwind: string

    function arrToString(arr:number[][]){
        let str = ""
        for (let i = 0 ; i < arr.length; i++){
            for (let j = 0 ; j < arr[i].length; j++){
                str += arr[i][j]
                str += " "
                if (j === arr[i].length - 1) str += "\\\\"
            }
        }
        return str
    }

</script>


<Katex tailwind={tailwind} text={`\\begin{pmatrix} ${arrToString(arr)} \\end{pmatrix}`}></Katex>