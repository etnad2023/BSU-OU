/**
 * This JS file was auto-generated via Terser.
 *
 * Contributors should avoid editing this file, but instead edit the associated
 * non minified file file. For more information, check out our engineering docs
 * on how we handle JS minification in our engineering docs.
 *
 * @see: https://evnt.is/dev-docs-minification
 */

tribe.events=tribe.events||{},tribe.events.views=tribe.events.views||{},tribe.events.views.icalLinks={},function($,obj){"use strict";obj.selectors={icalLinks:".tribe-events-c-subscribe-dropdown",icalLinksButton:".tribe-events-c-subscribe-dropdown__button-text",icalLinksButtonActiveClass:"tribe-events-c-subscribe-dropdown__button--active",icalLinksListContainer:"tribe-events-c-subscribe-dropdown__content"},obj.handleIcalLinksButtonClick=function(event){$(event.target).toggleClass(obj.selectors.icalLinksButtonActiveClass)},obj.bindEvents=function($container){$(document).on("click focus focus-within",obj.selectors.icalLinksButton,obj.handleIcalLinksButtonClick)},obj.unbindEvents=function($container){$container.find(obj.selectors.icalLinksButton).off("click",obj.handleIcalLinksButtonClick)},obj.deinit=function(event,jqXHR,settings){var $container=event.data.container;obj.unbindEvents($container),$container.off("beforeAjaxSuccess.tribeEvents",obj.deinit)},obj.init=function(event,index,$container,data){$container.find(obj.selectors.icalLinks).length&&(obj.bindEvents($container),$container.on("beforeAjaxSuccess.tribeEvents",{container:$container},obj.deinit))},obj.ready=function(){$(document).on("afterSetup.tribeEvents",obj.init)},$(obj.ready)}(jQuery,tribe.events.views.icalLinks);