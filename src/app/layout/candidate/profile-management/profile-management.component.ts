import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { messages } from '../../../shared/constants/messages';
import { MessageDialogService } from '../../../shared/service/message-dialog.service';
import { CustomErrorStateMatcher } from '../../../shared/matcher/ErrorStateMatcher';

@Component({
  selector: 'app-profile-management',
  standalone: false,
  
  templateUrl: './profile-management.component.html',
  styleUrl: './profile-management.component.scss'
})
export class ProfileManagementComponent implements OnInit {
  profileForm!: FormGroup;
  uploadedDocuments: { [key: string]: { [index: number]: string } } = {
    education: {},
    experience: {},
    skills: {},
    certification: {},
    cv: {},
  };
  profilePhoto: string | null = null;
  candidateId: any = null;

  matcher = new CustomErrorStateMatcher();
  statesForSelectedCountry: string[] = [];
  countries = ['United States', 'United Kingdom', 'India', 'Canada', 'St. Vincent'];
  states: any = {
    'United States': ['New York', 'California', 'Texas', 'Florida'],
    'United Kingdom': ['London', 'Manchester', 'Birmingham'],
    'India': ['Delhi', 'Maharashtra', 'Karnataka'],
    'Canada': ['Ontario', 'Quebec', 'British Columbia'],
    'St. Vincent': ['Kingstown', 'Georgetown', 'Barrouallie']
  };

  constructor(private fb: FormBuilder, private dialogMessage: MessageDialogService) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      fatherName: ['', [Validators.required]],
      motherName: ['', [Validators.required]],
      highestQualification: ['', Validators.required],
      workStatus: ['', Validators.required],
      passportNumber: [''],
      drivingLicenseNumber: [''],
      country: ['', Validators.required],
      state: ['', Validators.required],
      address: ['', Validators.required],
      education: this.fb.array([]),
      experience: this.fb.array([]),
      skills: this.fb.array([]),
      certification: this.fb.array([]),
      cv: [null]
    });

    // Mock existing profile data
    const profileData = {
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      workStatus: 'experienced'
    };
    this.profileForm.patchValue(profileData);
    this.profileForm.get('email')?.disable();

    this.addEducation();
    this.addExperience();
    this.addSkill();
    this.addCertification();
  }

  get educationControls() {
    return this.profileForm.get('education') as FormArray;
  }

  get experienceControls() {
    return this.profileForm.get('experience') as FormArray;
  }

  get skillsControls() {
    return this.profileForm.get('skills') as FormArray;
  }

  get certificationControls() {
    return this.profileForm.get('certification') as FormArray;
  }

  addEducation() {
    this.educationControls.push(
      this.fb.group({
        degree: ['', Validators.required],
        institute: ['', Validators.required],
        yearOfCompletion: ['', Validators.required]
      })
    );
  }

  removeEducation(index: number) {
    this.educationControls.removeAt(index);
    delete this.uploadedDocuments['education'][index];
  }

  addExperience() {
    this.experienceControls.push(
      this.fb.group({
        company: [''],
        designation: [''],
        years: [''],
        leavingYear: ['']
      })
    );
  }

  removeExperience(index: number) {
    this.experienceControls.removeAt(index);
    delete this.uploadedDocuments['experience'][index];
  }

  addSkill() {
    this.skillsControls.push(
      this.fb.group({
        skillName: ['', Validators.required],
        experienceYears: ['', Validators.required],
        lastUsedYear: ['', Validators.required]
      })
    );
  }

  removeSkill(index: number) {
    this.skillsControls.removeAt(index);
    delete this.uploadedDocuments['skills'][index];
  }

  addCertification(): void {
    this.certificationControls.push(
      this.fb.group({
        certificationName: [''],
        certificationYear: [''],
        certificationValidUpto: ['']
      })
    );
  }

  removeCertification(index: number) {
    this.certificationControls.removeAt(index);
    delete this.uploadedDocuments['certification'][index];
  }

  onFileUpload(event: any, category: string, index?: number) {
    const file = event.target.files[0];
    if (file) {
      if (index !== undefined) {
        this.uploadedDocuments[category][index] = file;
      } else {
        this.uploadedDocuments[category] = { 0: file };
      }
    }
  }

  triggerProfilePhotoUpload() {
    const fileInput = document.getElementById('profilePhotoInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  onProfilePhotoUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.profilePhoto = e.target.result; // Convert to Base64 URL for preview
      };
      reader.readAsDataURL(file);
    }
  }

  triggerIdUpload() {
    const fileInput = document.getElementById('idInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  
  onIdUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (file) {
        this.candidateId = file;
      }
    }
  }

  onCountryChange(selectedCountry: string): void {
    this.statesForSelectedCountry = this.states[selectedCountry] || [];
    this.profileForm.get('state')?.setValue('');
  }

  markFormArrayAsTouched(formArrayName: string) {
    const formArray = this.profileForm.get(formArrayName) as FormArray;
    formArray.controls.forEach(control => {
      if (control instanceof FormGroup) {
        for (const key in control.controls) {
          control.controls[key].markAsTouched();
        }
      } else {
        control.markAsTouched();
      }
    });
  }

  onSubmit(): void {
    if (this.profileForm.valid) {
      console.log('Profile Updated:', this.profileForm.value);
      console.log('Uploaded Files:', this.uploadedDocuments);
      this.dialogMessage.open({
        title: messages.succussed,
        message: messages.profileUpdated,
        iconType: 'success',
        buttons: [
          { text: 'Ok', style: 'primary-btn' },
        ]
      });
    } else {
      this.profileForm.markAllAsTouched();
      this.markFormArrayAsTouched('education');
      this.markFormArrayAsTouched('skills');
    }
  }
}