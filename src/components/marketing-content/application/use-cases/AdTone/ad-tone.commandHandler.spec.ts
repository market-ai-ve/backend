import {
  CreateAdToneCommandHandler,
  FindAllAdTonesCommandHandler,
  FindOneAdTonesCommandHandler,
  UpdateAdToneCommandHandler,
  DeleteAdToneCommandHandler,
} from './ad-tone.commandHandler';

describe('Test use cases ad tones', () => {
  describe('Test use case create ad tone', () => {
    it('should be defined', () => {
      expect(CreateAdToneCommandHandler).toBeDefined();
    });
  });

  describe('Test use case find all ad tone', () => {
    it('should be defined', () => {
      expect(FindAllAdTonesCommandHandler).toBeDefined();
    });
  });

  describe('Test use case find one ad tone', () => {
    it('should be defined', () => {
      expect(FindOneAdTonesCommandHandler).toBeDefined();
    });
  });

  describe('Test use case update ad tone', () => {
    it('should be defined', () => {
      expect(UpdateAdToneCommandHandler).toBeDefined();
    });
  });

  describe('Test use case delete ad tone', () => {
    it('should be defined', () => {
      expect(DeleteAdToneCommandHandler).toBeDefined();
    });
  });
});
