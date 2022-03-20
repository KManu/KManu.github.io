"use strict";
(self["webpackChunkhome"] = self["webpackChunkhome"] || []).push([["src_app_pages_credits_credits_module_ts"],{

/***/ 4291:
/*!*********************************************************!*\
  !*** ./src/app/pages/credits/credits-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreditsRoutingModule": () => (/* binding */ CreditsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _credits_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./credits.component */ 5031);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _credits_component__WEBPACK_IMPORTED_MODULE_0__.CreditsComponent }];
class CreditsRoutingModule {
}
CreditsRoutingModule.ɵfac = function CreditsRoutingModule_Factory(t) { return new (t || CreditsRoutingModule)(); };
CreditsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CreditsRoutingModule });
CreditsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CreditsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5031:
/*!****************************************************!*\
  !*** ./src/app/pages/credits/credits.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreditsComponent": () => (/* binding */ CreditsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/grid */ 7860);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/list */ 5812);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/divider */ 338);




class CreditsComponent {
    constructor() { }
    ngOnInit() {
    }
}
CreditsComponent.ɵfac = function CreditsComponent_Factory(t) { return new (t || CreditsComponent)(); };
CreditsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreditsComponent, selectors: [["app-credits"]], decls: 16, vars: 0, consts: [["gdAreas", ". . . | . main . | . . .", "gdGap", "10px", "gdRows", "10fr 60fr 10fr", "gdColumns", "19.1fr 61.80fr 19.1fr", 1, "contentWrapper"], ["gdArea", "main", 1, "contentContainer", "transluscentBack"], [1, "padding"], ["mat-subheader", ""], ["role", "list"], ["role", "listitem"], ["href", "https://angular.io", "target", "_blank"], ["href", "https:/material.angular.io", "target", "_blank"], ["href", "https://github.com/shamahn/ng-particle", "target", "_blank"]], template: function CreditsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Legal");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-nav-list", 4)(7, "mat-list-item", 5)(8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list-item", 5)(11, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Angular Material");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-list-item", 5)(14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ng-particle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    } }, directives: [_angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_1__["ɵgrid_privateo"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_1__["ɵgrid_privateba"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_1__["ɵgrid_privatebg"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_1__["ɵgrid_privatex"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_1__["ɵgrid_privatel"], _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListSubheaderCssMatStyler, _angular_material_divider__WEBPACK_IMPORTED_MODULE_3__.MatDivider, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_2__.MatListItem], styles: [".contentWrapper[_ngcontent-%COMP%] {\n  color: whitesmoke;\n  width: 100%;\n  height: 100%;\n}\n.contentWrapper[_ngcontent-%COMP%]   .contentContainer[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.contentWrapper[_ngcontent-%COMP%]   .contentContainer[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%] {\n  color: whitesmoke;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWRpdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7QUFDSjtBQUFJO0VBQ0UsaUJBQUE7QUFFTiIsImZpbGUiOiJjcmVkaXRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnRXcmFwcGVye1xyXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgLmNvbnRlbnRDb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hdC1saXN0LWl0ZW17XHJcbiAgICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 6895:
/*!*************************************************!*\
  !*** ./src/app/pages/credits/credits.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreditsModule": () => (/* binding */ CreditsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _credits_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./credits-routing.module */ 4291);
/* harmony import */ var _credits_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./credits.component */ 5031);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class CreditsModule {
}
CreditsModule.ɵfac = function CreditsModule_Factory(t) { return new (t || CreditsModule)(); };
CreditsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CreditsModule });
CreditsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _credits_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreditsRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CreditsModule, { declarations: [_credits_component__WEBPACK_IMPORTED_MODULE_1__.CreditsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _credits_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreditsRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_credits_credits_module_ts.js.map