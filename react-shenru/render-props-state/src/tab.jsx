import $ from 'jquery';
import EventEmitter from 'events';

const selector = (classPrefix) => {
    return (
        {
            PREFIX: classPrefix,
            NAV: '${classPrefix}-nav',
            CONTENT: '${classPrefix}-conent',
            TAB: '${classPrefix}-tab',
            PANEL: '${classPrefix}-panel',
            ACTIVE: '${classPrefix}-active',
            DISABLE: '${classPrefix}-disable'
        }
    );
}

class Tab {
    static defaultOptions = {
        classPrefix: 'tabs',
        activeIndex: 0
    };

    constructor(options) {
        this.options = $.extend({}, Tab.defaultOptions, options);
        this.element = $(this.options.element);
        this.fromIndex = this.options.activeIndex;

        this.events = new EventEmitter();
        this.selector = Selector(this.options.classprefix);

        this._initElement();
        this._initTabs();
        this._initPanels();
        this._bindTabs();

        if (this.options.activeIndex !== undefined) {
            this.switchTo(this.options.activeIndex);
        }
    }
    _initElement() {
        this.element.addClass(this.selector.PREFIX);
        this.tabs = $(this.options.tabs);
        this.panels = $(this.options.panels);
        this.nav = $(this.options.nav);
        this.content = $(this.options.content);

        this.length = this.tabs.length;
    }
    _initTabs() {

    }
    _initPanels() {

    }
    _bindTabs() {
        this.tabs.click((e) => {
            const $el = $(e.target);
            if (!$el.hasClass(this.selector.DISABLE)) {
                this.switchTo($el.data('value'));
            }
        });
    }
    destroy() {
        this.events.removeAllListeners();
    }
};

export default Tab;