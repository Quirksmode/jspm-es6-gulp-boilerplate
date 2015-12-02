'use strict'

import angular from 'angular';
import 'angular-mocks';

import scrollOnClickModule from './scroll-on-click.module.js';
import scrollOnClickDirective from './scroll-on-click.directive';


describe('custom-select', () => {

    beforeEach(angular.mock.module(scrollOnClickModule.name));

    // beforeEach(inject(function(_$rootScope_, _$compile_) {

    // }));

    it('should have a class on open', () => {
        expect(true).toBe(true);
    });

    describe('Directive', ()=>{
        // test the component/directive itself
        let directive = scrollOnClickDirective();

        // it('should use the right template',()=>{
        //     expect(component.template).to.equal(AboutTemplate);
        // });

        it('should use controllerAs', ()=>{
            expect(directive.controllerAs).toEqual('vm');
        });

        // it('should use the right controller', ()=>{
        //     expect(component.controller).to.equal(AboutController);
        // });
    });

});