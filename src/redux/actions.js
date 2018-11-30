export const doTest = () => ({
    type: 'SET_TEST',
    test: 'some text',
});

export const loadAllMessages = (message) => ({
    type: 'LOAD_MESSAGES',
    messages,
});

export const importMessage = (message) => ({
    type: 'IMPORT_MESSAGE',
    message,
});