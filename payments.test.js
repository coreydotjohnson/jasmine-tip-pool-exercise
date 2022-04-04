describe('payments tests', function () {

    beforeEach(function () {
        billAmtInput.value = 50;
        tipAmtInput.value = 10;
        paymentId = 0;
    });

    it('should create payment values', function() {
        submitPaymentInfo();
        expect(allPayments['payment1'].billAmt).toEqual('50');
        expect(allPayments['payment1'].tipAmt).toEqual('10');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    });

    it('should create table row elements and pass to append with input value', function() {

        let curPayment = createCurPayment();
        appendPaymentTable(curPayment);

        let curPaymentDetails = document.querySelectorAll('#paymentTable tbody tr td')

        expect(curPaymentDetails[0].textContent).toEqual('$50');
        expect(curPaymentDetails[1].textContent).toEqual('$10');
        expect(curPaymentDetails[2].textContent).toEqual('20%');

    });

    it('should add new row to summary containing new calculated values', function () {
        submitPaymentInfo();
        updateSummary();

        expect(summaryTds[0].textContent).toEqual('$50')
        expect(summaryTds[1].textContent).toEqual('$10')
        expect(summaryTds[2].textContent).toEqual('20%')
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        allPayments = {};
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    });

});