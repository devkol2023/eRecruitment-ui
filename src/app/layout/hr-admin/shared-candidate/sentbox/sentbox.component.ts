import { Component } from '@angular/core';

@Component({
  selector: 'app-sentbox',
  standalone: false,
  
  templateUrl: './sentbox.component.html',
  styleUrl: './sentbox.component.scss'
})
export class SentboxComponent {
  tableColumns = [
    { key: 'candidateName', label: 'Candidate Name', width: '20%' },
    { key: 'appliedFor', label: 'Applied For', width: '20%' },
    { key: 'experience', label: 'Experience', width: '12%' },
    { key: 'skills', label: 'Skills', width: '23%' },
    { key: 'lastLogin', label: 'Applied on', width: '10%' },
    { key: 'status', label: 'Application Status', width: '10%' },
    { 
      key: 'action', 
      label: 'Action', 
      width: '10%',
      type: 'action', 
      types: { viewDetails: true}
    }
  ];

  sentBoxData = [
    {
      id: 'C001',
      candidateName: 'John Doe',
      appliedFor: 'Branch Manager',
      experience: '5 Years',
      skills: 'Leadership, Banking, Financial Analysis',
      status: 'Applied',
      lastLogin: '02/05/2024',
      candidateType: 'External',
      currentSalary: '$70,000',
      expectedSalary: '$90,000',
      checked: false,
      uploadedDocuments: [
        { name: 'Resume', file: 'resume_john_doe.pdf' },
        { name: 'ID Proof', file: 'john_doe_id.pdf' },
        { name: 'Banking Certification', file: 'banking_certification.pdf' }
      ]
    },
    {
      id: 'C004',
      candidateName: 'Emily Davis',
      appliedFor: 'HR Manager',
      experience: '8 Years',
      skills: 'Recruitment, Employee Relations, HR Policies',
      status: 'Applied',
      lastLogin: '04/05/2024',
      candidateType: 'Internal',
      currentSalary: '$85,000',
      expectedSalary: '$100,000',
      checked: false,
      uploadedDocuments: [
        { name: 'Resume', file: 'resume_emily_davis.pdf' },
        { name: 'ID Proof', file: 'emily_davis_id.pdf' }
      ]
    },
    {
      id: 'C005',
      candidateName: 'Robert Johnson',
      appliedFor: 'Software Developer',
      experience: '4 Years',
      skills: 'JavaScript, Angular, TypeScript, Node.js',
      status: 'Applied',
      lastLogin: '02/05/2024',
      candidateType: 'External',
      currentSalary: '$60,000',
      expectedSalary: '$80,000',
      checked: false,
      uploadedDocuments: [
        { name: 'Resume', file: 'resume_robert_johnson.pdf' },
        { name: 'Programming Certification', file: 'robert_certification.pdf' }
      ]
    },
    {
      id: 'C006',
      candidateName: 'Sophia Miller',
      appliedFor: 'Customer Service Representative',
      experience: '2 Years',
      skills: 'Communication, Problem Solving, Client Management',
      status: 'Applied',
      lastLogin: '05/05/2024',
      candidateType: 'Internal',
      currentSalary: '$40,000',
      expectedSalary: '$50,000',
      checked: false,
      uploadedDocuments: [
        { name: 'Resume', file: 'resume_sophia_miller.pdf' }
      ]
    }
  ]; 

  paginationConfig = {
    id: 'dynamic_table',
    itemsPerPage: 10, // Default items per page
    currentPage: 1, // Start on the first page
    totalItems: this.sentBoxData.length, // Total number of items
  };
}
