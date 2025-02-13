import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TableComponent } from '../../../shared/table/table.component';
import { CustomErrorStateMatcher } from '../../../shared/matcher/ErrorStateMatcher';
import { ViewJobDetailsModalComponent } from '../../hr-admin/job-management/view-job-details-modal/view-job-details-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { messages } from '../../../shared/constants/messages';
import { MessageDialogService } from '../../../shared/service/message-dialog.service';

@Component({
  selector: 'app-job-posting',
  standalone: false,

  templateUrl: './job-posting.component.html',
  styleUrl: './job-posting.component.scss'
})
export class JobPostingComponent implements OnInit {
  jobForm: FormGroup;
  isEditMode = false;
  editingJobId: string | null = null;
  isJobPanelOpen = false;

  // Job Categories specific to Banking
  categories = ['Branch Manager', 'Customer Service Representative', 'Loan Officer', 'Financial Analyst', 'IT Support Specialist'];
  jobTypes = ['Full Time', 'Part Time', 'Contract', 'Internship'];
  industries = ['Banking', 'Finance', 'IT', 'Customer Service'];
  educationLevels = ['High School Diploma', 'Bachelor’s Degree', 'Master’s Degree', 'PhD'];
  candidateTypeOptions = ['Internal', 'External'];

  countries = ['United States', 'United Kingdom', 'India', 'Canada', 'St. Vincent'];
  states: any = {
    'United States': ['New York', 'California', 'Texas', 'Florida'],
    'United Kingdom': ['London', 'Manchester', 'Birmingham'],
    'India': ['Delhi', 'Maharashtra', 'Karnataka'],
    'Canada': ['Ontario', 'Quebec', 'British Columbia'],
    'St. Vincent': ['Kingstown', 'Georgetown', 'Barrouallie']
  };

  statesForSelectedCountry: string[] = [];
  matcher = new CustomErrorStateMatcher();
  jobId: string = '';

  constructor(private fb: FormBuilder, private dialog: MatDialog,
    private route: ActivatedRoute, private dialogMessage: MessageDialogService
  ) {
    this.jobForm = this.fb.group({
      jobTitle: ['', Validators.required],
      jobDescription: ['', [Validators.required, Validators.minLength(10)]],
      category: ['', Validators.required],
      vacancy: ['', Validators.required],
      jobType: ['', Validators.required],
      salaryMin: ['', [Validators.required, Validators.pattern('^[0-9.,]+$')]],
      salaryMax: ['', [Validators.required, Validators.pattern('^[0-9.,]+$')]],
      education: [''],
      city: ['', Validators.required],
      country: ['', Validators.required],
      state: ['', Validators.required],
      candidateType: ['', Validators.required],
      postingDate: ['', Validators.required],
      deadlineDate: ['', Validators.required],
      jobRefNo: ['', Validators.required],
      skills: this.fb.array([]),
      experience: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.jobId = params['jobId'];
      if(this.jobId) {
        this.loadData();
      } else {
        this.addSkills();
        this.addExperience();
      }
    });
  }

  loadData() {
    // Simulated fetched data
    const fetchedData = {
      "jobTitle": "Branch Manager",
      "jobDescription": "The Bank of St. Vincent and Grenadines is seeking a highly motivated and experienced Branch Manager to oversee the daily operations of the bank branch. The ideal candidate will be responsible for driving business growth, ensuring operational efficiency, and providing excellent customer service.",
      "category": "Management",
      "vacancy": 1,
      "jobType": "Full Time",
      "salaryMin": "5500",
      "salaryMax": "7000",
      "education": "Bachelor’s degree in Finance, Business Administration, or related field.",
      "city": "Kingstown",
      "country": "St. Vincent",
      "state": "SVG",
      "candidateType": "Internal",
      "postingDate": "2025-02-16",
      "deadlineDate": "2025-02-27",
      "jobRefNo": "BM-2024-02",
      "skills": [
        {"skillsDetails": "Minimum of 5 years of experience in banking or financial management."},
        {"skillsDetails": "Proven leadership experience in branch operations."}
      ],
      "experience": [
        {"expDetails": "Experienced in handling financial reports and budgets."},
        {"expDetails": "Familiar with banking software and digital banking solutions."}
      ]
    }    
    this.jobForm.patchValue(fetchedData);

    fetchedData.skills.forEach(skill => {
      this.addSkills(skill.skillsDetails);
    });
    fetchedData.experience.forEach(exp => {
      this.addExperience(exp.expDetails);
    });
  }

  get skillsControls() {
    return this.jobForm.get('skills') as FormArray;
  }

  get experienceControls() {
    return this.jobForm.get('experience') as FormArray;
  }

  addSkills(skillsDetails: string | null = null) {
    this.skillsControls.push(
      this.fb.group({
        skillsDetails: [skillsDetails || '', Validators.required]
      })
    );
  }

  removeSkill(index: number) {
    this.skillsControls.removeAt(index);
  }

  addExperience(expDetails: string | null = null) {
    this.experienceControls.push(
      this.fb.group({
        expDetails: [expDetails || '', Validators.required]
      })
    );
  }

  removeExperience(index: number) {
    this.experienceControls.removeAt(index);
  }

  onCountryChange(selectedCountry: string): void {
    this.statesForSelectedCountry = this.states[selectedCountry] || [];
    this.jobForm.get('state')?.setValue('');
  }

  onSubmit(): void {
    if (this.jobForm.valid) {
      const transformedData = this.transformData(this.jobForm.value);
      this.dialogMessage.open({
        title: messages.succussed,
        message: messages.jobPostedSuccessfully,
        iconType: 'success',
        buttons: [
          { text: 'Ok', style: 'primary-btn' }
        ]
      })
      this.jobForm.reset();
      this.jobForm.markAsPristine();
      this.jobForm.markAsUntouched();
    } else {
      this.jobForm.markAllAsTouched();
    }
  }

  previewJob(): void {
    if (this.jobForm.valid) {
      const transformedData = this.transformData(this.jobForm.value);
      this.dialog.open(ViewJobDetailsModalComponent, {
        width: '90%',
        disableClose: true,
        data: transformedData
      });
    } else {
      this.jobForm.markAllAsTouched();
    }
  }

  transformData(data: any) {
    return {
      title: data.jobTitle,
      company: 'Bank of St. Vincent and Grenadines',
      location: `${data.city}, ${data.country}`,
      salary: `$${data.salaryMin} - $${data.salaryMax} per month`,
      description: data.jobDescription,
      requirements: data.skills?.map((skill: any) => skill.skillsDetails),
      education: data.experience?.map((exp: any) => exp.expDetails),
      overview: {
        postedDate: new Date(data.postingDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }),
        location: data.city,
        vacancy: data.vacancy.toString(),
        jobRefNo: data.jobRefNo,
        jobNature: data.jobType,
        salary: `$${data.salaryMin} - $${data.salaryMax} per month`,
        applicationDeadline: new Date(data.deadlineDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
      },
      companyInfo: {
        name: 'Bank of St. Vincent and Grenadines',
        website: 'https://www.bosvg.com',
        email: 'careers@bosvg.com',
        description: `
              The Bank of St. Vincent and Grenadines is a leading financial institution committed to providing 
              innovative banking solutions and excellent customer service. We aim to foster growth
              and financial stability within the region through our dedicated team of professionals.
          `
      },
    };
  }
}
