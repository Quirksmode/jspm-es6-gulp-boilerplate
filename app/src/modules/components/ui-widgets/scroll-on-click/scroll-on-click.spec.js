'use strict'

import angular from 'angular';
import 'angular-mocks';

import scrollOnClickModule from './scroll-on-click.module.js';
import scrollOnClickDirective from './scroll-on-click.directive';


describe('scroll-on-click', () => {

    beforeEach(angular.mock.module(scrollOnClickModule.name));

    it('True = True', () => {
        // Test that testing is working
        expect(true).toBe(true);
    });

    describe('Directive', ()=>{
        // test the component/directive itself
        let directive = scrollOnClickDirective();

        // it('should use the right template',()=>{
        //     expect(component.template).to.equal(AboutTemplate);
        // });

        // it('should use controllerAs', ()=>{
        //     expect(directive.controllerAs).toEqual('ctrl');
        // });

        // it('should use the right controller', ()=>{
        //     expect(component.controller).to.equal(AboutController);
        // });
    });

});