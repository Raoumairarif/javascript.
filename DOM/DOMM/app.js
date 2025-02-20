// var divElement = document.getElementById("parent")
// console.log(divElement)
// const pElements = divElement.getElementsByTagName("p")
// console.log(pElements)
// var firstElements = pElements[0]
// console.log(firstElements.innerHTML)
// firstElements.innerHTML = "afg"
// var secondElements = pElements[2].innerText
// console.log(secondElements)
// var nthChild = divElement.childNodes
// console.log(nthChild)
// var nnthChild = divElement.childNodes[4]
// console.log(nnthChild.nodeType)
// for (let i = 0; i < nthChild.length; i++) {
//     var childNode = nthChild[i]
//     if(childNode.nodeType == 1){
//         console.log(childNode)
//     }
    
// }
// const firstElement = divElement.firstChild
// console.log(firstElement)
// const pElements = divElement.getElementsByTagName("p")
// console.log(pElements)
// const firstElements = pElements[0]
// const nextSibl = firstElements.nextElementSibling
// console.log(nextSibl)
// firstElements.innerText = 'afg'
// const secondElements = pElements[1]
// secondElements.innerText = "bangladesh"
// const nthChild = divElement.childNodes
// console.log(nthChild)
// console.log(divElement.childNodes[0])
// console.log(divElement.childNodes[1])
// console.log(divElement.childNodes[2])
// console.log(divElement.childNodes[3])
// console.log(divElement.childNodes[4])
// console.log(divElement.childNodes[5])
// console.log(divElement.childNodes[6])


// const nthChild1 = divElement.childNodes[0]
// console.log(nthChild1.nodeType)

// const nthChild2 = divElement.childNodes[1]
// console.log(nthChild2.nodeType)

// const nthChild3 = divElement.childNodes[2]
// console.log(nthChild3.nodeType)

// const nthChild4 = divElement.childNodes[3]
// console.log(nthChild4.nodeType)

// const nthChild = divElement.childNodes

// for (let i = 0; i <nthChild.length ; i++) {
//     const nnthChidls = nthChild[i]

//     if(nnthChidls.nodeType == 1){
//         console.log(nnthChidls.innerHTML)
//     }
// }
// const firstChild1 = divElement.firstChild
// console.log(firstChild1)
// const firstChild = divElement.firstElementChild
// console.log(firstChild.innerHTML)
// const lastChild = divElement.lastElementChild
// console.log(lastChild.tagName)
// const parentDiv = divElement.parentNode
// console.log(parentDiv)
// const nextSib = divElement.nextElementSibling
// console.log(nextSib)
// const preSib = divElement.previousElementSibling
// console.log(preSib.tagName)
//  const ulElement = document.getElementById('list')
//  const ulStyling = ulElement.getAttribute('style')
// //  console.log(ulStyling)
//  ulElement.removeAttribute('class')
//  const isStyled = ulElement.hasAttribute('class')
//  console.log(isStyled)
//  ulElement.setAttribute('class','abcdef')
//  const isStyled1 = ulElement.hasAttribute('class')
//  console.log(isStyled1)
//  const ulStyling = ulElement.getAttribute('class')
//  console.log(ulStyling)
//  ulElement.classList.add("cde")
 
//  ulElement.classList.add("hum")
//  const isStyled2 = ulElement.getAttribute('class')
//  console.log(isStyled2)
//  const ulChild = ulElement.getElementsByTagName('li')
// //  console.log(ulChild)
//  const firstElement = ulChild[1]
//  console.log(firstElement.innerText)
//  firstElement.setAttribute("id","cde")
//  console.log(firstElement.hasAttribute('id'))
//  console.log(firstElement.getAttribute('id'))
//  const child1 = ulElement.firstElementChild
//  console.log(child1)
//  child1.setAttribute('class','abcd')
//  console.log(child1.hasAttribute('class'))
//  console.log(child1.getAttribute('class'))

