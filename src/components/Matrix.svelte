<script lang="ts">
    import Katex from "../katex/katex.svelte";

    type item = string | number
    export let arr: item[][] 
    export let tailwind: string
    export let type:string; 

    function arrToString(arr:item[][]){
        let str = ""
        for (let i = 0 ; i < arr.length; i++){
            for (let j = 0 ; j < arr[i].length; j++){
                str += arr[i][j]
                str += " "
                if (j === arr[i].length - 1) str += "\\\\"
                else str += "&"
            }
        }
        return str
    }

</script>


<Katex tailwind={tailwind} text={`\\begin{${type}matrix} ${arrToString(arr)} \\end{${type}matrix}`}></Katex>