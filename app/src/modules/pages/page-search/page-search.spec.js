import angular from 'angular';
import 'angular-mocks';
import PageSearchModule from './page-search.module'
import PageSearchController from './page-search.controller';
import PageSearchDirective from './page-search.directive';
import PageSearchTemplate from './page-search.tpl.html!text';

describe('PageSearch', () => {
    let $rootScope,
        makeController;

    beforeEach(angular.mock.module(PageSearchModule.name));
    beforeEach(angular.mock.inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => new PageSearchController();
    }));

    describe('Module', () => {
        // test things about the directive module
        // checking to see if it registers certain things and what not
        // test for best practices with naming too
        // test for routing
    });

    describe('Controller', () => {
        // test your controller here
        it('should have a "name" property', () => {
            let controller = makeController();

            expect(controller).to.have.property('name');
        });
    });

    describe('Directive', () => {
        // test the directive itself
        let directive = PageSearchDirective();

        it('should use the right template', () => {
            expect(directive.template).to.equal(PageSearchTemplate);
        });

        it('should use controllerAs', () => {
            expect(directive).to.have.property('controllerAs');
        });

        it('should use the right controller', () => {
            expect(directive.controller).to.equal(PageSearchController);
        });
    });
});
