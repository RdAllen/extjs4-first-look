Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.fx.target.Sprite', 'Ext.layout.container.Fit']);

Ext.onReady(function () {
    
	var store = Ext.create('Ext.data.ArrayStore', {
        fields: [
           {name: 'month'},
           {name: 'visits2009', type: 'int'},
           {name: 'visits2010', type: 'int'}
        ],
        data: [
           ['January','4875','3587'],
           ['February', '3854','2489'],
           ['March', '2358','4965'],
           ['April','5693','1684'],
           ['May', '6751','2943'],
           ['June', '5231','1846'],
           ['July', '8721','4662'],
           ['August', '8642','9712'],
           ['September', '7231','6847'],
           ['October', '5642','5222'],
           ['November', '8642','7304'],
           ['December', '6154','5651']
        ]
    });
	
	var groupedScatterChart = Ext.create('Ext.chart.Chart', {
		style: 'background:#fff',
        animate: true,
        store: store,
        legend: {
            position: 'right'
        },
        axes: [{
            type: 'Numeric',
            minimum: 0,
            position: 'left',
            fields: ['visits2009','visits2010'],
            title: 'Number of Visits',
            minorTickSteps: 1
        }, {
            type: 'Category',
            position: 'bottom',
            fields: ['month'],
            title: 'Month of the Year'
        }],
        series: [{
            type: 'scatter',
            axis: 'left',
            smooth: true,
            xField: 'month',
            yField: 'visits2009',
            markerConfig: {
                radius: 5
            },
            highlight: true
        },
        {
            type: 'scatter',
            axis: 'left',
            smooth: true,
            xField: 'month',
            yField: 'visits2010',
            markerConfig: {
                radius: 5
            },
            highlight: true
        }]
	});
    
    Ext.create('Ext.Window', {
        width: 800,
        height: 400,
        hidden: false,
        maximizable: true,
        title: 'Scatter Chart',
        renderTo: Ext.getBody(),
        layout: 'fit',
        items: [groupedScatterChart]
    });
});