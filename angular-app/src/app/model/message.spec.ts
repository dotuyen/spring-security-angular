import { MessageModel } from './message';

describe('MessageModel', () => {
  it('should create an instance', () => {
    expect(new MessageModel(1, "helloWorld!")).toBeTruthy();
  });
});