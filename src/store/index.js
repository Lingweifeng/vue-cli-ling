import Vuex from 'vuex';
import cart from './modules/cart';

const debug = process.env.NODE_ENV !== 'production';
export default new Vuex.Store({
    modules: {
        cart,
        products
    },
    strict: debug,
    plugins: debug
})