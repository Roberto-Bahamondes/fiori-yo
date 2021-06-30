/*global QUnit*/

sap.ui.define([
	"namespacerb3/projectrb3/controller/ViewRB3.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewRB3 Controller");

	QUnit.test("I should test the ViewRB3 controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
