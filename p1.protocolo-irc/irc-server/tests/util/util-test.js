import Util from '../../util/util';

const should = require('should');

describe('util.js', () => {
    it('Deve remover elemento do array caso exista na lista de referência.', () => {
        let array = ['a', 'b', 'c', 'd', 'e'];
        let references = ['a', 'c', 'd'];
        Util.removeIfExists(array, references);
        array.should.be.eql(['b', 'e']);
    });

    it('Deve remover elemento do array caso elemento seja compativel com RegExp.', () => {
        let array = ['a', 'b', 'c', 'd', 'e'];
        Util.removeByPattern(array, /^[a]|[b]|[d]$/);
        array.should.be.eql(['c', 'e']);
    });

    it('Deve copiar os elementos de um array.', () => {
        let array = ['a', 'b', 'c', 'd', 'e'];
        Util.copyArray(array).should.be.eql(array);
    });
});
