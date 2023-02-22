/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

// Promesa con javascrip vainnilla
const url = "https://platzi-avo.vercel.app/api/avo"
const urlSite = "https://platzi-avo.vercel.app/"
const appNode = document.querySelector('#mount')
appNode.addEventListener('click', (event) => {
    if (event.target.appNode === 'H2') {
        window.alert("hola")
    }
})
const formatPrice = (price) => {
    const newPrice = new window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD'
    }).format(price)
    return newPrice
}
// window.fetch(url).then((res) => res.json()).then((data) => {
//     data.data.forEach(item => {
//         console.log(item.name)
//     });
// })

// async await

async function fetchData() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        const allItems = []
        data.data.forEach((item) => {
            const image = document.createElement("img")
            image.src = `${urlSite}${item.image} `
            const title = document.createElement('H2')
            title.textContent = item.name

            const price = document.createElement("div")
            price.className = "text-gray-600"
            price.textContent = formatPrice(item.price)
            const article = document.createElement("article")
            article.append(image, title, price)

            allItems.push(article)
        })
        appNode.append(...allItems)
    } catch (error) {
        console.error(error)
    }
}

// const fnAsyncAwait = async () => {
//     let fragment = document.createDocumentFragment()
//     try{
//         const aguacate = await fetchData(url)

//         aguacate.data.forEach((item) => {
//             console.log(aguacate.data, "data")
//             const image = document.createElement("img")
//             const title = document.createElement('h2')
//             const price = document.createElement("div")
//             const article = document.createElement("article")
//             article.append(image, title, price)

//             fragment.appendChild(article)
//         })
//     } catch (error) {
//         console.error(error)
//     }
//     
// }

fetchData(url)