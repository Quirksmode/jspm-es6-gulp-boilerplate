import angular from 'angular';
import 'angular-mocks';
import PageHomeModule from './page-home.module'
import PageHomeController from './page-home.controller';
import PageHomeDirective from './page-home.directive';
import PageHomeTemplate from './page-home.tpl.html!text';

describe('PageHome', ()=>{
	let $rootScope,
	makeController;

	beforeEach(angular.mock.module(PageHomeModule.name));
	beforeEach(angular.mock.inject((_$rootScope_)=>{
		$rootScope = _$rootScope_;
		makeController = ()=> new PageHomeController();
	}));
	
	describe('Module', ()=>{
		// test things about the directive module
		// checking to see if it registers certain things and what not
		// test for best practices with naming too
		// test for routing
	});
	
	describe('Controller', ()=>{
		// test your controller here
		it('should have a "name" property', ()=>{
			let controller = makeController();
			
			expect(controller).to.have.property('name'); 
		});
	});
	
	describe('Directive', ()=>{
			// test the directive itself
			let directive = PageHomeDirective();
			
			it('should use the right template',()=>{
				expect(directive.template).to.equal(PageHomeTemplate);
			});
			
			it('should use controllerAs', ()=>{
				expect(directive).to.have.property('controllerAs');
			});
			
			it('should use the right controller', ()=>{
				expect(directive.controller).to.equal(PageHomeController);
			});
	});
});
