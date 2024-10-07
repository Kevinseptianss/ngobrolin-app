describe('template spec', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/login');
    });

    it('passes', () => {
        cy.visit('http://localhost:5173/login')
        cy.get('input[placeholder="Email"]').should('be.visible');
        cy.get('input[placeholder="Password"]').should('be.visible');
        cy.get('button').contains(/^Masuk$/).should('be.visible');
    })

    it('should display alert when Email is empty', () => {
        cy.get('button').contains(/^Masuk$/).click();

        // memverifikasi window.alert untuk menampilkan pesan dari API
        cy.on('window:alert', (str) => {
            expect(str).to.equal('"Email" is not allowed to be empty');
        });
    });

    it('should display alert when password is empty', () => {
        // mengisi username
        cy.get('input[placeholder="Email"]').type('testuser@gmail.com').should('have.value', 'testuser@gmail.com');

        // klik tombol login tanpa mengisi password
        cy.get('button').contains(/^Masuk$/).click();

        // memverifikasi window.alert untuk menampilkan pesan dari API
        cy.on('window:alert', (str) => {
            expect(str).to.equal('"password" is not allowed to be empty');
        });
    });

    it('should display alert when username and password are wrong', () => {
        // mengisi username
        cy.get('input[placeholder="Email"]').type('testuser@gmail.com').should('have.value', 'testuser@gmail.com');

        // mengisi password yang salah
        cy.get('input[placeholder="Password"]').type('wrong_password');

        // menekan tombol Login
        cy.get('button').contains(/^Masuk$/).click();

        // memverifikasi window.alert untuk menampilkan pesan dari API
        cy.on('window:alert', (str) => {
            expect(str).to.equal('email or password is wrong');
        });
    });
})