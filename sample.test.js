Feature('sample');

Scenario('log me in', async (I, LoginAs) => {
    await LoginAs('admin');
    I.seeElement('#navItem_1204785325 > a > div');
});