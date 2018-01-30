
// var TestUtils = require('react-dom/test-utils'); //I like using the Test Utils, but you can just use the DOM API instead.
// import expect, { createSpy, spyOn, isSpy } from 'expect'
// var ItemContainer = require('../../../../src/js/components/container/ItemContainer'); //my root-test lives in components/__tests__/, so this is how I require in my components.
//
// describe('ItemContainer', function () {
//     it('renders without problems', function () {
//         var itemContainer = TestUtils.renderIntoDocument(<item-container/>);
//         expect('item-container').toExist();
//     });
// });

var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
//import expect from 'jest';
var TestUtils = require('react-dom/test-utils');
var $ = require('jquery');
var {ItemContainer} = require('../../../../src/js/components/container/ItemContainer');


describe('ItemContainer', () => {
    it('should exist', () => {
        expect(typeof ItemContainer).toBe('function');
    });


    it('should be defined', function () {
        var itemContainer = TestUtils.renderIntoDocument(<ItemContainer />);
        expect(itemContainer).toBeDefined();
    });


    it('renders Item name', function () {
        var itemContainer = TestUtils.renderIntoDocument(<ItemContainer />);
        var $el = $(ReactDOM.findDOMNode(itemContainer));
        expect($el.find('div').text()).toMatch(new RegExp('Item name'));
    });

});