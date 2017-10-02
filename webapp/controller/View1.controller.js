sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("DemoVizDemoViz.controller.View1", {
		onInit: function() {
			var Bar = this.getView().byId("VizBar");
			var dataset = new sap.viz.ui5.data.FlattenedDataset({
				dimensions: [{
					axis: 1,
					name: "Country",
					value: "{Model>country}"
				}],

				measures: [{
					name: "Population",
					value: "{Model>population}"
				}],

				data: {
					path: "Model>/value"
				}
			});
			Bar.setDataset(dataset);
		}
	});
});