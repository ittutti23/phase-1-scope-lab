require ( './helpers.js' );

describe('Fix the Scope', function() {
  describe('declare customerName to be bob in global scope', function() {
    it('returns the customerName', function() {
      expect(window.customerName).to.equal('bob');
    });
  });

  describe('Fix the Scope', function() {
    describe('declare customerName to be bob in global scope', function() {
      it('returns the customerName', function() {
        expect(window.customerName).to.equal('bob');
      });
    });

    describe('Fix the Scope', function() {
      describe('declare customerName to be bob in global scope', function() {
        it('returns the customerName', function() {
          expect(window.customerName).to.equal('bob');
        });
      });
      
      describe('Fix the Scope', function() {
        describe('declare customerName to be bob in global scope', function() {
          it('returns the customerName', function() {
            expect(window.customerName).to.equal('bob');
          });
        })})})})})