//  console.log(firstElement.removeAttribute('id'))
//  const firstElement2 = ulChild[2]
//  console.log(firstElement)
//  const firstElement3 = ulChild[3]
//  console.log(firstElement)
//  const firstElement4 = ulChild[4]
//  console.log(firstElement)



//  const childNode = ulElement.childNodes
//  console.log(childNode)
//  for (let i = 0; i < childNode.length; i++) {
//     const childNodes1 = childNode[i]
//     if (childNodes1.nodeType == 1) {
//         console.log(childNodes1.innerHTML)
//     }
//  }
//  const childNodes = ulElement.childNodes[3]
//  console.log(childNodes.hasAttribute('id'))
// function newDiv(){
//     const div = document.createElement('div')
//     // console.log(div)
//     const h1 = document.createElement('h1')
//     const textNode = document.createTextNode('Pakistan')
//     h1.appendChild(textNode)
//     div.appendChild(h1)
//     console.log(div)
//     const Pelement = document.createElement('p')
//     const pText = document.createTextNode('pakistan zindabad')
//     Pelement.appendChild(pText)
//     div.appendChild(Pelement)
//     document.body.appendChild(div)
    
// }
// newDiv()
// newDiv()
// newDiv()
// console.log(div,h1)
// div.innerHTML = '<p></p>'
// div.innerHTML += '<p></p>'
// console.log(div.innerHTML)
// div.appendChild(h1)

//  const ulElement = document.createElement('ul')
//  console.log(ulElement)
//  const liElement1 = document.createElement('li')
//  liElement1.appendChild(document.createTextNode('javascript'))
//  const liElement2 = document.createElement('li')
//  liElement2.appendChild(document.createTextNode('python'))
//  const liElement3 = document.createElement('li')
//  liElement3.appendChild(document.createTextNode('react'))
//  const liElement4 = document.createElement('li')
//  liElement4.appendChild(document.createTextNode('node.js'))
//  const liElement5 = document.createElement('li')
//  liElement5.appendChild(document.createTextNode('java'))
//  ulElement.appendChild(liElement1)
//  ulElement.appendChild(liElement2)
//  ulElement.appendChild(liElement3)
//  ulElement.appendChild(liElement4)
//  ulElement.appendChild(liElement5)
//  ulElement.insertAdjacentText(liElement5,liElement4)
//  liElement1.insertAdjacentHTML("beforebegin",liElement3)
//  document.body.appendChild(ulElement)

 
 
 
//  function addLanguage(addLang) {
//     const li = document.createElement('li')
//     li.appendChild(document.createTextNode(addLang))
//    document.getElementById('language').appendChild(li)
    
