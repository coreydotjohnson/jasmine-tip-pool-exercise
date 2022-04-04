describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add server name and earnings to server table on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let tableInfo = document.querySelectorAll('#serverTable tbody tr td');
    expect(tableInfo.length).toEqual(3);
    expect(tableInfo[0].textContent).toEqual('Alice');
    expect(tableInfo[1].textContent).toEqual('$0.00');
    expect(tableInfo[2].textContent).toEqual('X');
  })

  afterEach(function() {
    serverTbody.innerHTML = '';
    serverId = 0;
    allServers = {};
  });
});
