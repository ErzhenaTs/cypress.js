
describe('Тестирование формы логина', function () {
   it('Позитивный кейс авторизации', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
    })
})


it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').contains('Забыли пароль?');
        cy.get('#forgotEmailButton').click();
        cy.get('#mailForgot').type('erzhenochka95@mail.ru');
        cy.get('#restoreEmailButton').click();       
      cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitRestoreButton > .exitIcon').click;
    })


it('Негативный кейс авторизации:неверный пароль', function () {
          cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqa123456');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
            
    })

it('Негативный кейс авторизации:неверный логин', function () {
          cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germ@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
            
    })

it('Негативный кейс валидации', function () {
          cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
                   
    })


it('Проверка на привидение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon');
    })


describe('Тестирование магазина', function () {
   it('Позитивный кейс покупки', function () {
        cy.visit('https://testqastudio.me/');
        cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
        cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('[href="https://testqastudio.me"]').click();
        cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
        cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
        cy.get('.header-right-items > .header-cart').click();
        cy.get('.checkout').click();
        cy.get('#billing_first_name').type('Эржена');
        cy.get('#billing_last_name').type('Цыдыпова');
        cy.get('#billing_address_1').type('Советская,12');
        cy.get('#billing_city').type('Улан-Удэ');
        cy.get('#billing_state').type('Железнодорожный');
        cy.get('#billing_postcode').type('670000');
        cy.get('#billing_phone').type('89245905789');
        cy.get('#billing_email').type('erzheno95@mail.ru');
        cy.get('#place_order').click();
        cy.get('.woocommerce-notice').contains('Ваш заказ принят. Благодарим вас.')


     
    })
})