//  }
// addLanguage('paython')
// function addChild(addElement){
//     const element = document.createElement('addElement')
//     element.appendChild(document.createTextNode('js'))
//     document.getElementById('language').appendChild(element)
//     console.log(addElement)
// }
// addChild('li')
// // addChild('li')
// // addChild('li')
// function addLanguage(addLang){
//     const li = document.createElement('li')
//     li.appendChild(document.createTextNode(addLang))
//     document.getElementById('language').appendChild(li)
// }
// addLanguage('paython')
// addLanguage('React')
// // addLanguage('nodeJs')
// const ulElement = document.createElement('li')
// const img = document.createElement('img')
// img.setAttribute('src','data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUPEBAVFRUQFRUVFRUVFRUVEBUQFREWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGC0dHx0tLS0rKystLS0tLS0tLS0tLS0tLS0tLS0tLSstLSsrLS0tLS0tLS02KystKystLS0tN//AABEIAKgBLAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwUGBwj/xAA8EAACAQIDBQQHBwQCAwEAAAAAAQIDEQQhMQUSQVFhcYGRoQYTIkKxwdEUFTJSguHwI2KS8UOiM3LCU//EABkBAAIDAQAAAAAAAAAAAAAAAAADAQIEBf/EACgRAAIDAAEDBAIBBQAAAAAAAAABAgMREgQhMRNBUWEUIgVCUnGBkf/aAAwDAQACEQMRAD8A9pbGuNca5mHYSuRuM2M2RpODtjNkWxmyrZZIdsi2M2RcirZZIdkGJsi2LbLpDMhIk2QZRsuiDKpFrKpC2xqK5FMi6RTIqOiUzKKhfMomQaIA9QHmEVAabA1QBqxn4gPrMz67GRHNGfXAK5oVgGsjVBiJozK6M3EI1a8TOrxNUGYLomTWiCzRoVogVRGiJyLog7GJyREGZhmMOMVAQhCABCEIAEIQgA+wSNxMi2YzVg7ZFsYZsq2WSE2RbE2RbFtl0hNjNjXGKNlsFcYQrFNJIsiyyxFxKlkytlci5orlEqy6ZRIqkXTRXJFR0WDTB5hNRFE0BpgDVAWoF1EC1CcNUASqA10H1ASsi8TUvBm1YglWBoVEDVYj4sVKJlV4GdiIG1WiZmIgaoMxXRMatECqxNSvAArRNMWci+IDNFbL5oqaGNHOZAQ4xRgMIcYgBCEIAEIQgA+vmRZJjNGJmtEBie6TUCjJ0GkRCXErdMXIspIpFYs3B9wWW5FaQ9ibgNYroaNYTRISRGkaVTiDzDJoGqRKtjIMGmQcC2SGSKo0Jg0qRTOmGyK5jEhkZszakASpE1akQKrTJw11zMyrEDqo06tFgdSkyTdCSZmVUDVTRq4dgdahLkMiTJGdWM/EI1KsAKvTNMGZLYmPXiAV4m1LBzllGLfYiNX0exFt71f/AGjfwuaYyRy7q2/COZqookjoqfo3XnnuqK5yf0I1fRipH8Ul2K7Zo1M5Nlcl3w5xoibNXY0lz77A8tlzXLxRHERywzhBk8A1rKC/UgedO3FPsIcWSpplQ4hFcLCGHEAH180JRJsSMDNOjJEmITKkEGKwmJC2WGaGJ2GcRUtDSAnEmkLcFNsNKmhi31YziUcmvJPIqkUVUEysD1prmVdiGwYHUZBzyHq148QSpNPRgpGyEdCN4GrSI+sfEqqu46LHRh3IyrDqVyilR3uJYrRyXiMQ9peENKBRUpX1QX625XKRfCYtozauG5MCrYeS0aNiowWqycNUJtmHUo31RV6uC4eJoYiaXAza1Ra6DYkzDaKV1HJXLa0t+e5BZLV8EgXY9JycqnBLdXa9f51NGOGlbjnyWXi8hqRgtmB4vFRirK2WS7Tldq7ThH3t6XbxOj2lsWUlec3CPJZzflkYlbZkIK9KGfGTd5PrdmupI4vVWSOTxmPqPOzXd9TOliJPibG1cO45uPjcxpLoOafsc3kt7kXUb4kbFsaT4klS5IOLYepFeChoYMdC6u2k11zZV6h8FfuIdbBXRZQInKNtSBRrBqaZ9eKqh1NPQz6dQJjmYZRL12aE7xJSKE+Y4lmjNLJLkVuRNTEyjBEVULFNFMoEHkUbwtxTCGRdRopVUaddGeb90wUGW+vRXUqR1uDTxAPVxCsYrLWOjSE1Ki5g0+rKqcyvEy6+YlSNEa8eEasocLd4FWq56vuKcTPlJeQI2m/xZ9GOjI6FdPuFSlfSRVKrNLmU2aeTLlJ2NMJjuOA+HxzWTTKq20Hwv32I104u6jk/IHrVlq1oaFI0xri3uB9LGXWat14E6jbV4yXc8zm8ZtCUdGCQ249HF9tn8UNT0s6Enp0bxVROzT8LjvEza08jHpY9JNxnvPWyu5eGpfgNsNuzWT0vHPtzLIJQS8JBscNWqPJ2XOySXkauG2RSivb/AKkuLdt3uWgNSxN1vN9nLwGltRRu3ouX7jIsx2qT+jVmoRjZRUVyikkZOJ2hFVoQT92cpZ6fhUW3/l4GPtH0ijJP1b9pcLNvtSWpgYbEy9qpUmlKeVsm1BaRsr2/dmquDfk5fUWxj206ram34J7qtmtbXOMrbfm9Urdcl5BNepFu7bdlwys3018geGAU7WUUubd7dvA1wikjidRa5MDxm03VhupR/wAb59pzlRSbyz7EegUdm4eKs25vilJKK8ECYvG0oXjGnBJcVr42sNRhc8fycSqU+Xx+QzuuL8l9TXxmMi/efZw8rGY7PQnj9k+p9FDf8zZNNr3rEp0uj7yVWirJpapceSs/NMjiyzmmip24tsi0uQ+7YZsh/ZMX8H1jOglwK72C1K5XXgrHOkjQs8orjVXMsUzKxCadxQxNlqIkmNhavc1d9cxnIzFjYy53+I8MRyl9fBimhysRo+sGc0A/bbZS/niNLFR5GebaHRxhFRPg/kDVU+oyxEeD8SqeLtwv2WMc3pojFkXC/vPzHdPLISxseMPIuo14vSxncUNbkvYz8Q5KyXF99rfugTEYWTzbNmavO/5V5vX5FFeF8rC2htdrRzVbAX4/Eq+74/maN2rQb0QJVwciyZ0IdR94ZiwjeSmr9f2LYYWqtFf9QSsBJviGU8DUirqdv5yGRmWnel7ox6sq0dacrdzQDXxS0kl1Oir16nvQUrcU91/Cxz+3cHCpG8qc11tFteZohYMotTf7Jf6MDaeBlJb1L21yut5dnP4nNYnE1ovd3JXXCz3vDVGxWwajlGtNd1mn0eZj7U2hiqTUKk9+D/DvxhOL/wAk8zpdP+zzyU6y7hDl3X2u5GhjK97uEkucoyt9TYwnpLuWu3Nr9MfB6+Pcc1DbM7pKlSd+Cp7rb6bjQV9sSf8AWjGL/wDzSUp/qb/8ffn0Nnpb5Ry1/IRSxTb/AMo6ul6U+sag6Cbeijk7fpdrdxfOphpq05TV/dU7x75XV+7xOR+8IbrjTpKKeu42m+W/KSd/h0QHicd+a7/U/wD53RkaTPZ1zz5Ozp4OhO6hNSS92LtG/C+l32gG0tn1lmlGMVwjLXtZiR2qo0lCMYxbvJ2Tcm29Xw0S8AT7zlndyfLO3mh8Y4c66+Ml2Qetq1Ivcei4WTj2mhh9oQf43n/1XcjmnjFLKd/iO6EdYVE+jtF+DY5Yc+fI6uVeUvwSi13LwT+Zl4+vKOUk+9GfSp1uCk+xXL3Gpa0m10f0GIzNGdWr3B2zSlhP7G1xcbprutYreB5N9kk0yrTYyM4oHp4qccr5cnobWwK9Kc/VzppRnb9MvzLlwT6dgDS2cuMu62fma+A2el7NrX46t9hKTF22xwsxexVvNKF1zWXyMTEbKkpNKLsdpRoSVpWbSdrPWy49tgiVKLzWhOJmJdS4+D16UnFjvEZZkauasBOfB6owcdNrscGKvVM9vN818CVeVpX5g866TzIcCjuLt7j+5ViJPWL14cL9CE6ttHcErYn+fuLlV3Gx6lZjJvFTWV+7VeDIzxrir3S/9X8s0ZtfFP8AMB1sVLn8PmKl0+jodXhrLbVtXvd1v55AlTazbvaXxXirmLVxjvaSt1IqvTfv+AiXSJextr63e2m/S2pBvWz6M0aO1Esrs5WFOD/5PNX8w/CYBL8M9epguoijqU3ykdds/aF3Z3tK+uduRpRocXZrpmYey8C4pNu77TQniZwbtmuRhccY+Udf6hc5L3beVyiTYNLFxlk00+TV/BordTlJrv8AqRxZMYBu81wBq+JXFglbEyS0Uu+31MuvtaF7Shbz+AyNUpeB0a0u8g7EYyC99eKBniIyyTT6aP6MxdqYqhLJSjpwk/gnl3nDbUqVFP8AoSmnfJRcvH/Zvo6CU/oi3q66Vq7nouOwqkvaXc1mu9GTiMHFRcKqUqb9y29JrnbLcfW5i7K9LZQUadWe/b8U7XV+G6tbf3LXgra9HQqUq8bwaSfOSd+yXDskkaPxJ1+SI/yMLFi/4cFtmnCj7OHW7B3vJXdaS470nml0Vl0OflJcFY73bXows/6rp3/P+F9rOfrei9VOySlfRxas10R065bHycbqI/t+qxGApvmJybzeZuQ9FcQ9IPLW9opd7YWvQya/8tenT6Zzn3Qjmxpmx/Bz1WumllZrLhzKbnSS9G6Ky+3U7/llCcH2e00U1/R/d/5E14DOLYpzUTBsE4elfil2hlbZij73mvgQhh0talu1XXky8YYKnZq7DyTj7y7mreAO674Sa7Gwz1C19ZCXZ+4VTSis4Qa52QwzcsMmGMqrNTl4ssUZ1Pai2+au20bFJ0lm4ZdEaOy4r1qlSbS7Ve3G6ISKztxbgH6NbLqSqL1sXufmldNPpzO7qYSmlZJd3yFLA7yUlJ37voU4fDzi25S9jVXzk3yXQk51tjm9YZhKUb2t1zMnH0Vvu2X+wyjX3XJt9lviYmL2nFyer7NAXkTja7HrsqoLiZe8uGvYQlVK3UMqRulPSU7SRm42imrphKlbIExUrO/B6/UlIpJ6jKlKcPZea4Mqni3x/niFVqnS6BZpPh4DVjMuNeGUVK8XrkBVYRlpJhk8JHVS/naRWFfCK7f9kOMRsXMA+wS/NkShsa+qi+1X8jShRtqmF0ZRWrETXwbqdXkDwmxrf6svA2sDsxrP5fUlRrr+XNGhUjz8nc591TZ2entivcMw1CxnY2nO7tI06VXt+YDitdTGunWnUV3bTHdCo3nLyQRClUSzqX7l8wi3UUFYcunXwCv+yipht5ZzafVRa8UkZG0NnT5p9iafjc6GqroBl23+A6upL2Inc88nD7Z2Up6wbsrJXV/NfM5zEYecE4wcop5NSu79HfRdiR6fiKKl2mNjdmqT9rLr/NDoVvDnWrl3PPfV1U+XZbP6k6VCvvb9OUk1rJNp+CN7EYFKVo+KVwvBXVlBdry8x5kaemfhfSDFU1uzlGa5Sir+GnkaFH0mkllh1G+u76xX7oyNyls6lNb0oq/MHxWzYxytlzRTIfBfnYvc5ja/pVWlH1dNumv7d5T7pzblH9NjlKkLtu17u7vm2+b6nf4nZkLXeniYuKwUfdVuwuor2KucvL7nOKpNK15W5Xe74aCpYmUXeLt2aeAdWwbQPPCvkHFrwyOSflGhg9qwl7NaCs+MV5taM2qWxKVSO/Q3X2Pet2xdrHIOg0EYPEzpS3qcpRa5OxZN+4mcF/SdLT2TWjm6Sa5xzX/VsaVGN7Thuvv+pDDela/5aF5fnpz3J96tZmlQ9LqTsnJW/LUo+1/lTbXiX0zyjL4KqWCja8bdj/2AzqVYz/ppt/23f1N2XpNhLZwiuyMZJ92vkZmI9JqNv6TXY4yhBdbKOYahfGf9ppbMqyS3sVPLTdumuyT49iLMfthXtBvlwWXC3Q4rG7QU3vSq3tokptdyskiMNrO26lnwlK1/DReZHJB+LLzh1tbHKFPN2vm1k8+vM4/G4mUptln2iUwXEq0rEhXWonvjqkXVMt41cyueO6iME8TUnWBq1Yya20OoBV2n1JUQxhmMk45x8DNnjHfPLoM9qJ62BcRiYyGIhU9w2GL6h2Hxhys67WmaJ0sdHiirWmiNeHYPFonCtHp5HM08XF8EXwx0Vol8yOJLizqY1Ui+li0jlFtPqOtpdRcoaOr1Hax2hF8bEKmJg+Jx33l1F95dRPoI2LqJHWesjzXiSWIXM5L7y6kltPqHpFlezrPtC5g1ZJ5xdvgc8tqdR1tTqCqL/kGvODetgethL+87cnmgH70F969S6i0Ud2jV6FF+y5Z/ziKlhlH8Nmud7/AhPaUXqk+1IoeNp8IR8EMKOempColqynFY1W3dfkAS2quANW2onqGByMuVao6kle6u+zUtVO+rI1MTHhkCVcUuZYhNB06cQSrTiCyxXUoqYvqStBtFlWCKJ0UimWKKp4m/EtotrRVUUNjyqFTZDkEax5SIibIsW2OjEcQwiNL4TU3zIub5kRA5EKCPS/vDqV1NodTkntNlNTaLHdjCqvo6LFbS6mZV2j1Mapim+JS6pHJIuqWbDx/UX2/qY3rBb4eoi/oM2fvDqP8AbzF32LfI5oPQZtrHkltDqYfrBesDmg9Fm8sf1JLHdTA9aL1zDkg9KR0ax3Umsd1ObVdjrEMNRPCR0qxvUdY3qc19pY/2pkdg4SOl+29RfbepzX2pjfamHYOEjpXjupXLH9TnXiWRddhqJ4SN+W0OpXLaHUwnWYzqMOSJ9ORsy2h1KZ458zLcxt4jmiyqYfLFvmVSxLBLiuRzJVRe6zIOoV3GK8yygibmNvEREci3FErjDCDScHuIYQaA4hhEAOIYQAPcVxCDQwQwhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAIQhAAhCEACEIQAf/2Q==')
// console.log(ulElement)
// console.log(img.hasAttribute('src'))
// let attr = img.getAttribute("src")
// console.log(attr)
// ulElement.appendChild(img)
// document.getElementById('language').appendChild(ulElement)


