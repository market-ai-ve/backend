import { InMemoryAdToneRepository } from './AdToneRepository';

describe('AdToneRepository', () => {
  it('should be defined', () => {
    expect(InMemoryAdToneRepository).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of AdTone', () => {
      const adToneRepository = new InMemoryAdToneRepository();
      const adTones = adToneRepository.findAll();
      expect(adTones).toBeInstanceOf(Array);
    });
  });

  describe('findById', () => {
    it('should return an AdTone', () => {
      const tone = 'AdTone 1';
      const adToneRepository = new InMemoryAdToneRepository();

      adToneRepository.save({ tone });
      const findAll = adToneRepository.findAll();
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const getId = findAll[0].id;

      const adTone = adToneRepository.findById(getId);
      expect(adTone?.id).toBe(getId);
      expect(adTone?.tone).toBe(tone);
    });
  });

  describe('save', () => {
    it('should save an AdTone', () => {
      const tone = 'AdTone 1';

      const adToneRepository = new InMemoryAdToneRepository();
      const adTone = adToneRepository.save({ tone });
      expect(adTone.id).toBeDefined();
      expect(adTone.tone).toBe(tone);
    });
  });

  describe('update', () => {
    it('should update an AdTone', () => {
      const tone = 'AdTone 1';
      const adToneRepository = new InMemoryAdToneRepository();
      const adTone = adToneRepository.save({ tone });
      const updatedAdTone = adToneRepository.update(adTone.id, {
        tone: 'AdTone 2',
      });
      expect(updatedAdTone?.id).toBe(adTone.id);
      expect(updatedAdTone?.tone).toBe('AdTone 2');
    });
  });

  describe('delete', () => {
    it('should delete an AdTone', () => {
      const tone = 'AdTone 1';
      const adToneRepository = new InMemoryAdToneRepository();
      const adTone = adToneRepository.save({ tone });
      expect(adToneRepository.findAll()).toHaveLength(1);
      adToneRepository.delete(adTone.id);
      expect(adToneRepository.findAll()).toHaveLength(0);
    });
  });
});
