import { PlaningModule } from './planing.module';

describe('PlaningModule', () => {
  let planingModule: PlaningModule;

  beforeEach(() => {
    planingModule = new PlaningModule();
  });

  it('should create an instance', () => {
    expect(planingModule).toBeTruthy();
  });
});