// const newKey = "abc"
// const userKey = "myName"
// // const name = "Umair"
// const myObj1 = {
//     name: "Abdullah",
//     surname: "Motiwala",
//      getDate : () => {
//         console.log(new Date())
//      }
// }
// console.log(myObj.name)
// console.log(myObj.name)
// console.log(myObj.getDate())
// // const name = myObj.name
// // const surname = myObj.surname
// const {name,surname} = myObj
// console.log(name,surname)


// const myobj = {
//     name : "umair",
//     "fullname" : "rajput",
//     surname : "Arif",
//     rollNo:"123456" ,
//     getDate : () => {
//         console.log(new Date())
//     }
// }
// console.log(myobj.name)
// console.log(myobj)
// const {name,surname} = myobj
// // console.log(name,surname)
// myobj["name"] = "abid"
// console.log(myobj["name"],myobj["fullname"])
// myobj['rollNo'] = ":311678"
// myobj["gmail"] = "umairarif@gmail.com"
// console.log(myobj)
// // Object.freeze(myobj)
// myobj["name"] = "hamza"
// console.log(myobj)
// myobj.greting = function(){
//     console.log("hello",this.name)
// }
// console.log(myobj.greting())
// console.log(myobj)
// // const obj = Object.assign(myObj1,myobj)
// // console.log(obj)

