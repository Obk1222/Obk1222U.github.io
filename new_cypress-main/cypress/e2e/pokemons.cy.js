describe('e2e покупка аватара', function () {
    
});
    it('Покупка нового аватара', function () {
        cy.visit('https://pokemonbattle.ru/login'); // Зашёл на сайт покемонов
        cy.get('#k_email').type('USER_LOGON'); // Ввёл верный логин
        cy.get('#k_password').type('USER_PASSWORD'); // Ввёл верный пароль
        cy.get('.MuiButton-root').click (); // Нажал кнопку войти
        cy.get('.header_card_trainer').click (); // Нажал на аккаунт тренера
        cy.get('.k_mobile > :nth-child(5)').click (); // Нажал на кнопку "смена аватара"
        cy.get('.available > button').first ().click(); // Покупаем первый доступный аватар
        cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4111111111111111'); // Ввожу номер карты
        cy.get(':nth-child(1) > .style_1_base_input').type('1025'); // Ввожу срок карты
        cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('125'); // Ввожу код карты
        cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('Kira Neonova'); // Ввожу имя карты
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click (); // Нажал оплатить
        cy.get('.style_1_base_input').type('56456'); // Ввёл код из пуш-уведомления
        cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click ();
        cy.get('.payment_status_top_title').contains('Покупка прошла успешно'); // Присутствует текст успешной покупки
        cy.get('.payment_form_card_form').should('be.visible'); // Пользователь видит текст
        cy.get('.style_1_base_link_blue').click (); // Нажал кнопку вернуться назад
        cy.get('.header_interactive_button_exit > .interactive_button > .wrapper_img').click (); // Нажал кнопку выхода из аккаунта

     

    })

