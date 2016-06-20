import template from './page-search.tpl.html!text';
import controller from './page-search.controller';

const pageSearchDirective = function() {
    return {
        template: template,
        controller: controller,
        restrict: 'E',
        controllerAs: 'ctrl',
        scope: {},
        bindToController: true
    };
};

export default pageSearchDirective;
