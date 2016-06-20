import angular from 'angular';
import 'angular-mocks';
import WidgetExampleModule from './widget-example.module'
import WidgetExampleController from './widget-example.controller';
import WidgetExampleDirective from './widget-example.directive';
import WidgetExampleTemplate from './widget-example.tpl.html!text';

describe('WidgetExample', () => {
    let $rootScope,
        makeController;

    beforeEach(angular.mock.module(WidgetExampleModule.name));
    beforeEach(angular.mock.inject((_$rootScope_) => {
        $rootScope = _$rootScope_;
        makeController = () => new WidgetExampleController();
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
        let directive = WidgetExampleDirective();

        it('should use the right template', () => {
            expect(directive.template).to.equal(WidgetExampleTemplate);
        });

        it('should use controllerAs', () => {
            expect(directive).to.have.property('controllerAs');
        });

        it('should use the right controller', () => {
            expect(directive.controller).to.equal(WidgetExampleController);
        });
    });
});
