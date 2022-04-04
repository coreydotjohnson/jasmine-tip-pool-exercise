describe('helpers tests', function() {

    beforeEach(function () {
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
        submitPaymentInfo();
    });

    it('should sum payments with sumPaymentTotal', function () {
        expect(sumPaymentTotal('tipPercent')).toEqual(20);
        expect(sumPaymentTotal('billAmt')).toEqual(50);
        expect(sumPaymentTotal('tipAmt')).toEqual(10);
    });

    it('should calculate tip with calculateTipPercent', function () {
        expect(calculateTipPercent(40, 10)).toEqual(25);
    });

    it('should append a new summary tr and td', function() {
        let newTr = document.createElement('tr');
        appendTd(newTr, sumPaymentTotal('tipPercent'));
        expect(newTr.textContent).toEqual('20');
    })

    it('should add a delete button to new server tr', function() {
        let newTrTest = document.createElement('tr');
        appendDeleteBtn(newTrTest);

        expect(newTrTest.firstChild.innerText).toEqual('X');
    })

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        document.querySelectorAll('#paymentTable tbody').innerHTML = '';
    });

});