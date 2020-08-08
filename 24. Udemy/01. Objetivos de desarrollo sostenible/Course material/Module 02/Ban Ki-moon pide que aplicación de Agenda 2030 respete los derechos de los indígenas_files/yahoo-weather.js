// Weather API sample javascript code
// Requires: jQuery and crypto-js (v3.1.9)
//
// Copyright 2019 Oath Inc. Licensed under the terms of the zLib license see https://opensource.org/licenses/Zlib for terms.

var url = 'https://weather-ydn-yql.media.yahoo.com/forecastrss';
var method = 'GET';
var app_id = 'Eymu7o3e';
var consumer_key = 'dj0yJmk9V3JDeGEyVzJ5TDZ3JmQ9WVdrOVJYbHRkVGR2TTJVbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWI2';
var consumer_secret = '9c23fd18c3003eec2d1178b7b0c579ca85a5a52e';
var concat = '&';
var query = { 'woeid': '346062', 'u': 'c', 'format': 'json' };
var oauth = {
    'oauth_consumer_key': consumer_key,
    'oauth_nonce': Math.random().toString(36).substring(2),
    'oauth_signature_method': 'HMAC-SHA1',
    'oauth_timestamp': parseInt(new Date().getTime() / 1000).toString(),
    'oauth_version': '1.0'
};
var conditions = [
    'Tornado', 'Tormenta tropical', 'Huracán', /* 2 */
    'Tormeta severa', 'Tormenta eléctrica', /* 4 */
    'Lluvia y nieve mixtas', 'Lluvia mixta y aguanieve', /* 6 */
    'Mezcla de nieve y aguanieve', 'Llovizna helada', /* 8 */
    'Llovizna', 'Lluvia helada', 'Chubascos', 'Lluvia', /* 12 */
    'Ráfagas de nieve', 'Chubascos de nieve', 'Nieve que sopla', /* 15 */
    'Nieve', 'Granizo', 'Aguanieve', 'Polvo', 'Niebla', 'Bruma', /* 21 */
    'Ahumado', 'Tempestuoso', 'Ventoso', 'Frío', 'Nublado', /* 26 */
    'Mayormente nublado (noche)', 'Mayormente nublado (día)', /* 28 */
    'Parcialmente nublado (noche)', 'Parcialmente nublado (día)', /* 30 */
    'Despejado (noche)', 'Soleado', 'Limpio (noche)', 'Limpio (día)', /* 34 */
    'Lluvia y granizo mezclados', 'Caliente', /* 36 */
    'Tormentas eléctricas aisladas', 'Tormentas eléctricas dispersas', /* 38 */
    'Chubascos dispersos (día)', 'Fuertes lluvias', /* 40 */
    'Chubascos de nieve dispersos (día)', 'Fuertes nevadas', /* 42 */
    'Tormenta de nieve', 'No disponible', 'Chubascos dispersos (noche)', /* 45 */
    'Chubascos de nieve dispersos (noche)', 'Chubascos dispersos' /* 47 */
];

var merged = {};
$.extend(merged, query, oauth);
// Note the sorting here is required
var merged_arr = Object.keys(merged).sort().map(function(k) {
    return [k + '=' + encodeURIComponent(merged[k])];
});
var signature_base_str = method +
    concat + encodeURIComponent(url) +
    concat + encodeURIComponent(merged_arr.join(concat));

var composite_key = encodeURIComponent(consumer_secret) + concat;
var hash = CryptoJS.HmacSHA1(signature_base_str, composite_key);
var signature = hash.toString(CryptoJS.enc.Base64);

oauth['oauth_signature'] = signature;
var auth_header = 'OAuth ' + Object.keys(oauth).map(function(k) {
    return [k + '="' + oauth[k] + '"'];
}).join(',');

$.ajax({
    url: url + '?' + $.param(query),
    headers: {
        'Authorization': auth_header,
        'X-Yahoo-App-Id': app_id
    },
    method: 'GET',
    success: function(data) {
        $('#weather').html(
            '<i class="wi wi-yahoo-' + data.current_observation.condition.code + '"></i> ' +
            data.current_observation.condition.temperature + 'ºC' +
            '<span class="hidden-xs"> - ' + conditions[data.current_observation.condition.code] + '</span> - ' +
            '<span class="small">Mín. ' + data.forecasts[0].low + ', Máx. ' + data.forecasts[0].high + '</span>'
        );
    }
});