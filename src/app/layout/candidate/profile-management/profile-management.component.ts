import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-management',
  standalone: false,
  
  templateUrl: './profile-management.component.html',
  styleUrl: './profile-management.component.scss'
})
export class ProfileManagementComponent implements OnInit {
  profileForm: FormGroup;
  profile: any = null; // Store candidate profile
  uploadedDocuments: string[] = []; // Store uploaded document names

  skillsOptions = [
    'JavaScript', 'Angular', 'React', 'Node.js', 'TypeScript', 'Vue.js', 'Python', 
    'Django', 'Java', 'Spring Boot', 'AWS', 'Machine Learning', 'Data Science', 
    'Flutter', 'Dart', 'Firebase', 'Android', 'Tailwind CSS'
  ];  

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      skills: ['', Validators.required],
      experience: ['', Validators.required],
      resume: [null], // For document upload
    });
  }

  ngOnInit(): void {
    // Mock existing profile data
    this.profile = {
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      phone: '1234567890',
      // address: '123 Main Street, New York',
      // skills: 'Angular, JavaScript, TypeScript',
      // experience: '3+ Years',
      // documents: ['resume.pdf', 'certificate.pdf'],
    };

    // Pre-fill form with existing profile data
    this.profileForm.patchValue(this.profile);
    // this.uploadedDocuments = [...this.profile.documents];
  }

  // Update profile
  onSubmit(): void {
    if (this.profileForm.valid) {
      this.profile = { ...this.profileForm.value, documents: this.uploadedDocuments };
      // alert('Profile updated successfully!');
    } else {
      this.profileForm.markAllAsTouched();
    }
  }

  // Handle document upload
  onFileUpload(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.uploadedDocuments.push(file.name);
    }
  }

  // Remove uploaded document
  removeDocument(docName: string): void {
    this.uploadedDocuments = this.uploadedDocuments.filter(doc => doc !== docName);
  }
}