import { GitHub } from '../support/github';

describe('Visit google', () => {
  GitHub.repository.before.openOrganisation('angular');
  GitHub.repository.verify.repositoriesExist();
  GitHub.repository.verify.repositoryExists('components');
  GitHub.repository.action.openRepository('components');
  GitHub.repository.action.switchToBranch('11');

  // before(() => {
  //   cy.visit('https://github.com/angular');
  // });

  // it('verify repository cards exist', () => {
  //   cy.get('.pinned-item-list-item-content').should('be.visible');
  // });

  // it('search for component repository', () => {
  //   cy.get('.pinned-item-list-item-content')
  //     .contains('components')
  //     .should('be.visible');
  // });

  // it('enter component repository', () => {
  //   cy.get('.pinned-item-list-item-content .repo')
  //     .contains('components')
  //     .click();
  // });

  // it('switch to branch for Angular 11', () => {
  //   cy.get('#branch-select-menu').click();
  //   cy.get('#context-commitish-filter-field').focus().type('11');

  //   cy.contains(/11/).click();
  // });
});