// delete myobj.name
// console.log(myobj)
// const myNewObj = {
//     ...myobj,
//     name : myObj1.name,
//     surname :myObj1.surname,
//     fName : "Fname"
// }
// // console.log(myNewObj.myobj.Fullname)
// console.log(myNewObj)
// const newObj = {a:myobj}
// console.log(newObj)
// // console.log(myNewObj)
// console.clear()

// const user = {}
// const name = prompt("what is your name?")
// const Fname = prompt("what is your father name?")
// const roll = prompt("what is your roll no")
// const instructerName = prompt("what is insructername")

// user["name"] = name
// user['fname'] = Fname
// user['roll NUmber']= roll
// user['instructerNAME'] = instructerName
// console.log(user)
// const {instructerNAME: instructer} = user
// console.log(instructer)


// const userKey = prompt("what is your desire key")
// const keyValue = prompt("what is your keyValue")

// const user1 = {name:'aqeel',Fullname:'murtaza',}
// const instructer = {name:"Abdullah",...user1,Timing:"6-9"}
// // user1[userKey] = keyValue
// // const student = {name : user1.name,Fullname:user1.Fullname,rollNo:user1.rollNo}

// // console.log(user1)
// // console.log(student)
// console.log(instructer.name)
// console.log(instructer)
// const {name,Fullname} = user1
// console.log(name,Fullname)


