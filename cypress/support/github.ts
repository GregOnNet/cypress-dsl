export class GitHubRepositoryBefore {
  openOrganisation(name: string) {
    before(() => {
      cy.visit(`https://github.com/${name}`);
    });
  }
}
export class GitHubRepositoryVerifier {
  verifyRepositoriesExist() {
    it('verify repository cards exist', () => {
      cy.get('.pinned-item-list-item-content').should('be.visible');
    });
  }

  verifyRepositoryExists(name: string) {
    it(`search for repository "${name}"`, () => {
      cy.get('.pinned-item-list-item-content')
        .contains(name)
        .should('be.visible');
    });
  }
}
export class GitHubRepositoryAction {
  openRepository(name: string) {
    it(`open repository "${name}"`, () => {
      cy.get('.pinned-item-list-item-content .repo').contains(name).click();
    });
  }

  switchToBranch(name: string) {
    it(`switch to branch "${name}"`, () => {
      cy.get('#branch-select-menu').click();
      cy.get('#context-commitish-filter-field').focus().type(name);

      cy.contains(name).click();
    });
  }
}

export class GitHubRepository {
  before = new GitHubRepositoryBefore();
  verify = new GitHubRepositoryVerifier();
  action = new GitHubRepositoryAction();
}

export class GitHub {
  static get repository() {
    return new GitHubRepository();
  }
}
