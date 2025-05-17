describe('Проверка авторизации', function () {

     beforeEach('Начало авто-теста', function () {
         cy.visit('/'); // Зашёл на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Кнопка "Забыли пароль" синяя
           });
    
     
    afterEach('Конец авто-теста',function () {
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Пользователь видит крестик
        

    });

    
    
    it('Верный пароль и верный логин', function () { // ПЕРВЫЙ АВТО-ТЕСТ
     
        cy.get('#mail').type('german@dolnikov.ru'); // Ввёл верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввёл верный пароль
        cy.get('#loginButton').click(); // Нажал на кнопку "Войти"
        
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Надпись присутствует
        cy.get('#messageHeader').should('be.visible'); // Пользователь видит надпись
        
        
        
        
})
    it('Проверка восстановления пароля', function () { // ВТОРОЙ АВТО-ТЕСТ
   
        cy.get('#forgotEmailButton').click(); // Нажал кнопку "Забыли пароль?"

        cy.get('#mailForgot').type('OstalnoI@mail.ru'); // Ввёл верный email
        cy.get('#restoreEmailButton').click(); // Нажал кнопку "Отправить код"

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Надпись присутствует
        cy.get('#messageHeader').should('be.visible'); // Пользователь видит надпись

        

})

    it('Авторизация с неверным паролем', function () { // ТРЕТИЙ АВТО-ТЕСТ
       
        cy.get('#mail').type('german@dolnikov.ru'); // Ввёл верный логин
        cy.get('#pass').type('asd212341@aasd;'); // Ввёл НЕверный пароль
        cy.get('#loginButton').click(); // Нажал кнопку "Войти"

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Надпись присутствует
        cy.get('#messageHeader').should('be.visible'); // Пользователь видит надпись
        

})

    it('Авторизация с неправильным логином', function () { // ЧЕТВЁРТЫЙ АВТО-ТЕСТ
      
        cy.get('#mail').type('Gremychi1i1@v.ru'); // Ввёл НЕверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввёл верный пароль
        cy.get('#loginButton').click (); // Нажал кнопку "Войти"

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Надпись присутствует
        cy.get('#messageHeader').should('be.visible'); // Пользователь видит надпись
        


})


    it('Авторизация без @ в email', function () { // ПЯТЫЙ АВТО-ТЕСТ
        
        cy.get('#mail').type('germandolnikov.ru'); // Ввёл НЕверный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввёл пароль
        cy.get('#loginButton').click(); // Нажал кнопку "Войти"

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Надпись присутствует
        cy.get('#messageHeader').should('be.visible') // Пользователь видит надпись
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Пользователь видит крестик

})

    it('Авторизация, где логин состоит из верхнего и нижнего регистра', function () { // ШЕСТОЙ АВТО-ТЕСТ УСПЕШНЫЙ
     
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввёл верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввёл пароль
        cy.get('#loginButton').click(); // Нажал кнопку "Войти"

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Присутствует надпись
        cy.get('#messageHeader').should('be.visible'); // Пользователь видит надпись
        cy.get('#messageHeader').should('be.visible'); // Пользователь видит крестик
    })

    it('Авторизация, где логин состоит из верхнего и нижнего регистра', function () { // ШЕСТОЙ АВТО-ТЕСТ ПРОВАЛЬНЫЙ
        
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввёл верный логин
        cy.get('#pass').type('iLoveqastudio1'); // Ввёл пароль
        cy.get('#loginButton').click(); // Нажал кнопку "Войти"

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Надпись присутствует
        cy.get('#messageHeader').should('be.visible'); // Пользователь видит надпись
        
        



})
})