// function students(name, rollNo) {
//     const student = { name, rollNo:123 }
//     return "abc"
// }

// const a = students()
// console.log(a)


// function greet() {
//     console.log("Hello" + " " +this.name)
// }
// greet()
// // greet()
// function student(name, rollNo) {
//     this.rollNo = rollNo
//     this.name = name
//     this.greet = greet
// }
// // console.log()
// student.prototype.greet = function () {
//     console.log("Hello" + " " + this.name)
// }

// const student1 = new student("abcde", "123")
// const student2 = new student("abcde", "123")

// console.log(student1.greet);
// console.log(student2);

// // const b = new Object
// // console.log(b)
// function greet1(){
//     console.log("hello"+" " + this.name)
// }
// greet1()

// function umair(name,fname){
//             this.fname = fname
//             this.name = name
//             this.greet= greet
//             // console.log(this.username)
// }

// // umair("abc","hud")
// const a = new umair("abcd","bcd")
// console.log(a)


// function abid(rollNo,name){
//     // console.log(name+rollNo)
//     this.name = name
//     this.rollNo = rollNo

// }
// console.log(new abid(311678,"umair"))



// const objj = {
    // name:"umair",
    // fname: "arif",
    // greet: () => {
        // console.log(this.name +" "+ "hello")
    // }
// }
// console.log(objj.greet())
// function greet(){
//     console.log("hello" +" "+ this.name)
// }
// greet()


// function abid(name,fname){
//     this.name = name
//     this.fname = fname
//     this.greet = greet
// }
// const a = new abid("umair","arif")
// console.log(a)


// const student1 = {name:"umair1",rollNo:"311678"};
// const student2 = {name:"umair2",rollNo:"311679"};
// const student3 = {name:"umair3",rollNo:"311677"};
// const mergeObject = {...student1,...student2,...student3}
// console.log(mergeObject)

// const mergeObject = Object.assign({},student1,student2,student3);
// console.log(mergeObject);



