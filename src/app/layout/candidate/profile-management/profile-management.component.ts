import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { messages } from '../../../shared/constants/messages';
import { MessageDialogService } from '../../../shared/service/message-dialog.service';

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
    cv: {},
  };
  profilePhoto: string | null = null;
  constructor(private fb: FormBuilder, private dialogMessage: MessageDialogService) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      education: this.fb.array([]),
      experience: this.fb.array([]),
      skills: this.fb.array([]),
      cv: [null]
    });

    // Mock existing profile data
    const profileData = {
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890'
    };
    this.profileForm.patchValue(profileData);
    this.profileForm.get('email')?.disable();

    this.addEducation();
    this.addExperience();
    this.addSkill();
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
        years: ['']
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
    }
  }
}