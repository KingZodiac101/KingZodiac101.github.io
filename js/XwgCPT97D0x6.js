/*!
 * cache=true
 * @license Licences are viewable at this URL: https://cdn1.gaiaonline.com/src/=/e143bb5df5304ae98988a03a4dabca2e-1478-503/src/js/goldgen/goldgen.js
 */
/*! /src/js/goldgen/goldgen.js */
YUI().use(["node","event","simplemodal"],(function(e){var a=e.gaia.simplemodal;a.addHandler("click","#gaia_header","#user_gold_count"),a.addCallBack({on:"success",fn:function(a){var n=e.Node.create(a),s=n.one("#user_gold").get("value"),o=n.one("#user_gpass").get("value");s&&e.one("#go1d_amt").set("innerHTML","<span>"+s+"</span>"),o&&e.one("#cash_amt").set("innerHTML","<span>"+o+"</span>")}})}));