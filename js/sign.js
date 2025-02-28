const  navbarBrand  =  document.querySelector('.container a');

navbarBrand.innerHTML  =  `

<svg class="svg" width="516.211" height="104.591" viewBox="0 0 516.211 104.591" xmlns="http://www.w3.org/2000/svg">

<g class="g" id="svgGroup" stroke-linecap="round"
fill-rule="evenodd" font-size="9pt" stroke="#000"
stroke-width="0.25mm" fill="none" style="stroke:#000;stroke-width:0.25mm;fill:none">

<path d="省略的内容" vector-effect="non-scaling-stroke"/>

</g>

</svg>

`;

const  paths  =  document.querySelector('.container .navbar-brand .svg .g path')

const  len  =  paths.getTotalLength()

paths.style.setProperty('--l', len)