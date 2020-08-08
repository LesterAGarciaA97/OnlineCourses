(function ($) {
    Drupal.behaviors.journalists = {
        attach: function (context, settings) {
            function _p_arg($i) {
                pathname = window.location.pathname;
                pathname = pathname.split("/");
                return pathname[$i];
            };

            Highcharts.theme = {
                colors: ['#7cb5ec', '#f7a35c', '#90ee7e', '#7798BF', '#aaeeee', '#ff0066',
                    '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
                chart: {
                    backgroundColor: null
                },
                title: {
                    style: {
                        fontSize: '16px',
                        fontWeight: 'bold'
                    }
                },
                tooltip: {
                    borderWidth: 0,
                    backgroundColor: 'rgba(219,219,216,0.8)',
                    shadow: false
                },
                yAxis: {
                    minorTickInterval: 'false'
                }
            };

            Highcharts.setOptions(Highcharts.theme);

            if ($('#journalists_map').length > 0) {
                series = $('#journalists_map').data('series');
                title = $('#journalists_map').data('title');
                subtitle = $('#journalists_map').data('subtitle');

                Highcharts.mapChart('journalists_map', {
                    chart: {
                        map: 'custom/world'
                    },
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: title
                    },
                    subtitle: {
                        text: subtitle
                    },
                    legend: {
                        enabled: false
                    },
                    mapNavigation: {
                        enabled: true,
                        buttonOptions: {
                            verticalAlign: 'bottom'
                        }
                    },
                    plotOptions: {
                        series: {
                            cursor: 'pointer',
                            events: {
                                click: function (event) {
                                    window.location = ('/themes/safety-journalists/observatory/country/' + event.point.id);
                                }
                            }
                        }
                    },
                    series: [{
                        name: 'Countries',
                        color: '#E0E0E0',
                        enableMouseTracking: false
                    }, {
                        type: 'mapbubble',
                        name: 'Journalists killed',
                        joinBy: ['ISO3CD', 'code'],
                        data: series,
                        minSize: 4,
                        maxSize: '10%',
                        tooltip: {
                            pointFormat: '{point.title}: {point.z}<br />(Click for details)'
                        }
                    }]
                });
            };

            if ($('#journalists_country_count').length > 0) {
                $.getJSON('/themes/safety-journalists/observatory/country_count/' + _p_arg(5), function (data) {
                    Highcharts.chart('journalists_country_count', {
                        chart: {
                            type: 'pie',
                            options3d: {
                                enabled: true,
                                alpha: 45
                            }
                        },
                        credits: {
                            enabled: false
                        },
                        title: {
                            text: 'Status of cases condemned by UNESCO'
                        },
                        subtitle: {
                            text: 'between 2006 and 2019'
                        },
                        tooltip: {
                            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                        },
                        plotOptions: {
                            pie: {
                                innerSize: 100,
                                depth: 60,
                                allowPointSelect: true,
                                cursor: 'pointer',
                                dataLabels: {
                                    enabled: false
                                },
                                showInLegend: true
                            }
                        },
                        series: [{
                            name: 'Cases',
                            colorByPoint: true,
                            data: data
                        }]
                    });
                });
            };

            if ($('#journalists_country_timeline').length > 0) {
                $.getJSON('/themes/safety-journalists/observatory/country_timeline/' + _p_arg(5), function (data) {
                    Highcharts.chart('journalists_country_timeline', {
                        chart: {},
                        title: {
                            text: 'Number of killings per year'
                        },
                        credits: {
                            enabled: false
                        },
                        yAxis: {
                            title: {
                                text: 'Killings'
                            },
                            tickInterval: 1
                        },
                        xAxis: {
                            categories: data.categories,
                            allowDecimals: false,
                            labels: {
                                formatter: function () {
                                    return this.value; // clean, unformatted number for year
                                },
                                rotation: 45,
                                tickInterval: 1
                            }
                        },
                        legend: {
                            enabled: false
                        },
                        plotOptions: {
                            "column": {
                                "stacking": "normal",
                                dataLabels: {
                                    enabled: true,
                                    inside: false,
                                    verticalAlign: "top"
                                }
                            }
                        },
                        series: [{
                            type: 'column',
                            name: 'Killed journalists',
                            data: data.data
                        }]
                    });
                });
            };
        }
    };
}(jQuery));
