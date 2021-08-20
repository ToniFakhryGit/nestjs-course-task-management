import { Test } from '@nestjs/testing';
import { AssessmentStatus } from './assessment.model';
import { AssessmentsService } from './assessments.service';

const mockAssessmentsServices = () => ({
  getAllAssessments: jest.fn(),
  getAssesssmentById: jest.fn(),
});

describe('AssessmentsService', () => {
  let assessmentsService: AssessmentsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AssessmentsService,
        { provide: AssessmentsService, useFactory: mockAssessmentsServices },
      ],
    }).compile();

    assessmentsService = module.get(AssessmentsService);
  });

  // describe('getAllAssessments', () => {
  //   it('call AssessmentsService.getAllAssessments and return the results', () => {
  //     const result = assessmentsService.getAllAssessments();
  //     expect(result).toEqual('someValue');
  //   });
  // });

  describe('getAssessmentById', () => {
    it('calls AssesssmentById and returns the result', () => {
      const mockAssessment = {
        subject: 'Test Assessment By Id',
        learningOutcomes: 'Test desc',
        id: 'someId',
        status: AssessmentStatus.OPEN,
      };

      const result = assessmentsService.getAssesssmentById('someId');
      expect('someId').toEqual(mockAssessment.id);
    });
  });
});
