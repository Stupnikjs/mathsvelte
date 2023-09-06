<script lang="ts">
    import "../../../style/style.css"
    import Katex from "../../../katex/katex.svelte";
    import "@fontsource/voltaire"
    import Item from "../../../components/item.svelte";
    import AsideComp from "../../../components/AsideComp.svelte";
 
    
   
    $: itemTitles = [] as string[]; 

    function registerChildComponent(componentTitle:string) {
    if (!itemTitles.includes(componentTitle)) itemTitles.push(componentTitle);
    itemTitles = itemTitles
   }

   

</script>




    <AsideComp items={itemTitles}></AsideComp>
    <div class="voltaire mt-4">
        <Item title=" Generalitées" onMountCb={registerChildComponent}>
            <p> Les derivées sont des fonctions qui expriment la variation de la fonction en fonction du temps </p>
            <p> On peut demontrer , et essayer de trouver mathematiquement la valeur d'une derivé, en utilisant <Katex text={"\\Delta_x"} tailwind="inline"></Katex></p>
            <Katex text={"f(x)' = \\frac{f(x + \\Delta_x ) - f(x) }{\\Delta_x }"} tailwind=""></Katex>
            
            <div class="items-center flex flex-col gap-2">
                <p> Donc par exemple pour la fonction <Katex text="f(x) = x^2" tailwind="inline"></Katex></p>
                <Katex text={`f(x)' = \\frac{ (x + \\Delta_x )^2 - x^2 }{ \\Delta_x} `} tailwind=""></Katex>
                <Katex text={`f(x)' = \\frac{ x^2 + 2x\\Delta_x + \\Delta_x^2 - x^2}{ \\Delta_x} `} tailwind=""></Katex>
                <Katex text={`f(x)' = \\frac{  2x\\Delta_x + \\Delta_x^2}{ \\Delta_x} `} tailwind=""></Katex>
                <Katex text={`f(x)' =  2x + \\Delta_x  `} tailwind=""></Katex>
                <p> On néglige  <Katex text={`\\Delta_x  `} tailwind="inline"></Katex> donc on obtient <Katex text={`f(x)' =  2x  `} tailwind="inline"></Katex> </p>

            </div>
         
        </Item>
        <Item title="Derivées a connaitre" onMountCb={registerChildComponent}>
            <div class="flex flex-col items-center">
                <p> Dérivé de <Katex text={`e^x = e^x`} tailwind=""> </Katex></p>
                <p> Dérivé de <Katex text={`ln(x) = \\frac{1}{x}`} tailwind=""> </Katex></p>
                <p> Dérivé de <Katex text={`\\frac{1}{x} = - \\frac{1}{x^2}`} tailwind=""> </Katex></p>
            </div>
          
        </Item>
        <Item title="" onMountCb={registerChildComponent}>

        </Item>

        <Item title="Derivée d'une somme de deux fonctions" onMountCb={registerChildComponent}>

        </Item>

        <Item title=" Derivée d'un produit de deux fonctions" onMountCb={registerChildComponent}>
            <div class="">
                <p class="inline mr-4"> Soit f une fonction tel que </p>
                <Katex text={"f(x) = g(x) * h(x) "} tailwind="inline"></Katex>
                <Katex text={"f(x)' = f(x)g(x)' + g(x)f(x)'"} tailwind="" ></Katex>
            </div>
        </Item>
        <Item title=" Dérivée de fonctions imbriquées" onMountCb={registerChildComponent}>
            <Katex text={"\\frac{df}{dx}"} tailwind=""></Katex>
        </Item>

        <Item title="Matrice Jacobiènne " onMountCb={registerChildComponent}>
        </Item>
        <Item title="Matrice Hessienne" onMountCb={registerChildComponent}>

        </Item>
        <Item title="Série de Taylor" onMountCb={registerChildComponent}>
            <p> Soit f une fonction indefiniment derivable en un point a </p>
            <p> la serie de Taylor de f en ce point est la serie de fonction </p>
            <Katex text={` f(x) + \\frac{f'(a)}{1!}(x - a ) + \\frac{f''(a)}{2!}(x - a ) + \\frac{f''(a)}{2!}(x - a ) `} tailwind=""></Katex>
            <Katex text={`\\sum^{n}_{k=0}{\\frac{f^{(k)}(a)}{k!}}(X - a)^k`} tailwind=""></Katex>
        </Item>
        <Item title="Serie de Taylor multivariable" onMountCb={registerChildComponent}>
            <Katex text={`f(x + \\Delta_x, y + \\Delta_y ) = `} tailwind=""></Katex>
            <Katex text={`+ \\space f(x, y)`} tailwind="ml-20"></Katex>
            <Katex text={` + \\space (  \\delta_xf(x,y)\\Delta_x + \\delta_yf(x,y)\\Delta_y  )`} tailwind="ml-20"></Katex>
            <Katex text={` +  \\frac{1}{2}(\\delta_{xx}f(x,y)\\Delta_x^2 + 2\\delta_{xy}f(x,y)\\Delta_x\\Delta_y  \\delta_{yy}f(x,y)\\Delta_y^2 ) `} tailwind="ml-20"></Katex>
            <p class="text-center"> le terme de premier ordre n'est autre que le vecteur Jacobien de la fonction soit : </p>
            <Katex text={` \\begin{bmatrix}\\delta_xf(x,y) \\space, & \\delta_yf(x,y)\\Delta_y \\end{bmatrix} \\begin{bmatrix}\\Delta_x \\\\ \\Delta_y \\end{bmatrix} \\space \\space ou \\space \\space J_f\\Delta_x`} tailwind="text-center"></Katex>
            <p class="m-auto"> le  terme de deuxième ordre n'est autre que le vecteur des <Katex text={`\\Delta_x`} tailwind="inline"></Katex> Jacobien de la fonction soit : </p>
            <Katex text={`\\frac{1}{2}(\\begin{bmatrix} \\Delta_x & \\Delta_y \\end{bmatrix} \\begin{bmatrix}  \\delta_{xx}f(x,y) , &  
            \\delta_yf(x,y) \\\\ \\delta_{xy}f(x,y) & \\delta_{yy}f(x,y) \\end{bmatrix} \\begin{bmatrix}\\Delta_x \\\\ \\Delta_y \\end{bmatrix})`} tailwind="text-center"></Katex>

        </Item>
        <Item title="La méthode Newton-Raphson" onMountCb={registerChildComponent}>
            <div class="flex flex-col items-center gap-4">
                <p> Cette méthode permet de trouver la racine d'une fonction en plusieurs iterations </p>
                <p class="text-center"> la formule :  </p>
                <Katex text={`x_1 = x_0 - \\frac{f(x_0)}{f'(x_0)}`} tailwind="text-center"></Katex>
                <p> dans le cas particulier d'une fonction affine soit <Katex text={` f(x) = 2x + 2`} tailwind="text-center"></Katex></p>
                <p> prenons 3 comme valeur initiale x0 </p>
                <p> <Katex text={`x_1 = 3 - 8 / 2 = -1 `} tailwind=""></Katex></p>
                <p> <Katex text={`x_1 = -1 `} tailwind="inline"></Katex> est bien la racine de la fonction </p>
                <p> Cette méthode trouve directement la racine des fonctions affine puisqu'elle va estimer la fonction par le gradient, ou la derivée de premier ordre </p>
            </div>
            

        </Item>
        <Item title="La descente de Gradient" onMountCb={registerChildComponent}>
            <div class="flex flex-col items-center gap-4">
                <p> on extrapole la méthode Newton-Raphson à des fonctions a plusieurs variables </p> 
                <p> le gradient d'une fonction <Katex tailwind="inline" text={`\\nabla_f(x,y) = \\begin{bmatrix} \\frac{df_{(a,b)}}{dx} \\\\ \\frac{df_{(a,b)}}{dy} \\end{bmatrix} `}></Katex> <span>évalué au points a et b</span></p>
                <p> la valeur maximale que le gradient peut prendre est <Katex tailwind="inline" text={` \\mid \\nabla_f \\mid   `}></Katex> la somme des carrées des composant de <Katex tailwind="inline" text={` \\nabla_f    `}></Katex></p>
                <p> le gradient pointe vers la pente la plus abrupte </p>
                <p> le gradient nous permet de trouver le minimum d'une fonction </p>
                <p> il faut une succession de petit pas pour trouver le minimum</p>
                <Katex text={`S_{n+1} = S_n - y \\nabla_f(S_n)`} tailwind=""></Katex> 
            </div>
           
        </Item>
        <Item title="Multiplicateur de Lagrange" onMountCb={registerChildComponent}>
            <div class="flex flex-col items-center gap-4">
            <Katex text={` g(x,y) = x^2 + y^2 `} tailwind=""></Katex>
            <Katex text={`\\nabla_f = \\lambda\\nabla_g`} tailwind=""></Katex>
            </div>   
        </Item>
        
    </div>



<style>
</style>