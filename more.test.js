const { add, isNull, checkValue, createUser, fetchUser } = require('./more');

describe('Built more test base on a object', () => {
    test('Adds 2 + 2 to equal 4', () => {
        expect(add(2, 2)).toEqual(4);
    });
    test('Adds 2 + 2 to  NOT equal 5', () => {
        expect(add(2, 2)).not.toBe(5);
    });
    test('Should be null', () => {
        expect(isNull()).toBeNull();
    });
    test('Should be falsy', () => {
        expect(checkValue(0)).toBeFalsy();
    });
    test('User shoudl be Sonny Nguyen Object', () => {
        expect(createUser()).toEqual({
            firstName: 'Sonny',
            lastName: 'Nguyen'
        });//Object!!!
    });
    test('Should be less than 1600', () => {
        const load1 = 800;
        const load2 = 700;
        expect(load1 + load2).toBeLessThan(1600);
    });
    test('There is no I in team word', () => {
        expect('team').not.toMatch(/I/);
    });
    test('Admin should be in an Array:', () => {
        usernames = ['john', 'kary', 'admin'];
        expect(usernames).toContain('admin');
    });//Array!!!

    //Working with Promise data:
    test('User fetched name should be Leanne Graham', () => {
        expect.assertions(2);
        return fetchUser()
            .then(data => {
                expect(data.name).toEqual('Leanne Graham');
                expect(data.username).toEqual('Bret');
            });

    });

    //Working with Async/Await:
    test('User fetched email should be Sincere@april.biz', async () => {
        expect.assertions(1);
        const data = await fetchUser();
        expect(data.email).toEqual('Sincere@april.biz');
    });

    test('User fetched phone should be 1-770-736-8031 x56442', async () => {
        expect.assertions(1);
        const data = await fetchUser();
        expect(data.phone).toEqual('1-770-736-8031 x56442');
    });

})



// The execution order of describe and test

// describe('outer', () => {
//    console.log('describe outer-a');

//    describe('describe inner 1', () => {
//      console.log('describe inner 1');
//      test('test 1', () => {
//        console.log('test for describe inner 1');
//        expect(true).toEqual(true);
//      });
//    });

//    console.log('describe outer-b');

//    test('test 1', () => {
//      console.log('test for describe outer');
//      expect(true).toEqual(true);
//    });

//    describe('describe inner 2', () => {
//      console.log('describe inner 2');
//      test('test for describe inner 2', () => {
//        console.log('test for describe inner 2');
//        expect(false).toEqual(false);
//      });
//    });

//    console.log('describe outer-c');
//  });