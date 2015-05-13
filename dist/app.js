/// <reference path="typings/angular2/angular2.d.ts" />
/// <reference path="typings/fabricjs/fabricjs.d.ts" />
if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var angular2_1 = require('angular2/angular2');
var Staffer = require('./staffer');
var StafferApp = (function () {
    function StafferApp() {
        this.staff = Staffer;
        this.staff.init(new fabric.Canvas('staff'), null, null);
        this.staff.draw();
        this.name = 'Alice';
        this.keys = ['C', 'F', 'B_FLAT', 'E_FLAT', 'A_FLAT', 'D_FLAT', 'G_FLAT', 'F_SHARP', 'B', 'E', 'A', 'D', 'G'];
        this.activeKey = 'C';
    }
    StafferApp.prototype.setKey = function (key) {
        this.staff.setKey(key);
        this.activeKey = key;
    };
    StafferApp = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            directives: [angular2_1.For, angular2_1.If],
            templateUrl: 'templates/app.html',
        })
    ], StafferApp);
    return StafferApp;
})();
angular2_1.bootstrap(StafferApp);
//# sourceMappingURL=app.js.map