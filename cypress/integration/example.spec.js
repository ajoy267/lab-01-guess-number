
describe('Example Test', ()=>{
    before(()=>{
        cy.visit('/');
    });

    describe('HTML elements', ()=>{   
        it('contains guess button', ()=>{
            cy.get('#guess-button').should('be.visible');
        });
    });
    describe('HTML elements', ()=>{
        it('contains reset button', ()=>{
            cy.get('#play-again').should('be.visible');
        });
    });
});