// let form = document.forms.loginForm;

// document.querySelector('#checkFormButton').addEventListener('click' , () => {
//     console.log('Ваш логин: ' + form.loginInput.value)
//     console.log('Ваш пароль: ' + form.passwordInput.value)
// })


// document.querySelector('#check').addEventListener('click' , () => {
//     // const form = document.forms.inputFroms;
//     // for( i = 0; i < form.elements.length; i++) {
//     //     const element = form.elements[i];
//     //     console.log(element.type + ' = ' + element.value)
//     // }
//     const form = document.forms.inputFroms;
//     // console.log(form.titleInput.value);
//     // console.log(form.commentTextArea.value);
//     console.log(form.input1.value);
//     console.log(form.input2.value);
//     console.log(form.input3.value);
// })

// const form = document.forms.inputFroms;
// document.querySelector('#check').addEventListener('click' , () => {
//     console.log('Согласен с условиями ' + form.termsAccepted.checked)
//     console.log('Выбранная валюта ' + form.currency.value)
// })

// const form = document.forms.inputFroms;
// document.querySelector('#check').addEventListener('click' , () => {
//     console.log('Выбранное значение ' + form.currency.value)
//     console.log('Выбранный индекс ' + form.currency.selectedIndex)
// })
// document.querySelector('#selectButton').addEventListener('click' , () => {
//     form.currency.value = 'EUR'
// })

// let form = document.forms.productForm;
// let table = document.querySelector('#productsTable');
// let saveBtn = document.querySelector('#saveButton');

// saveBtn.addEventListener('click' , () => {
//     addRow(form.name.value,
//         form.price.value,
//         form.currency.value);

//         for( i = 0; i < form.elements.length; i++){
//             const element = form.elements[i];
//             if(element.type == "text")
//             element.value = "";
//         }
// });

// function addRow(name, price, currency) {
//     let tr = document.createElement('tr');
//     tr.insertAdjacentHTML('beforeend', `<td>${name}</td>`);
//     tr.insertAdjacentHTML('beforeend', `<td>${price}</td>`);
//     tr.insertAdjacentHTML('beforeend', `<td>${currency}</td>`);
//     table.append(tr)
// }

let form = document.forms.signUpForm;
let checkBtn = document.querySelector('#check');
let div = document.querySelector('.appendElements');

checkBtn.addEventListener('click' , () => {
    for( i = 0; i < form.elements.length; i++) {
        const element = form.elements[i];
        console.log(element.type + ' = ' + element.value)
        let p = document.createElement('p')
        div.append(p)
        p.innerHTML = (`Your ${element.type} = ${element.value}`)
    }
})