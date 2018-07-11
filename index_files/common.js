/**
 * Фильтр выводит слово в нужной словоформе
 *
 * Пример:
 * 1 товар
 * 2 товара
 * 5 товаров
 */
function pluralize(input, variants)
{
    var ballance = input % 10;

    if (11 <= input && input <= 14)
        return variants[2];
    else if (ballance == 1)
        return variants[0];
    else if (2 <= ballance && ballance <= 4)
        return variants[1];

    return variants[2];
}


/**
 * Корзина
 */
window.cart = {

    $panel: null,

    $successModal: null,

    init: function(){
        this.$panel = $('#cart-panel');
        this.$successModal = $('.cart-modal');
        this.refresh();

        var _this = this;

        $('.cart-panel-collapse').click(function(){
            _this.collapse();
            return false;
        });

        $('.cart-panel-expand').click(function(){
            _this.expand();
            return false;
        });
    },

    refresh: function(){
        var _this = this;
        $.get('/text/cart/getInfo').success(function(cart){

            if (cart.items.length)
            {
                if (_this.collapsed())
                {
                    _this.collapse();
                }

                _this.$panel.fadeIn(100);
                _this.$panel.find('.cart-panel-text').text(_this.buildText(cart));
                $('#header-cart').removeClass('empty');
                $('.main-header .cart-items-quantity').text(cart.items.length);
            }
            else
            {
                _this.$panel.fadeOut(100);
            }
        });
    },

    add: function(link){
        var _this = this;
        Loader.show();

        $.get(link.href)
            .success(function(response){
                if (typeof response == 'object' && 'data' in response)
                {
                    _this.afterAdd(response.data);
                }

                if ($(link).data('reloadAfterAdd'))
                {
                    location.reload()
                }
                else
                {
                    _this.$successModal.show();
                    window.cart.refresh();
                }
            })
            .always(function(){
                $('html.mobile .order .submenu').hide();
                Loader.hide();
            });

        return false;
    },

    afterAdd: function(product){
        dataLayer.push({
            'event': 'addEcommerce_interaction',
            'event_id': 'd-nXX-e4',
            'ecommerce_step':'addToCart',
            'ecommerce_param':'none',
            'ecommerce': {
                'add': {
                    'products': [product]
                }
            }
        });

        fbq('track', 'AddToCart', {content_ids: product.id, content_type: 'product'});
    },

    collapse: function(){
        this.$panel.addClass('cart-panel-collapsed');
        localStorage.setItem('cartPanelCollapsed', 1);
    },

    expand: function(){
        this.$panel.removeClass('cart-panel-collapsed');
        localStorage.removeItem('cartPanelCollapsed');
    },

    collapsed: function(){
        return 'cartPanelCollapsed' in localStorage && localStorage.cartPanelCollapsed;
    },

    buildText: function(cart){

        var text = 'Вы добавили ' + cart.items.length;
        text += ' ' + pluralize(cart.items.length, ['товар', 'товара', 'товаров']);
        text += ' на сумму ' + Intl.NumberFormat('ru-RU').format(cart.sum);

        return text;
    }
};


/**
 * Full screen loader
 */
var Loader = {

    selector : '#full-screen-loader',

    element : null,

    showOnStart : false,

    init : function(){
        var _this = this;
        this.element = $(this.selector);

        this.element.ready(function(){

            if (_this.showOnStart)
            {
                _this.show();
            }
        });
    },

    show : function() {
        if (this.element === null)
            this.showOnStart = true;
        else
            this.element.show();
    },

    hide : function(){
        this.element.hide();
    }

};
$(function(){
    Loader.init();
});


/**
 *
 */
var Subscription = {

    init: function(){
        this.initUser();
        this.initLandingProducts();
    },

    initUser: function() {
        $.get('/text/subscription/rest/getActiveSubscription').success(function(response){
            if ('userSubscription' in response.data && response.data.userSubscription.subscription)
            {
                $('.header-subscription-label.'+response.data.userSubscription.subscription.name).show();
            }
        });
    },

    initLandingProducts: function(){
        var $cases = $('.js-case-wrapper'),
            ids = [];

        for (var i = 0; i < $cases.length; i++)
        {
            ids.push($cases[i].id);
        }

        $.post('/text/subscription/rest/getSubscriptionProduct', {ids: ids}).success(function(response){
            var $case;

            if ('data' in response)
            {
                $.each(response.data.ids, function(index, id){
                    $case = $('.js-case-wrapper[id='+id+']');
                    $case.find('.js-subscription-price-block').show();
                    $case.find('.js-subscription-' + response.data.subscriptionName).show();
                    $case.find('.js-price').hide();
                });
            }
        });
    }
};
$(function(){
    Subscription.init();
});


/**
 *
 */
var CarrotQuestPopup = {

    iframe: null,

    timeout: null,

    init: function(){
        this.checkIfIframeAdded();
    },

    actionFreeProtectiveScreenInit: function(){
        this.iframe.on('load', function(){
            console.log('iframe loaded');
            $(this).contents().find('#carrotquest-popup_action-free-protective-screen').on('click', function(){
                $.get('/text/cart/add/10103?promoprice=free_protective_screen').success(function () {
                    window.cart.refresh();
                });
            });
        });
    },

    checkIfIframeAdded: function(){
        var _this = this;
        this.iframe = $('#carrot_frame');

        if (this.iframe.length)
        {
            this.onIframeAdded();
        }
        else
        {
            setTimeout(function(){
                _this.checkIfIframeAdded();
            }, 300);
        }
    },

    onIframeAdded: function(){
        this.actionFreeProtectiveScreenInit();
    }
};
$(function(){
    CarrotQuestPopup.init();
});


/**
 *
 */
$(document).ready(function () {

    /**
     * Обработчик закрытия модального окна
     */
    $('.modal-box .close-modal').click(function () {
        $('.modal-box').fadeOut(100);
        return false;
    });

    /**
     * Загружаем корзину
     */
    window.cart.init();
});