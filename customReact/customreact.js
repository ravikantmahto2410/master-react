// function customRender(reactElement, container){
    
//     const domElement = document.createElement(reactElement.type)  //element ho gya create
//     domElement.innerHTML = reactElement.children
//     domElement.setAttribute('href', reactElement.props.href)
//     domElement.setAttribute('target', reactElement.props.target)

//     container.appendChild(domElement)
// }

// const reactElement = { //since hum react use nhi kar rhe hai isliye jisko bhi hamari library use karni hai usko aise hi har ek element issi tarah likhna padega
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'

// }

// const mainContainer = document.querySelector('#root')

// //now we want ki hamare paas ek method ho , jo ki isko render kar de
// //render kaise kar de - reactElement ko add kar de root ke ander

// customRender(reactElement, mainContainer) //this method takes two things pehli cheez ki kya inject karoon(createElement), dusri cheez kahan par inject karron(mainContainer)

//version 2 better and modular
function customRender(reactElement, container){
    
    const domElement = document.createElement(reactElement.type)  //element ho gya create
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if (prop === 'children') {
            continue
        }
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const reactElement = { //since hum react use nhi kar rhe hai isliye jisko bhi hamari library use karni hai usko aise hi har ek element issi tarah likhna padega
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

//now we want ki hamare paas ek method ho , jo ki isko render kar de
//render kaise kar de - reactElement ko add kar de root ke ander

customRender(reactElement, mainContainer) //this method takes two things pehli cheez ki kya inject karoon(createElement), dusri cheez kahan par inject karron(mainContainer)


